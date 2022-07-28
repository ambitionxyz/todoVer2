import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import { fetchRequest } from "./modules/public/list/toDoList.action";
import { USER_ACTION } from "./store/global/user.action";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(
    useSelector((state) => state.user.isLogin)
  );
  const logger = localStorage.getItem("token");
  console.log(logger);
  useEffect(() => {
    if (logger) {
      dispatch(fetchRequest(logger));
      dispatch(USER_ACTION.getUserSuccess(logger));
    }
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {!isLogin && <Route path="/auth" element={<AuthPage />}></Route>}
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
