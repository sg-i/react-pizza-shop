import styles from './Card.module.scss';
import React from 'react';
import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';
function Card({ id, name, category, imageUrl, price, rating, sizes, types }) {
  const typesArr = ['тонкое', 'традиционное'];
  const sizeArr = [26, 30, 40];

  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(sizes[0]);

  const { isLoaded } = useSelector((state) => {
    return {
      isLoaded: state.pizzas.isLoaded,
    };
  });

  // return (
  //   <div className={styles.wrapperCard}>
  //     <ContentLoader
  //       speed={2}
  //       width={280}
  //       height={460}
  //       viewBox="0 0 280 460"
  //       backgroundColor="#ededed"
  //       foregroundColor="#ffffff">
  //       <circle cx="137" cy="139" r="124" />
  //       <rect x="146" y="419" rx="18" ry="18" width="127" height="33" />
  //       <rect x="90" y="415" rx="0" ry="0" width="80" height="0" />
  //       <rect x="40" y="279" rx="18" ry="18" width="202" height="25" />
  //       <rect x="0" y="326" rx="18" ry="18" width="280" height="65" />
  //       <rect x="0" y="419" rx="18" ry="18" width="68" height="33" />
  //     </ContentLoader>
  //   </div>
  // );

  return (
    <div className={styles.wrapperCard}>
      <img width={260} height={260} src={imageUrl} alt="" />
      <div className={styles.cartTitle}>{name}</div>
      <div className={styles.cardOption}>
        <div className={styles.upOpt + ' d-flex'}>
          {typesArr.map((type, index) => (
            <button
              disabled={!types.includes(index)}
              onClick={() => setActiveType(index)}
              className={index === activeType && styles.optChoice}>
              {type}
            </button>
          ))}
        </div>
        <div className={styles.downOpt + ' d-flex'}>
          {sizeArr.map((size, index) => (
            <button
              disabled={!sizes.includes(size)}
              onClick={() => setActiveSize(size)}
              className={size === activeSize && styles.optChoice}>
              {size + ' см.'}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.addCard + ' d-flex justify-between'}>
        <b>{price} ₽</b>
        <button
          onClick={() => console.log(activeSize)}
          className={' d-flex align-center justify-between'}>
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
