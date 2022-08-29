
import './Item.css'
import { TestContext } from './testContext';
import { useContext } from 'react';

const Item = (props)=>{

    const context = useContext(TestContext);

    const deleteItem = (e)=>{
        context.setTimeArr(context.timeArr.filter(t => t!== e.target.innerHTML) )
    }
    
    return(
        <div  className="timelist-content" onClick={deleteItem}>
            {props.children}
        </div>
    )
}
export default Item;