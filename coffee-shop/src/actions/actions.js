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

const setCurrentCoffee = currentCoffee => {
  return {
    type: "SET-CURRENT-COFFEE",
    currentItem: currentCoffee
  };
};

export {
  dataLoaded,
  dataRequsted,
  dataError,
  findItems,
  filterItems,
  setCurrentCoffee
};
