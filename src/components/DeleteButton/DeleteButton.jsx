import toast from 'react-hot-toast';
import { useHistory, useParams } from "react-router-dom";
import { deleteItems } from "../../services/items";
import styles from './DeleteButton.css';

export default function DeleteButton(){
  const history = useHistory();
  const { id } = useParams();

  const handleDelete = async () => {
    try {
      await deleteItems(id);
      toast.success('Successfully deleted item!');
      history.push('/');
    } catch (e) {
      toast.error('Error encountered on delete. Please try again');
    }
  };

  return (
    <button className={styles.deleteButton} onClick={handleDelete}>
      delete
    </button>
  ) 
}