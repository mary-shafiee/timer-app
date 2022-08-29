
import './Item.css'

const Item = (props)=>{
    return(
        <div  className="timelist-content">
            {props.children}
        </div>
    )
}
export default Item;