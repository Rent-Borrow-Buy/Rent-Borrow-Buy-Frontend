import { Link } from 'react-router-dom';

export default function ItemCard({ ...item }) {
  return (
    <div>
        <Link to={`item/${item.id}`}>
            <img src={item.url} />
        </Link>
        <Link to={`item/${item.id}`}>           
            <p>{item.title}</p>
        </Link>
            <p>{item.listed_date}</p>          
    </div>
  )
}
