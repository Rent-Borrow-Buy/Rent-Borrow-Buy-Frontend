import { Link } from 'react-router-dom';

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
  return (
    <div>
      <Link to={`items/${item.id}`}>
        <img src={item.url} />
      </Link>
      <Link to={`items/${item.id}`}>
        <span>{item.title}</span>
      </Link>
      <span>{item.listed_date}</span>
      {item.rent && <span>rent</span>}
      {item.borrow && <span>borrow</span>}
      {item.buy && <span>buy</span>}
      <span>{formatPrice(item.price)}</span>
    </div>
  );
}
