import {useHistory} from 'react-router-dom';
import { useAuth } from '../../hooks/user';

export default function Logout() {
const history =useHistory(); 
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        history.push('/');
    }
    
    return (
        <>
       {user && <button onClick={handleLogout}>logout</button>}
        </>
    )
}


