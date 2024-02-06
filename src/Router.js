import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import { IsLoginState } from "./store/atom";


export default function Router() {
  const isLogin = useRecoilValue(IsLoginState);
  return (
    <BrowserRouter>
      <Switch>
        {isLogin ? (
          <Route exact path="/login">
            <HomePage />
          </Route>
        ) : (
          <Route exact path="/">
            <LoginPage />
          </Route>
        )}
      </Switch>
    </BrowserRouter>
  );
}
