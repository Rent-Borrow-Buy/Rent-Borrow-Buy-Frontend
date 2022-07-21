import { Link } from 'react-router-dom';
import styles from './ItemCard.css';

export default function ItemCard({ ...item }) {
  function formatPrice(price) {
    const array = price.split('.');
    if (array.length > 1) {
      if (array[1].length == 1) {
        return '$' + price + '0';
      }
    }
    return '$' + price;
  }
  function formatDate(date) {
    let newDate = new Date(item.listed_date).toDateString();
    newDate = newDate.split(' ');
    newDate.pop();
    newDate.shift();
    newDate = newDate[0] + ' ' + newDate[1];
    return newDate;
  }
  return (
    <div className={styles.itemCard}>
      <Link to={`items/${item.id}`}>
        <img className={styles.itemImage} src={item.url} />
      </Link>
      <div className={styles.priceTitleDate}>
        {item.price && <span className={styles.price}>{formatPrice(item.price)}</span>} 
        <Link to={`items/${item.id}`}>
          <span className={styles.title}>{item.title}</span>
        </Link>
        <span className={styles.date}>{formatDate(item.listed_date)}</span>
      </div>
      <div className={styles.status}>
        {item.rent && <span>rent</span>}
        {item.borrow && <span>borrow</span>}
        {item.buy && <span>buy</span>}
      </div>
    </div>
  );
}
