import styled from "@emotion/styled";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  Button,
  Stack,
} from "@mui/material";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
} from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ClientIcon from "@mui/icons-material/Group";
import TaskIcon from "@mui/icons-material/Assignment";
import { Resources, useResource } from "Infrastructure/Translations/Resources";
import { UnstyledLink } from "Shared/Routing/UnstyledLink";
import { AppRouting, getPath } from "Infrastructure/Utils/UrlUtils";
import LogoutIcon from "@mui/icons-material/Logout";
import { useUserInfoQuery } from "Auth/Api/Queries/useUserInfoQuery";
import { useSignOutMutation } from "Auth/Api/Mutations/useSignOutMutation";

type Props = {
  title: string;
};

const drawerWidth = 240;

const StyledBox = styled(Box)`
  display: flex;
`;

const StyledAppBar = styled(AppBar)(
  ({ theme }: { theme: Theme }) => `
  z-index: ${theme.zIndex.drawer + 1};
`
);

const StyledDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  flex-shrink: 0;

  & .MuiDrawer-paper {
    width: ${drawerWidth}px;
    box-sizing: border-box;
  }

  .MuiTypography-root {
    color: ${(props) => props.theme.palette.text.primary};
  }
`;

const StyledMainContent = styled(Box)`
  flex-grow: 1;
  padding: 16px;
`;

const StyledListItem = styled(ListItem)`
  padding: 0;
`;

type AuthenticatedLayoutContextType = {
  isMenuShown: boolean;
};

export const AuthenticatedLayoutContext =
  createContext<AuthenticatedLayoutContextType>({
    isMenuShown: false,
  });

export const AuthenticatedLayout: FC<PropsWithChildren<Props>> = ({
  title,
  children,
}) => {
  const { t } = useResource();
  const { isMenuShown } = useContext(AuthenticatedLayoutContext);

  useEffect(() => {
    document.title = `${title} | ${t(Resources.Common.AppName)}`;
  }, [title, t]);

  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      to: getPath(AppRouting.Dashboard),
    },
    { text: "Klienti", icon: <ClientIcon />, to: getPath(AppRouting.Clients) },
    { text: "Úkolovník", icon: <TaskIcon />, to: getPath(AppRouting.Tasks) },
  ];

  const { data } = useUserInfoQuery();

  const userLogin = data?.data?.login;
  const { mutate: signOut } = useSignOutMutation();

  return (
    <StyledBox>
      {isMenuShown && (
        <>
          <StyledAppBar position="fixed">
            <Toolbar>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Typography variant="h6" noWrap component="div">
                  {title}
                </Typography>
                <Stack
                  direction={"row"}
                  justifyContent="flex-end"
                  alignItems="center"
                  spacing={2}
                >
                  <Typography>{userLogin}</Typography>
                  {/* <Button
                    color="inherit"
                    onClick={() => signOut()}
                    startIcon={<LogoutIcon />}
                  >
                    {t(Resources.Common.SignOut)}
                  </Button> */}
                </Stack>
              </Stack>
            </Toolbar>
          </StyledAppBar>
          <StyledDrawer variant="permanent">
            <Toolbar />
            <Box
              sx={{
                overflow: "auto",
              }}
            >
              <List>
                {menuItems.map((item) => (
                  <UnstyledLink to={item.to} key={item.text}>
                    <StyledListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </StyledListItem>
                  </UnstyledLink>
                ))}
              </List>
            </Box>
          </StyledDrawer>
        </>
      )}

      <StyledMainContent component="main">
        <Toolbar />
        {children}
      </StyledMainContent>
    </StyledBox>
  );
};
