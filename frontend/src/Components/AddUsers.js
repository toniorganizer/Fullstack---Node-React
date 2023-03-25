import React, {useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddUsers = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");

    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name,
                email, 
                gender
            },
            toast.success('Data added successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              }));
              navigate('/');
        } catch (error) {
            toast.error('Error add data!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    }

  return (
    <div className='columns mt-5 is-centered'>
        <div className='column is-half'>
            <h1 className='title'>Tambah Data User</h1>
            <form onSubmit={saveUser}>
                <div className='field'>
                    <div className='label'>Name</div>
                    <div className='control'>
                        <input type="text" value={name} onChange={(e)=> setName(e.target.value) } className='input' placeholder='Name'/>
                    </div>
                </div>
                <div className='field'>
                    <div className='label'>Email</div>
                    <div className='control'>
                        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value) }  className='input' placeholder='Email'/>
                    </div>
                </div>
                <div className='field'>
                    <div className='label'>gender</div>
                    <div className='control'>
                        <div className='select is-fullwidth'>
                            <select value={gender} onChange={(e)=> setGender(e.target.value) } >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='field'>
                    <button type='submit' className='button is-success'>Save</button>
                    <Link to={`/`} className='button is-primary ml-2'>Back</Link>
                </div>
            </form>
        <ToastContainer />
        </div>
    </div>
  )
}

export default AddUsers