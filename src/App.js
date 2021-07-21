import React from 'react';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Header from './components/Header';
import styles from './App.module.scss';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { fetchPizzas } from './redux/actions/pizzas';
import store from './redux/store';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  return (
    <div className="clear">
      <div className={styles.wrapper}>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}
export default App;
