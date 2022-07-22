import { Redirect, Route, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/user';

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <Route {...rest}>
      {user?.email ? 
      (
        children
      ) : 
      (
        <Redirect
          to={{
            pathname: '/auth',
            state: { origin: location },
          }}
        />
      )}
    </Route>
  );
}
