import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/user';


export default function ItemDetail() {
    const [item, setItem] = useState({});

    const { user, errorMessage, setErrorMessage, loading, setLoading } = useAuth();

    const isCreator = user.id === item.user_id;

  return (
    <div>ItemDetail</div>
  );
}
