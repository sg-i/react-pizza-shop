import styles from './FilterBtn.module.scss';
function FilterBtn({ onClick, setFilterBtnChoice, index, filterBtnChoice, title }) {
  return (
    <div className={styles.wrapperFilterBtn}>
      <button
        onClick={() => {
          console.log(index);
          setFilterBtnChoice(index);
        }}
        className={filterBtnChoice == index ? styles.activeBtn : styles.notActiveBtn}>
        {title}
      </button>
    </div>
  );
}
export default FilterBtn;
