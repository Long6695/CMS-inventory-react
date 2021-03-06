import { Navigate } from 'react-router-dom';

//configs
import { PATH_NAME } from 'configs';

//services

const AuthGuard = ({ children }) => {
  const isAuth = true;

  if (!isAuth) return <Navigate to={PATH_NAME.LOGIN} />;

  return <>{children}</>;
};

export default AuthGuard;
