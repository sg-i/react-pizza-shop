import styles from './App.module.scss';
import Header from './components/Header';
function App() {
  return (
    <div className="App clear">
      <div className={styles.wrapper}>
        <Header />
      </div>
    </div>
  );
}

export default App;
