const initialState = {
  data: [],
  loading: true,
  error: false,
  update: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA-LOADED":
      return {
        data: action.payload,
        loading: false,
        error: false
      };
    case "DATA-REQUSTED":
      return {
        ...state,
        loading: true,
        error: false
      };
    case "DATA-ERROR":
      return {
        ...state,
        loading: false,
        error: true
      };
    case "FIND-ITEM":
      const newItems = [];
      state.data.forEach(el => {
        if (el.name.toLowerCase().includes(action.findItems.toLowerCase())) {
          newItems.push(el);
        }
      });
      if (newItems.length > 0) {
        return {
          ...state,
          data: newItems
        };
      } else {
        return {
          ...state,
          data: newItems
        };
      }
    case "FILTER-ITEMS":
      const filter = action.filter;
      const filterData = state.data.filter(el => el.country === filter);
      return {
        ...state,
        data: filterData
      };
    default:
      return state;
  }
};

export default reducer;
