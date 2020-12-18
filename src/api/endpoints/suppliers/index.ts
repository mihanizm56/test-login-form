import { SUPPLIERS_URL_DEV } from './urls';

export const getSuppliersEndpoint = (): string =>
  process.env.NODE_ENV === 'production'
    ? window.SUPPLIERS_URL
    : SUPPLIERS_URL_DEV;

export const getRegistrationEndpoint = () =>
  `${getSuppliersEndpoint()}/register`;

export const getWarehousesListEndpoint = () =>
  `${getSuppliersEndpoint()}/allWarehouseList`;

export const getCountriesEndpoint = () =>
  `${getSuppliersEndpoint()}/listCountries`;

export const getDownloadContractEndpoint = () =>
  `${getSuppliersEndpoint()}/downloadContractOffer`;

export const getFetchSuppliersEndpoint = () =>
  `${getSuppliersEndpoint()}/getUserSuppliers`;

export const getListLegalFormsEndpoint = () =>
  `${getSuppliersEndpoint()}/listLegalForms`;

export const getLoadInnInfoEndpoint = () =>
  `${getSuppliersEndpoint()}/loadInnInfo`;

export const getUploadDocumentEndpoint = () =>
  `${getSuppliersEndpoint()}/uploadDocument`;
