import { useAuth } from "../../hooks/user";
import { Link } from "react-router-dom";
import Logout from "../LogoutButton/LogoutButton";
import styles from "./Header.css";

export default function Header() {
  const { user } = useAuth();
    
  return (
    <header>
      <h1>r.b.b.</h1>
      <div className={styles.headerElements}>
        <div className={styles.logoutContainer}>
          {user && <Logout />}
        </div>
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
      {
        user && <p className={styles.welcome}>Welcome {
          user.firstName ? 
          user.firstName : 
          user.email
        }!</p>
      }
    </header>
  )
}

