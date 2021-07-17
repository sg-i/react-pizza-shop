import styles from './App.module.scss';
import React from 'react';
import { Header, Card, FilterBtn } from './components';
function App() {
  const filterPizzaArr = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [sortVisible, setSortVisible] = React.useState('hidden');
  const [filterBtnChoice, setFilterBtnChoice] = React.useState(0);
  const onSortVisible = () => {
    console.log('as');
    setSortVisible('visible');
  };
  const offSortVisible = () => {
    console.log('as');
    setSortVisible('hidden');
  };
  return (
    <div className="clear">
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.filter + ' d-flex justify-between align-center'}>
          <div className={styles.filterPizza + ' d-flex'}>
            {filterPizzaArr.map((elem, index) => (
              <FilterBtn
                key={index}
                index={index}
                setFilterBtnChoice={setFilterBtnChoice}
                filterBtnChoice={filterBtnChoice}
                title={elem}
              />
            ))}
          </div>
          <div className={styles.sort}>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"
              />
            </svg>
            <b>Сортировка по:</b>
            <span onMouseOut={offSortVisible} onMouseOver={onSortVisible}>
              популярности
            </span>
            <div
              onMouseOut={offSortVisible}
              onMouseOver={onSortVisible}
              style={{ visibility: sortVisible }}
              className={styles.choiceSort}>
              <ul>
                <li>популярности</li>
                <li>по цене</li>
                <li>по алфавиту</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <b className={styles.titlePage}>Все пиццы</b>
          <div className={styles.content + ' d-flex flex-wrap'}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
