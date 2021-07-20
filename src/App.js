import React from 'react';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Header from './components/Header';
import styles from './App.module.scss';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { setPizzas } from './redux/actions/pizzas';
import store from './redux/store';
import { connect } from 'react-redux';
function App() {
  React.useEffect(() => {
    axios
      .get('http://localhost:3000/db.json')
      .then((el) => store.dispatch(setPizzas(el.data.pizzas)));
  }, []);

  return (
    <div className="clear">
      <div className={styles.wrapper}>
        <Header />
        <Route path="/" exact>
          <Home pizza={store.getState().pizzas.items} />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.pizzas.items,
  };
};
export default connect(mapStateToProps)(App);
