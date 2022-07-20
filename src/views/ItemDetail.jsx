import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useAuth } from '../hooks/user';
import { deleteItems, getItemById } from '../services/items';

export default function ItemDetail() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const { user, errorMessage, setErrorMessage } = useAuth();
  const { id } = useParams();
  const isCreator = user.id === item.user_id;

  const handleDelete = async () => {
    await deleteItems(id);
    history.replace('/');
  };

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
    <>
      {errorMessage && <span>{errorMessage}</span>}
      <h1>{item.title} details</h1>
      <img src={item.images[0].url} />
      <p>{item.description}</p>
      <p>{item.buy ? 'This item is for sale' : 'This item is not for sale'}</p>
      <p>{item.rent ? 'This item is for rent' : 'This item is not for rent'}</p>
      <p>
        {item.borrow
          ? 'This item can be borrowed'
          : 'This item cannot be borrowed'}
      </p>
      <p>{item.price}</p>
      {/* price is null */}
      <p>{item.zipcode}</p>
      <p>{item.listed_date}</p>
      <div>
        <Link to="/">
          <button>Return home</button>
        </Link>
      </div>
      <div>
        {isCreator && (
          <>
            <Link to={`/items/${id}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    </>
  );
}
