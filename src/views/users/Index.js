import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Index(props) {
    const [users, setUsers] = useState([])

    const getUsers = async () =>{
        try{
            let response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setUsers(response.data);
        }catch(e){
            console.log(e.message);
        }
    }

    useEffect(() => {
        getUsers()
    },);
    return (
        <div className="container">
            <div className="row">
                {
                    users.map((user, index)=>{
                        return(
                            <div className="col-md-4" key={index} >
                                <div className="card">
                                    <div className="card-header">{user.name}</div>
                                    <div className="card-body">
                                        <div className="mb-4" >
                                            <a href={`HTTP://${user.website}`} target="blank" className="d-block mb-2" >{user.website}</a>
                                            {user.username}
                                        </div>
                                        <NavLink className="btn btn-primary" to={`/users/${user.id}`}>View profile</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Index;        