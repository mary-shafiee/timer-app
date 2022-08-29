import Item from "./Item";



const TimeList = (props) =>{

        return(
            <div>
              {props.children.map((e) => (
               <Item key={Math.random}>{e}</Item>
                ))}
            </div>
         
        )
}

export default TimeList;