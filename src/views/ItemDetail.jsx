import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { deleteItems, getItemById } from '../services/items';
import { useAuth } from '../hooks/user';
import Logout from '../components/LogoutButton/LogoutButton';
import styles from './ItemDetail.css';

export default function ItemDetail() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { user, errorMessage, setErrorMessage } = useAuth();
  const { id } = useParams();
  const isCreator = user?.id === item.user_id;

  const handleDelete = async () => {
    await deleteItems(id);
    history.replace('/');
  };

  function formatPrice(price) {
    const array = price.split('.');
    if (array.length > 1) {
      if (array[1].length == 1) {
        return '$' + price + '0';
      }
    }
    return '$' + price;
  }

  function formatDetailDate(date) {
    let timeArray = item.listed_date.split(':');
    let hour = timeArray[0];
    let minute = timeArray[1];
    hour = hour.slice(-2);
    minute = minute.slice(0, 2);
    const time = hour + ':' + minute;

    let newDate = new Date(item.listed_date).toDateString();
    newDate = newDate.split(' ');
    newDate.pop();
    newDate.shift();
    newDate = newDate[0] + ' ' + newDate[1];
    return [newDate, time];
  }

  useEffect(() => {
    try {
      const fetchData = async () => {
        const item = await getItemById(id);
        setItem(item);
        setLoading(false);
      };
      fetchData();
    } catch (e) {
      setErrorMessage(e.message);
    }
  }, [id]);

  if (loading) return <span>loading...</span>;

  return (
    <div className={styles.itemDetail}>
      {errorMessage && <span>{errorMessage}</span>}
      <div className={styles.homePrice}>
        <Link to="/">
          <button className={styles.homeButton}>&lt;&lt; return home</button>
        </Link>
        <h2>
          <span className={styles.zipcode}>({item.zipcode}) </span>
          {item.price ? formatPrice(item.price) : 'free'} 
        </h2>
      </div>
      <div className={styles.title}>
        <h2>{item.title}</h2>
      </div>
      <img src={item.images[0].url} />
      <div className={styles.status}>
        {item.rent && <span>rent</span>}
        {item.borrow && <span>borrow</span>}
        {item.buy && <span>buy</span>}
      </div>
      <p className={styles.description}>{item.description}</p>
      <p className={styles.listed}>listed at {
            formatDetailDate(item.listed_date)[1] + ' on ' +
            formatDetailDate(item.listed_date)[0]
          }
      </p>
      <div>
        {isCreator && (
          <div className={styles.detailButtons}>
            <Link to={`/items/${id}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}
