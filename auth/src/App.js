import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthCxt from "./store/authContext";

function App() {
  const { isLoggedIn, token } = AuthCxt();
  return (
    <Layout>
      {console.log(isLoggedIn, token)}
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <HomePage /> : <AuthPage />}
        </Route>
        <Route path="/auth">{<AuthPage />}</Route>
        <Route path="/profile">
          {isLoggedIn ? <UserProfile /> : <AuthPage />}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
