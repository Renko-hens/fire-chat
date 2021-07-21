import { ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../../utils/constants";

export interface StandardComponentProps {
  path: string,
  Component: React.ComponentType<any>,
};

const AppRouter = (): ReactElement => {
  const user: boolean = false;
  return user
    ? (
      <Switch>
        {privateRoutes.map(({path, Component}: StandardComponentProps) => (
          <Route
            path={path}
            component={Component}
            exact={true}
          />
        ))}
        <Redirect to={CHAT_ROUTE}/>
      </Switch>
    )
    : (
      <Switch>
        {publicRoutes.map(({path, Component}: StandardComponentProps) => (
          <Route
            path={path}
            component={Component}
            exact={true}
          />
        ))}
        <Redirect to={LOGIN_ROUTE}/>
      </Switch>
    )
};

export default AppRouter;
