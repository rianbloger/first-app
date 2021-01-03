import React from 'react';
import { useRecoilState } from 'recoil';
import {theme} from '../store'


function Home(props) {
    const [currenTheme, setCurrentTheme] = useRecoilState(theme)
    return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <select value={currenTheme} onChange={(e) =>setCurrentTheme(e.target.value)} className="form-control">
                            <option value="dark">Dark</option>
                            <option value="light">Light</option>
                        </select>
                    </div>
                </div>
                <div className="mt-2">
                    You're selecting the {currenTheme} theme.  
                </div>
            </div>
        
    );
}

export default Home; 