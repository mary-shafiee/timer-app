import React , {useState} from 'react';

import './App.css'
import Msg from './Msg';
import Timer from './Timer';



const App = () =>{
    const [timeArr , setTimeArr] = useState(["12 : 05 : 18" , "09 : 23 : 04"])
    return(
        <div className='App'>
            <Msg/>
            <Timer
            timeArr = {timeArr}
            setTimeArr = {setTimeArr}
            />
            
           
        </div>
        
    )
}
export default App;