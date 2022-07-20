import { useAuth } from "../../hooks/user";
import { Link } from "react-router-dom";

export default function Header() {
    const { user } = useAuth();
    
  return (
    <>
    <p>Welcome {user ? user.firstName : 'new user'}!</p>
    { user ?

  
    <Link to="/items/new">
        <button>post new item</button>
    </Link>
    
     : 
    <Link to="/auth">
        <button>sign-up/login</button>
    </Link>}
    </>
  )

    }

