import { Route, Switch } from "react-router-dom";
import Auth from "./views/Auth";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
      </Switch>
    </>
  )
}
