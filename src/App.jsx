import { Route, Switch } from 'react-router-dom';
import { useAuth } from './hooks/user';
import AddItem from './views/AddItem';
import Auth from './views/Auth';
import Home from './views/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UpdateItem from './views/UpdateItem';
import ItemDetail from './views/ItemDetail';
import Header from './components/Header/Header';
import CreatorsPage from './views/CreatorsPage/CreatorsPage';
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
