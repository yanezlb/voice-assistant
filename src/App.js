import { Divider } from '@material-ui/core';
import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = 'd66adf1a3183e71980b97b4126c591102e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                if( command === 'testComand' ){
                    alert('This code was executed');
                }
            }
        })
    },[])
    return (
        <div>
            <h1>Alan AI news app</h1>
        </div>
    )
}

export default App;