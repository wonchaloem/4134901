import React, {useState,useEffect} from "react";

function Hook() {
    const[color,setColor]=useState("red");
    const[count,setCount]=useState(0);
    const[multi,setMulti]=useState(1);
    const[car,setCar]=useState({
        brand:"Mazda",
        year:2012,
        color:"red",
});
const updateCarColor=()=>{
    setCar((preState)=>{
        return{...preState,color:"green"};
    });
};

//useEffect(()=>{
//    document.title='change Stage ${}';
    //setTimeout(()=>{
 //       setMulti(()=>count*2);
    //},1000);
    
//},[count]);

//return(
 //       <>
 //       <button onClick={()=>setColor("blue")}>Change</button>
 //       <p>Count is {count}</p>
//       <button onClick={()=>setCount(count+1)}>Inc</button>

 //       <p>{car.brand}Car color is {car.color}</p>
//        <button onClick={updateCarColor}>Color</button>
 //       <p>multi of count is {multi}</p>
//    );
};
export default Hook;