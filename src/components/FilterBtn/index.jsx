import styles from './FilterBtn.module.scss';
import { setCategory } from '../../redux/actions/filters';
import { useDispatch } from 'react-redux';
import React from 'react';

const FilterBtn = React.memo(function FilterBtn({ index, filterBtnChoice, title }) {
  const dispatch = useDispatch();
  const dispFunc = (index) => {
    dispatch(setCategory(index));
  };
  return (
    <div className={styles.wrapperFilterBtn}>
      <button
        onClick={() => dispFunc(index)}
        className={filterBtnChoice === index ? styles.activeBtn : styles.notActiveBtn}>
        {title}
      </button>
    </div>
  );
});
export default FilterBtn;
