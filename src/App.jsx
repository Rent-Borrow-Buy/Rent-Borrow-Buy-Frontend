import { Route, Switch } from "react-router-dom";
import { useAuth } from "./hooks/user";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AddItem from "./views/AddItem";
import Auth from "./views/Auth";
import Home from "./views/Home";

export default function App() {

  const {loading} = useAuth();
  if(loading) return <div>loading</div>
  return (
    <>
      <Switch>
        <PrivateRoute path="/additem">
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
  )
}
