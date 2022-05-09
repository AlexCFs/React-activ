import "./styles.css";
import ShoppingList from "./ShoppingList";
import Connection from "./Connection";
import ListDepartments from "./ListDepartments";
import ListMovies from "./ListMovies";
import Home from "./Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Chip, Box } from "@mui/material";

export default function App() {
  const navigate = useNavigate();

  function handleClickHome() {
    navigate("/");
  }
  function handleMenuItem(url) {
    navigate(url);
  }
  return (
    <div className="App">
      <h1 className="appTitle">App of Small Apps</h1>

      <Chip
        icon={<HomeIcon />}
        label="Home"
        variant="outlined"
        onClick={handleClickHome}
      />

      <Box sx={{ mt: 2 }}>
        <Routes>
          <Route path="/" element={<Home onClickMenuItem={handleMenuItem} />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/listDepartments" element={<ListDepartments />} />
          <Route path="/listMovies" element={<ListMovies />} />
        </Routes>
      </Box>
    </div>
  );
}
