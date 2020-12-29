import axios from "axios";
import React, { useEffect, useState } from "react";

function App(){
    const [identifier, setIdentifier] = useState(1);
    const [user, setUser] = useState([])
    const [loading, setLoading]= useState(false)

    const getUser = async() => {
        setLoading(true)
        try{
            let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`)
            setUser(response.data);
            setLoading(false)
        } catch(e){
            setLoading(true)
            console.log(e.message);
        }
    }

    useEffect(()=>{
        getUser();
    },[identifier])

    return (
        <div className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <input type="text" name="identifier" value={identifier} onChange={(e)=> setIdentifier(e.target.value)} className="form-control"/>
                        {
                            loading ? <div>Loading  . . .</div> :
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Website</th>
                                        <th>Phone</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr >
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.website}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                    {
                                        // users.map((user,index) => {
                                        //     return(
                                        //         <tr key={index}>
                                        //             <td>{user.name}</td>
                                        //             <td>{user.username}</td>
                                        //             <td>{user.email}</td>
                                        //             <td>{user.website}</td>
                                        //             <td>{user.phone}</td>
                                        //         </tr>
                                        //     )
                                        // })
                                    }
                                    </tbody>
                                </table>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;