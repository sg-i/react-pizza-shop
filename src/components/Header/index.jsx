import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className={styles.wrapperHeader + ' d-flex justify-between'}>
      <Link to="/">
        <div className={styles.leftHeader + ' d-flex'}>
          <img width={34} height={38} src="img/mainLogo.png" alt="" />
          <div className={styles.headerInfo + ' d-flex flex-column'}>
            <b>REACT PIZZA</b>
            <span>самая вкусная пицца во вселенной</span>
          </div>
        </div>
      </Link>
      <div className={styles.rightHeader}>
        <Link to="/cart">
          <button className={styles.basket}>
            <div className={styles.busk}>520 ₽</div>
            <div className={styles.line}></div>
            <div className={styles.countBuy}>
              <img width={18} height={18} src="img/cartIcon.svg" alt="" />
              <b>1</b>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Header;
