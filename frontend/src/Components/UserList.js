import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserList = () => {

  const [users, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  
  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUser();
      toast.success('Delete success!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <h1 className='title'>List Data User</h1>
          <Link to={`add`} className="button is-success">Add User</Link>
            <table className="table is-striped is-fullwidth mt-3">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>
                    <Link to={`edit/${user.id}`} className="button is-small is-info">edit</Link>
                    <button onClick={() => deleteUser(user.id)} className="button is-small is-danger">delete</button>
                  </td>
                </tr>
                ))}
                
              </tbody>
            </table>
        <ToastContainer />
        </div>
    </div>
  )
}

export default UserList;