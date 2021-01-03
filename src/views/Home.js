import React from 'react';
import {UserProvider} from './context/User'
import AuthenticatedUser from '../components/AuthenticatedUser';


function Home(props) {
    return (
        <div className="container">
            <UserProvider>
                <div className="d-flex">
                   <div className="mr-1">My name is</div> <AuthenticatedUser/>
                </div>
            </UserProvider>
        </div>
    );
}

export default Home; 