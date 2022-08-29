import { useContext } from "react";
import Item from "./Item";
import { TestContext } from "./testContext";



const TimeList = (props) =>{

    const context = useContext(TestContext)

        return(
            <div>
              {context.timeArr.map((e) => (
               <Item key={Math.random}>{e}</Item>
                ))}
            </div>
         
        )
}

export default TimeList;