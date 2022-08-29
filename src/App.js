import React , {useState} from 'react';

import './App.css'
import Msg from './Msg';
import { TestContext } from './testContext';
import Timer from './Timer';
import TimeList from './TimeList'




const App = () =>{
    const [timeArr , setTimeArr] = useState(["12 : 05 : 18" , "09 : 23 : 04"])
    return(
        <TestContext.Provider value={{
            timeArr ,
            setTimeArr 
        }}>
            <div className='App'>
                <Msg/>
                <Timer/>
                <TimeList/>
            </div>
        </TestContext.Provider>
    )
}
export default App;