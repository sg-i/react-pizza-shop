import styles from './Card.module.scss';
function Card() {
  return (
    <div className={styles.wrapperCard}>
      <img width={260} height={260} src="img/pizza/image 2-1.png" alt="" />
      <div className={styles.cartTitle}>Чизбургер-пицца</div>
      <div className={styles.cardOption}>
        <div className={styles.upOpt + ' d-flex'}>
          <button className={styles.optChoice}>тонкое</button>
          <button>традиционное</button>
        </div>
        <div className={styles.downOpt + ' d-flex'}>
          <button>26 см.</button>
          <button>30 см.</button>
          <button className={styles.optChoice}>40 см.</button>
        </div>
      </div>
      <div className={styles.addCard + ' d-flex justify-between'}>
        <b>от 395 ₽</b>
        <button className={' d-flex align-center justify-between'}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="#EB5A1E"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" />
          </svg>
          <b>Добавить </b>
          <div className={styles.circle}>2</div>
        </button>
      </div>
    </div>
  );
}
export default Card;
