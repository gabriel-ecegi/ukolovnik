import * as React from "react";
import { Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledFlex } from "Shared/StyledComponents";
import { BlPopper } from "Shared/BlPopper";
import { BlDefaultButton } from "Shared/Buttons/BlDefaultButton";
import styled from "@emotion/styled";

export type TabType = {
  tabID: number;
  title: string;
  child: JSX.Element;
  url?: string;
  name: string;
  count?: number;
};

type Props = {
  activeTabID: number;
  tabs: TabType[];
  onActiveTabChange?: (tabID: number) => void;
};

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const StyledTabsWrapper = styled(StyledFlex)<{ $hideIndicator: boolean }>`
  margin-bottom: ${(props) => props.theme.spacing(3)};
  position: relative;

  .MuiTabs-indicator {
    display: ${(props) => (props.$hideIndicator ? "none" : "")};
  }
`;

const StyledTabs = styled(Tabs)`
  min-height: 40px;
  border-bottom: 1px solid ${(props) => props.theme.colors.contentWrapperBorder};
  flex: 1;

  .MuiTabs-indicator {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`;

const StyledTab = styled(({ ...rest }) => <Tab {...rest} />)<{
  $notVisible: boolean;
}>`
  text-transform: none;
  padding: ${(props) => props.theme.spacing(0, 1.6)};
  min-width: 0;
  min-height: 60px;
  font-size: ${(props) => props.theme.typography.body1.fontSize}px;
  font-weight: 700;
  line-height: 1.4;
  margin-right: ${(props) => props.theme.spacing(3)};
  opacity: ${(props) => (props.notVisible ? 0 : 1)} !important;
  position: ${(props) => (props.notVisible ? "absolute" : "")};
  pointer-events: ${(props) => (props.notVisible ? "none" : "")};

  .MuiTab-wrapper {
    width: initial;
    padding-right: ${(props) => props.theme.spacing(4)};
  }

  &.Mui-selected {
    .MuiTab-wrapper {
      color: ${(props) => props.theme.palette.primary.main};
    }
  }
`;

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      className="bl-tabs__tab-panel"
      hidden={value !== index}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
};

const StyledPopperBtn = styled(BlDefaultButton)`
  display: flex;
  transform: translate(-25px, 8px);

  svg {
    width: 16px;
    height: auto;
  }
`;

const StyledPopperMenu = styled.div`
  .MuiTabs-indicator {
    display: none;
  }
  .MuiTabs-flexContainer {
    flex-flow: column;
  }
  .MuiTabs-root {
    border: none;
  }
  .MuiTab-root {
    padding: ${(props) => props.theme.spacing(0, 2)};
    margin: 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }
  .Mui-selected {
    border-bottom: 2px solid ${(props) => props.theme.palette.primary.main};
  }
`;

export const BlTabs: React.FunctionComponent<Props> = (props) => {
  const [activeTabID, setActiveTabID] = React.useState(props.activeTabID);
  const navigate = useNavigate();
  const tabBtnsRef = React.useRef<HTMLDivElement>(null);
  const [tabBtnsToHide, setTabBtnsToHide] = React.useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setActiveTabID(props.activeTabID);
  }, [props.activeTabID]);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    const tab = props.tabs.find((x) => x.tabID === newValue);
    if (newValue !== activeTabID && tab && tab.url) {
      navigate(tab.url);
    }
    setActiveTabID(newValue);
    setIsMenuOpen(false);
    props.onActiveTabChange?.(newValue);
  };

  const getTabLabel = (title: string, count?: number) => {
    let label: string = title;
    if (count !== undefined) {
      label += ` (${count})`;
    }
    return label;
  };

  const handleResize = (el: HTMLDivElement | null) => {
    if (!el) {
      return;
    }
    const maxWidth = el.scrollWidth - 110;
    let currentBtnWidth = 0;
    let btnsToHide = 0;
    const btns = el.querySelectorAll("button.MuiTab-root");
    // biome-ignore lint/complexity/noForEach: <explanation>
    btns.forEach((btn) => {
      currentBtnWidth += btn.scrollWidth + 24;
      if (currentBtnWidth >= maxWidth) {
        btnsToHide++;
      }
    });
    setTabBtnsToHide(btnsToHide);
    if (btnsToHide === 0) {
      setIsMenuOpen(false);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    const el = tabBtnsRef.current;
    if (el && props.tabs) {
      handleResize(el);
    }
    const handler = () => handleResize(el);

    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [tabBtnsRef, props.tabs]);

  return (
    <div className="bl-tabs">
      <StyledTabsWrapper
        $justifyContent={"space-between"}
        $hideIndicator={props.tabs.length - tabBtnsToHide <= activeTabID}
        className="bl-tabs__wrapper"
      >
        <StyledTabs
          value={activeTabID}
          onChange={handleChange}
          ref={tabBtnsRef}
        >
          {props.tabs.map((tab, i) => (
            <StyledTab
              key={tab.tabID}
              label={getTabLabel(tab.title, tab.count)}
              $notVisible={props.tabs.length - 1 - i < tabBtnsToHide}
            />
          ))}

          {tabBtnsToHide && (
            <BlPopper
              isOpen={isMenuOpen}
              onOpen={() => setIsMenuOpen(true)}
              btnEl={<StyledPopperBtn>NWM</StyledPopperBtn>}
            >
              <StyledPopperMenu>
                <StyledTabs value={activeTabID} onChange={handleChange}>
                  {props.tabs.map((tab, i) => (
                    <StyledTab
                      key={tab.tabID}
                      label={getTabLabel(tab.title, tab.count)}
                      $notVisible={i < props.tabs.length - tabBtnsToHide}
                    />
                  ))}
                </StyledTabs>
              </StyledPopperMenu>
            </BlPopper>
          )}
        </StyledTabs>
      </StyledTabsWrapper>

      {props.tabs.map((tab) => (
        <TabPanel key={tab.tabID} value={activeTabID} index={tab.tabID}>
          {tab.child}
        </TabPanel>
      ))}
    </div>
  );
};
