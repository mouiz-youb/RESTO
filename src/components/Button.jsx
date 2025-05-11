import React ,{useState} from 'react'
import  "../index.css"
function Button(props) {
    const [selectbtn, setselectbtn] = useState({
      Home: false,
      findRestaurant: false,
      Shareposition: false,
      findCustomer: false,
    });
  
    const handleBtnClick = (btnKey) => {
      setselectbtn((prevState) => ({
        ...prevState,
        [btnKey]: !prevState[btnKey],
      }));
      console.log(`Toggled: ${btnKey}`, selectbtn[btnKey]);
    }; 
  console.log(selectbtn[props.content])
  return (
    <div className={`flex justify-center  items-center gap-2 bg-[#D9D9D9] rounded-2xl p-1  cursor-pointer ${selectbtn[props.content]?`bg-[#F4BB6E] text-balck bold rounded-4xl`:props.className}  `} onClick={()=>handleBtnClick(props.content)}>
        {props.icon}
        <p> {props.content} </p>
    </div>
  )
}

export default Button