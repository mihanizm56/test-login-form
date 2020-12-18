export type ValidatorType<ItemType> = {
  item: ItemType;
  searchString: string;
};

type ParamsType<ItemType> = {
  searchString: string;
  data: Array<ItemType>;
  validator: (options: ValidatorType<ItemType>) => boolean;
};

export const searcher = <ItemType>({
  searchString,
  data,
  validator,
}: ParamsType<ItemType>) =>
  data.reduce((acc, item) => {
    if (!Boolean(searchString)) {
      acc.push(item);

      return acc;
    }

    const isItemFound = validator({ item, searchString });

    if (isItemFound) {
      acc.push(item);
    }

    return acc;
  }, []);
