export const setPizzaCart = (pizza) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizza,
});
export const clearCart = {
  type: 'CLEAR_CART',
};
export const dltPizza = (data) => ({
  type: 'DLT_ONE_PIZZA',
  payload: data,
});
