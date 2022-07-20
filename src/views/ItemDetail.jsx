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
        }
        fetchData();
     } catch (e) {
       setErrorMessage(e.message); 
     }
    }, [id]);

  return (
    <div>ItemDetail</div>
  );
}
