import { useDispatch, useSelector } from "react-redux";
import AllRoutes from "./AllRoutes";
import "./App.css";
import Navbar from "./componenets/Navbar";
import Login from "./pages/Login";
import { getToken } from "./Redux/action";
import { useEffect } from "react";

function App() {
  let { state } = useSelector((state) => state);
  let token = state.auth;
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToken());
  }, [token]);

  return (
    <div className="App">
      {token && <Navbar />}

      <AllRoutes />
    </div>
  );
}

export default App;
