import React from "react";

function Slot(props)
{
    let{x,y,z}=props;

if(x===y && y===z)
{
    return(
        <>
   <div className="divi_style">
    <h1>{x} {y} {z}</h1>
    <h1>This is Matching</h1>
   
   </div>
       </>
    )
}

else{
    return(
        <>
   <div className="divi_style">
    <h1>{x} {y} {z}</h1>
    <h1>This is not Matching</h1>
   
   </div>
       </>
    )
}

}

function App()
{
   return <>
       <h1 className="heading"> 🎰  Welcome to <span style={{fontWeight: "bold"}}>Slot Machine Game 🎰</span> </h1>
   <br/>
   <Slot x='😄' y='😄' z='😄'/>
   <Slot x='💗' y='😄' z='🕹️' />
   <Slot x='🌵' y='😄' z='😄' />
   <Slot x='🐈' y='🐈' z='🐈' />
   
   </>
}

export default App;