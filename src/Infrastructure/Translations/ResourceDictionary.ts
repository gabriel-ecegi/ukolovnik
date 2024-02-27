import { ResourceLanguage } from "i18next";

export interface ResourceDictionary extends ResourceLanguage {
  Common: {
    AppName: string;
    Years: string;
    Years_one: string;
    Years_two: string;
    Years_few: string;
    Years_other: string;
    YearsLabel: string;
    YearsLabel_one: string;
    YearsLabel_few: string;
    YearsLabel_other: string;
    Month: string;
    Months: string;
    Months_one: string;
    Months_two: string;
    Months_few: string;
    Months_other: string;
    Continue: string;
    Step: string;
    TextCopied: string;
    Yes: string;
    No: string;
    Choose: string;
    Download: string;
    Downloading: string;
    UnsupportedFileType: string;
    Email: string;
    Password: string;
    ExampleLogin: string;
    PiecesShort: string;
    PiecesSuffix: string;
    Active: string;
    Inactive: string;
    Actual: string;
    Blocked: string;
    Canceled: string;
    Cancel: string;
    Close: string;
    Confirm: string;
    Ended: string;
    All: string;
    AllStatuses: string;
    PrivacyPolicyLink: string;
    Error: string;
    Save_Uppercase: string;
    Save: string;
    Reset: string;
    WithTax: string;
    WithoutTax: string;
    Edit: string;
    Back: string;
    Delete: string;
    SaveAndClose: string;
    PreviousStep: string;
    SaveSuccess: string;
    CompanyNumber: string;
    TaxNumber: string;
    PersonalNumber: string;
    ProcessedByRepresentative: string;
    SendByRepresentative: string;
    SignOut: string;
  };
  Errors: {
    ApplicationError: {
      Title: string;
      Home: string;
    };
    Error404: {
      Subtitle: string;
      Home: string;
    };
    Error403: {
      Subtitle: string;
    };
    Error500: string;
  };
  SignIn: {
    Error: {
      General: string;
      InvalidLogin: string;
      InvalidCredentials: string;
      ApplicationVerification: string;
      PhoneNumberNotFound: string;
      SmsSendingFailed: string;
      InvalidToken: string;
      AccountNotFound: string;
    };
    Title: string;
    Login: {
      Label: string;
    };
    Password: {
      Label: string;
    };
    Button: string;
  };
  SignUp: {
    Error: {
      General: string;
      UserExists: string;
      WeakPassword: string;
    };
  };
  SetPassword: {
    Error: {
      General: string;
      TokenNotFound: string;
      WeakPassword: string;
    };
  };
  Validation: {
    Required: string;
    InvalidEmail: string;
    AlphabetsOnly: string;
    DigitsOnly: string;
    InvalidPhone: string;
    InvalidFormat: string;
    InvalidBankAccount: string;
    InvalidPersonalIdentificationNumber: string;
    InvalidTaxNumber: string;
    InvalidCompanyNumber: string;
    IsTrue: string;
    Number: {
      Integer: string;
      Min: string;
      MoreThen: string;
    };
    String: {
      Min: string;
      Max: string;
      StrictLength: string;
      InvalidFormat: string;
    };
    Array: {
      Min: string;
      Min_one: string;
      Min_few: string;
      Min_other: string;
    };
  };
  BlDatePicker: {
    Placeholder: string;
    Presets: {
      Today: string;
      Yesterday: string;
      Last7Days: string;
      Last30Days: string;
      ThisMonth: string;
      LastMonth: string;
    };
    Locales: {
      One: string;
      Two: string;
      Few: string;
      Other: string;
      Many: string;
      Zero: string;
    };
  };
  Autocomplete: {
    ClearText: string;
    CloseText: string;
    OpenText: string;
    NoOptionsText: string;
    LoadingText: string;
  };
  Table: {
    NoData: string;
    RowsPerPage: string;
    NextPage: string;
    PrevPage: string;
  };
  zod: any;
}
