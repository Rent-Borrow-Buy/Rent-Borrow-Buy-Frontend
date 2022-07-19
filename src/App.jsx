import { Route, Switch } from 'react-router-dom';
import { useAuth } from './hooks/user';
import AddItem from './views/AddItem';
import Auth from './views/Auth';
import Home from './views/Home';
import UpdateItem from './views/UpdateItem';

export default function App() {
  const { loading } = useAuth();
  if (loading) return <div>loading</div>;
  return (
    <>
      <Switch>
        <Route path="/items/:id/edit">
          <UpdateItem />
        </Route>
        <Route path="/items/new">
          <AddItem />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}
