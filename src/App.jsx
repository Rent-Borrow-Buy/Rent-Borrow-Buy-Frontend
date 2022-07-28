import { Route, Switch } from 'react-router-dom';
import { useAuth } from './hooks/user';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import ItemDetail from './views/ItemDetail/ItemDetail';
import AddItem from './views/ManageItems/AddItem';
import UpdateItem from './views/ManageItems/UpdateItem';
import CreatorsPage from './views/CreatorsPage/CreatorsPage';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import styles from './App.css';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  const { loading } = useAuth();
  if (loading) return <div>loading</div>;
  return (
    <>
      <Toaster
        toastOptions={{
          duration: 2000,
          success: {
            icon: '	✅',
          },
          error: {
            icon: '❌',
          },
        }}
      />
      <Header />
      <Switch>
        <Route exact path="/creators">
          <CreatorsPage />
        </Route>
        <PrivateRoute path="/items/:id/edit">
          <UpdateItem />
        </PrivateRoute>
        <PrivateRoute path="/items/new">
          <AddItem />
        </PrivateRoute>
        <Route exact path="/items/:id">
          <ItemDetail />
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
