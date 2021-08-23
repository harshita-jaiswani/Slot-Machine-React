import React, { useState } from "react";



function App()
{
    const state = useState();
    const [count, setCount] = useState(0);
    function IncNum(){
         setCount(count + 1); 
    }


    return <>
       <h1 className="heading">{count}</h1>
       <button className="divi_style" onClick={IncNum}>CLICK ME</button>
   
   </>
}

export default App;