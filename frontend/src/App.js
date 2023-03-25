import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./Components/UserList";
import AddUsers from "./Components/AddUsers";
import EditUsers from "./Components/EditUsers";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUsers />} />
        <Route path="/edit/:id" element={<EditUsers />} />
      </Routes>   
        <ToastContainer /> 
    </BrowserRouter>
  );
}

export default App;
