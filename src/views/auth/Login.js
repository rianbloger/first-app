import React from 'react';
import {NavLink} from "react-router-dom";

function Login(props) {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-md-4">
                        <div className="text-center">
                            Go to <NavLink to="/">Home</NavLink>
                        </div>
                        <div className="card">
                            <div className="card-header">Login</div>
                            <div className="card-body">
                                <form action="">
                                    <div className="mb-4">
                                        <labeb className="form-label">Email</labeb>
                                        <input type="email" name="email" id="email" className="form-control" />
                                    </div>
                                    <div className="mb-4">
                                        <labeb className="form-label">Password</labeb>
                                        <input type="password" name="password" id="password" className="form-control" />
                                    </div>
                                    <buton type="submit" className="btn btn-block btn-primary w-100" >Login</buton>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Login;