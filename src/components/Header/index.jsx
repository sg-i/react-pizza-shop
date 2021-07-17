import styles from './Header.module.scss';
function Header() {
  return (
    <div className={styles.wrapperHeader + ' d-flex justify-between'}>
      <div className={styles.leftHeader + ' d-flex'}>
        <img width={34} height={38} src="img/mainLogo.png" alt="" />
        <div className={styles.headerInfo + ' d-flex flex-column'}>
          <b>REACT PIZZA</b>
          <span>самая вкусная пицца во вселенной</span>
        </div>
      </div>
      <div className={styles.rightHeader}>
        {/* <button>
          <div className={styles.cartBtn + ' align-center d-flex justify-around'}>
            <h4>520 ₽</h4>
            <div>
              <img width={16} height={16} src="img/cartIcon.svg" alt="" />
              <b>2</b>
            </div>
          </div>
        </button> */}
        <button className={styles.basket}>
          <div className={styles.busk}>520 ₽</div>
          <div className={styles.line}></div>
          <div className={styles.countBuy}>
            <img width={18} height={18} src="img/cartIcon.svg" alt="" />
            <b>1</b>
          </div>
        </button>
      </div>
    </div>
  );
}
export default Header;
