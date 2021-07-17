import styles from './FilterBtn.module.scss';
function FilterBtn({ title }) {
  return (
    <div className={styles.wrapperFilterBtn}>
      <button>{title}</button>
    </div>
  );
}
export default FilterBtn;
