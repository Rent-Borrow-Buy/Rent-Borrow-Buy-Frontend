import { useHistory, useParams } from "react-router-dom";
import { deleteItems } from "../../services/items";
import styles from './DeleteButton.css';

export default function DeleteButton(){
  const history = useHistory();
  const {id} = useParams();

  const handleDelete = async () => {
    await deleteItems(id);
    history.push('/');
  }

  return (
    <button className={styles.deleteButton} onClick={handleDelete}>
      delete
    </button>
  ) 
}