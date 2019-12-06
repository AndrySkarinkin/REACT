const dataLoaded = newData => {
  return {
    type: "DATA-LOADED",
    payload: newData
  };
};

const dataRequsted = () => {
  return {
    type: "DATA-REQUSTED"
  };
};

const dataError = () => {
  return {
    type: "DATA-ERROR"
  };
};

const findItems = findItems => {
  return {
    type: "FIND-ITEM",
    findItems: findItems
  };
};

const filterItems = filterTitle => {
  return {
    type: "FILTER-ITEMS",
    filter: filterTitle
  };
};

export { dataLoaded, dataRequsted, dataError, findItems, filterItems };
