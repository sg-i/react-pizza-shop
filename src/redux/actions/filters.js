const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
});

const setSortBy = (name) => ({
  type: 'SET_SORT_BY',
  payload: name,
});
