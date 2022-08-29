import React from 'react';
// import ReactDOM from 'react-dom'; 
import './Timer.css'
import TimeList from './TimeList'



// const Timer = () =>{
//     const [second , setSecond] = useState('0')
//     const [min , setMin] = useState('0')
//     const [hr , setHr] = useState('0')
//     const [isStart, setIsStart] = useState(true)
let interval
class Timer extends React.Component{
    constructor(){
        super()
        this.state = {
            isStart : true,
            second : 0,
            min : 0,
            hr:0,
        }
        
    } 
    
    startTime =()=> {
        if (this.state.isStart === true){
            this.setState({
                isStart : false,
            })

            interval = setInterval(()=>{
                this.setState({
                        second : this.state.second + 1,
                    })
                if (this.state.second === 59){
                    this.setState({
                        second : 0,
                        min : this.state.min + 1
                })
                }
                if (this.state.min === 59){
                    this.setState({
                        min : 0,
                        hr : this.state.hr + 1
                    })
                }
            },1000)
            console.log(setInterval)
        }
    }

    stopTime =()=> {
        this.setState({
            isStart : true,
        })
        clearInterval(interval)
    }
    resetTime =()=> {
        this.stopTime()
        this.setState({
              second : 0,
            min : 0,
            hr:0,
        })

    }
    handelSaveTime=()=>{
        let h = this.state.hr
        let m = this.state.min
        let s = this.state.second
        let newTime = `${h > 9 ? h : "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s}` 
        this.props.setTimeArr([...this.props.timeArr , newTime])
            
               
    }
    render(){

        let h = this.state.hr
        let m = this.state.min
        let s = this.state.second

    return(
        <div className='timer' >
            <div className='time-content' onClick={this.handelSaveTime}>
                {`${h > 9 ? h : "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s}` }
            </div>
            <div className='btn-content'>
                <button className='btn-time' onClick={this.startTime}>START</button>
                <button className='btn-time' onClick={this.stopTime} >STOP</button>
                <button className='btn-time' onClick={this.resetTime} >RESET</button>
                
            </div>
            <TimeList>
                {this.props.timeArr}
            </TimeList>
            
        </div>
        )
    }
}

export default Timer;