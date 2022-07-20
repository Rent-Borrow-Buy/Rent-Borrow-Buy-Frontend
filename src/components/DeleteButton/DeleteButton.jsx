import { useHistory, useParams } from "react-router-dom";
import { deleteItems } from "../../services/items";

export default function DeleteButton(){
const history = useHistory();
const {id} = useParams();

    const handleDelete = async () => {
        await deleteItems(id);
        history.push('/');
      }

   
  return (
    <button onClick={handleDelete}>
Delete Item
    </button>
  ) 
}