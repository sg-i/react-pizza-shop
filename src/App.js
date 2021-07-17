import styles from './App.module.scss';
import Header from './components/Header';
import FilterBtn from './components/FilterBtn';
function App() {
  return (
    <div className="App clear">
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.filter + ' d-flex justify-between align-center'}>
          <div className={styles.filterPizza + ' d-flex'}>
            <FilterBtn title={'Все'} />
            <FilterBtn title={'Мясные'} />
            <FilterBtn title={'Вегетарианская'} />
            <FilterBtn title={'Гриль'} />
            <FilterBtn title={'Острые'} />
            <FilterBtn title={'Закрытые'} />
          </div>
          <div className={styles.sort}>сортировка</div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>Все пиццы</div>
        </div>
      </div>
    </div>
  );
}

export default App;
