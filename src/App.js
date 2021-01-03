import React from 'react';
import { useRecoilState } from 'recoil';
import Router from "./router";
import { theme } from './store';

function App(props) {
    const [currenTheme, setCurrentTheme] = useRecoilState(theme)
    const defaultTheme = currenTheme =='dark' ? 'bg-dark text-white':'bg-success text-white '
    return (
        <div className={`${defaultTheme} vh-100`} >
                <Router/>
        </div>
    );
}

export default App;