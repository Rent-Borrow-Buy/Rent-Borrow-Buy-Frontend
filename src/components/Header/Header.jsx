import { useAuth } from "../../hooks/user";
import { Link } from "react-router-dom";
import styles from "./Header.css";

export default function Header() {
  const { user } = useAuth();
    
  return (
    <header>
      <div className={styles.headerElements}>
        <p>Welcome {user ? user.firstName : 'new user'}!</p>
        <h1>r.b.b.</h1>
        { 
          user ?
          <Link to="/items/new">
              <button>post new item</button>
          </Link> : 
          <Link to="/auth">
            <button>sign-up/login</button>
          </Link>
        }
      </div>
    </header>
  )
}

