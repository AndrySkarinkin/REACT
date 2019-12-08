const initialState = {
  data: [
    {
      name: "Death Wish Bean",
      country: "Brazil",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/91DlZZBjxzL._SX522_.jpg",
      price: "12.99$",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
    },
    {
      name: "AROMISTICO Coffee 1 kg",
      country: "Brazil",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/71qBQnpQFYL._SL1500_.jpg",
      price: "6.99$",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
    },
    {
      name: "Solimo Coffee Beans 2 kg",
      country: "Kenya",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/815O9ktyfUL._SL1500_.jpg",
      price: "10.73$",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
    },
    {
      name: "Black Rifle Coffee",
      country: "Kenya",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/91vwF6Kh8IL._SX522_.jpg",
      price: "19.75$",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
    },
    {
      name: "Presto Coffee Beans 1 kg",
      country: "Columbia",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/91Ryk2gKejL._SL1500_.jpg",
      price: "15.99$",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
    },
    {
      name: "Organic Coffee One Cup",
      country: "Columbia",
      url: "https://images-na.ssl-images-amazon.com/images/I/51M2fmEXTIL.jpg",
      price: "24.99$",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
    }
  ],
  loading: true,
  error: false,
  update: false,
  currentCoffee: [
    {
      name: "Black Rifle Coffee",
      country: "Kenya",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/91vwF6Kh8IL._SX522_.jpg",
      price: "19.75$",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA-LOADED":
      return {
        ...state,
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
    case "SET-CURRENT-COFFEE":
      const currentItem = action.currentItem;
      const currentCoffee = state.data.filter(el => el.name === currentItem);
      return {
        ...state,
        currentCoffee: currentCoffee
      };
    default:
      return state;
  }
};

export default reducer;
