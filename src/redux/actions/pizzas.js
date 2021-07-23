import axios from 'axios';
const sortByRating = (a, b) => {
  const ratingA = a.rating;
  const ratingB = b.rating;
  return ratingB - ratingA;
};
export const fetchPizzas = () => (dispatch) => {
  axios
    .get('http://localhost:3001/pizzas')
    .then(({ data }) => dispatch(setPizzas(data.sort(sortByRating))));
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
