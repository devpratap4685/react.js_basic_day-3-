import { useState } from "react";
export default function Counter(){
    let [count,setcount]=useState(0);
    function incCount(){
         setcount(count+1);
        console.log(count);
    }
    return(
        <div>
            <h1>Count={count}</h1>
            <button onClick={incCount}>Increase count</button>
        </div>
      
    );
  

}