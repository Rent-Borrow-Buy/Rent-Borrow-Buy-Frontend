import { Route, Switch } from "react-router-dom";
import AddItem from "./views/AddItem";
import Auth from "./views/Auth";
import Home from "./views/Home";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/additem">
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
  )
}
