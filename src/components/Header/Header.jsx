import { useAuth } from "../../hooks/user";
import { Link } from "react-router-dom";

export default function Header() {
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
    }

    if (loading) return <span>loading...</span>;

  return (
    <>
    <p>Welcome {user ? user.firstName : 'new user'}!</p>
    { user ?
    <> 
    <button onClick={handleLogout}>logout</button>
    <Link to="/items/new">
        <button>post new item</button>
    </Link>
    </>
     : 
    <Link to="/auth">
        <button>sign-up/login</button>
    </Link>}
    </>
  )
}


