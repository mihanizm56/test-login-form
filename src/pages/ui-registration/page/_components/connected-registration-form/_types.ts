export type RegistrationFormDataType = {
  legalFormID: string;
  inn: string;
  kpp: string;
  ogrn: string;
  ogrnip: string;
  okpo: string;
  okopf: string;
  general: string;
  passportDoc: Array<File>;
  passportDocID: string;
  countryID: string;
  juridicalAddress: string;
  fullName: string;
  name: string;
  bin: string;
  unp: string;
};

export type TranslatedRegistrationFormTextType = {
  title: string;
  name: string;
  unp: string;
  unpPlaceholder: string;
  nameOrganizationPlaceholder: string;
  nameIpPlaceholder: string;
  allowFormatsPlaceholder: string;
  bin: string;
  binPlaceholder: string;
  buttonSubmit: string;
  buttonCancel: string;
  legalFormID: string;
  legalFormPlaceholder: string;
  inn: string;
  innPlaceholder: string;
  kpp: string;
  kppPlaceholder: string;
  ogrn: string;
  ogrnip: string;
  okpo: string;
  okopf: string;
  contactFullName: string;
  ogrnPlaceholder: string;
  ogrnipPlaceholder: string;
  okpoPlaceholder: string;
  okopfPlaceholder: string;
  contactFullNamePlaceholder: string;
  passportDoc: string;
  passportDocPlaceholder: string;
  juridicalAddress: string;
  country: string;
  countryID: string;
  countryPlaceholder: string;
  juridicalAddressPlaceholder: string;
  mainInfo: string;
  innInfo: string;
  photoContentTitle: string;
  photoContentText: string;
  generalBusiness: string;
  generalOwn: string;
  fullName: string;
  fullNamePlaceholder: string;
  generalBusinessPlaceholder: string;
  generalOwnPlaceholder: string;
  nameOrganizationTooltipText: string;
  nameIpTooltipText: string;
};