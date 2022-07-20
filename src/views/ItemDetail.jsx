import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useAuth } from '../hooks/user';
import { getItemById } from '../services/items';


export default function ItemDetail() {
    const [item, setItem] = useState({});

    const { user, errorMessage, setErrorMessage, loading, setLoading } = useAuth();
    const { id } = useParams();
    const isCreator = user.id === item.user_id;

    useEffect(() => {
     try {
        const fetchData = async () => {
            const item = await getItemById(id);
            setItem(item);
            setLoading(false)
        }
        fetchData();
     } catch (e) {
       setErrorMessage(e.message); 
     }
    }, [id]);

  return (
    <>
    {loading && <span>loading...</span>}
    {errorMessage && <span>{errorMessage}</span>}
    <h1>{item.title} details</h1>
    {/* <img src={item.images}/> */}
    <p>{item.description}</p>
    <p>{item.buy}</p>
    <p>{item.rent}</p>
    <p>{item.borrow}</p>
    <p>{item.price}</p> 
    {/* price is null */}
    <p>{item.zipcode}</p>
    <p>{item.listed_date}</p>
    </>
  );
}
