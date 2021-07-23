const initialState = {
  items: [],
  totalSum: 0,
  totalCount: 0,
};
const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      let object1 = {
        imageUrl: action.payload.imageUrl,
        activeSize: action.payload.activeSize,
        activeType: action.payload.activeType,
        name: action.payload.name,
        price: action.payload.price,
      };

      return {
        ...state,
        items: [...state.items, object1],
        totalSum: state.items.reduce((sum, obj) => obj.price + sum, 0) + action.payload.price,
        totalCount: state.items.length + 1,
      };
    }

    case 'DLT_ONE_PIZZA': {
      let test = false;
      let testId = 0;
      for (let i = 0; i < state.items.length; i++) {
        if (
          state.items[i].name === action.payload.name &&
          state.items[i].activeType === action.payload.activeType &&
          state.items[i].activeSize === action.payload.activeSize
        ) {
          testId = i;
        }
        if (testId !== 0) break;
      }

      console.log(state.items);
      state.items.splice(testId, 1);
      console.log(state.items);
      let test123 = state.items;
      console.log(test123);

      return {
        items: [...state.items],

        totalCount: state.totalCount - 1,
        totalSum: state.totalSum - action.payload.price,
      };
    }

    case 'CLEAR_CART': {
      return {
        items: [],
        totalCount: 0,
        totalSum: 0,
      };
    }

    default:
      return state;
  }
};

export default cart;
