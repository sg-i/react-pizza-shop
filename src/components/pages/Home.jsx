import React from 'react';
import { Card, FilterBtn } from '../';
import styles from '../../App.module.scss';
import store from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import ContentLoader from 'react-content-loader';
const filterPizzaArr = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortArr = [
  { name: 'популярности', type: 'popular' },
  { name: 'по цене', type: 'price' },
  { name: 'по алфавиту', type: 'alphabet ' },
];
const isLoadingBlock = new Array(10);
isLoadingBlock.fill(0);

function Home() {
  const dispatch = useDispatch();

  const { items, filters, isLoaded } = useSelector((state) => {
    return {
      items: state.pizzas.items,
      filters: state.filters,
      isLoaded: state.pizzas.isLoaded,
    };
  });

  const [sortVisible, setSortVisible] = React.useState('hidden');
  const [sortChoice, setSortChoice] = React.useState(0);
  const onSortVisible = () => {
    setSortVisible('visible');
  };
  const offSortVisible = () => {
    setSortVisible('hidden');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.filter + ' d-flex justify-between align-center'}>
        <div className={styles.filterPizza + ' d-flex'}>
          {filterPizzaArr.map((elem, index) => (
            <FilterBtn
              key={elem + index}
              index={index}
              // setFilterBtnChoice={setFilterBtnChoice}
              filterBtnChoice={filters.category}
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
            {sortArr[sortChoice].name}
          </span>
          <div
            onMouseOut={offSortVisible}
            onMouseOver={onSortVisible}
            style={{ visibility: sortVisible }}
            className={styles.choiceSort}>
            <ul>
              {sortArr.map((el, index) => (
                <li
                  className={sortChoice === index ? styles.itemSortAct : styles.itemSortNotAct}
                  onClick={() => {
                    setSortChoice(index);
                  }}
                  key={el.type + index}>
                  {el.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <b className={styles.titlePage}>Все пиццы</b>
        <div className={styles.content + ' d-flex flex-wrap'}>
          {console.log(isLoaded, isLoadingBlock)}
          {isLoaded
            ? items.map((el) =>
                filters.category !== 0 ? (
                  el.category === filters.category && <Card key={el.id + el.name} {...el} />
                ) : (
                  <Card key={el.id + el.name} {...el} />
                ),
              )
            : isLoadingBlock.map((el) => (
                <div className={styles.contentLoading}>
                  <ContentLoader
                    speed={2}
                    width={280}
                    height={489}
                    viewBox="0 0 280 460"
                    backgroundColor="#ededed"
                    foregroundColor="#ffffff">
                    <circle cx="137" cy="130" r="120" />
                    <rect x="146" y="416" rx="18" ry="18" width="127" height="35" />
                    <rect x="40" y="271" rx="18" ry="18" width="202" height="35" />
                    <rect x="0" y="317" rx="18" ry="18" width="280" height="75" />
                    <rect x="0" y="416" rx="18" ry="18" width="68" height="35" />
                  </ContentLoader>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
