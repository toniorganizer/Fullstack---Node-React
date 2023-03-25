import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams, Link} from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditUsers = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getUsersById();
    }, []);

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
                name,
                email, 
                gender
            },
            toast.success('Data updated!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              })
            );
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    const getUsersById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
    }

  return (
    <div className='columns mt-5 is-centered'>
        <div className='column is-half'>
            <h1 className='title'>Tambah Data User</h1>
            <form onSubmit={updateUser}>
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
                    <button type='submit' className='button is-success'>Update</button>
                    <Link to={`/`} className='button is-primary ml-2'>Back</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditUsers