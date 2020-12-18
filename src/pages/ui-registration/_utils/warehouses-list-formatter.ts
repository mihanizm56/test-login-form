import { SearchMultiInputOption } from '@wildberries/ui-kit';

type WarehouseOption = {
  id: number;
  label: string;
};

type PureWarehousesResponseType = {
  warehouses: Array<WarehouseOption>;
};

export const warehousesListFormatter = (
  responseData: PureWarehousesResponseType,
): Array<SearchMultiInputOption> =>
  responseData.warehouses.map(({ id, label }) => ({
    id,
    label,
  }));
