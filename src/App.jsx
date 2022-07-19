import { Route, Switch } from 'react-router-dom';
import { useAuth } from './hooks/user';
import AddItem from './views/AddItem';
import Auth from './views/Auth';
import Home from './views/Home';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UpdateItem from './views/UpdateItem';

export default function App() {
  const { loading } = useAuth();
  if (loading) return <div>loading</div>;
  return (
    <>
      <Switch>
        <PrivateRoute path="/items/:id/edit">
          <UpdateItem />
        </PrivateRoute>
        <PrivateRoute path="/items/new">
          <AddItem />
        </PrivateRoute>
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
