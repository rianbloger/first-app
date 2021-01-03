import React from 'react';
import {UserProvider} from './context/User'
import AuthenticatedUser from '../components/AuthenticatedUser';


function Home(props) {
    return (
        <div className="container">
            <UserProvider>
                <div className="d-flex">
                   <div className="mr-2">My name is &nbsp;</div> <AuthenticatedUser/>
                </div>
            </UserProvider>
        </div>
    );
}

export default Home; 