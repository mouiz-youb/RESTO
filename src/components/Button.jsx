import React ,{useState} from 'react'
import  "../index.css"
function Button(props) {
    const [selectbtn, setselectbtn] = useState({
      Home: false,
      findRestaurant: false,
      Shareposition: false,
      findCustomer: false,
    });
  const [select ,setselect]=useState({
    name:{
      Home:false
    },
    
  })
    const handleBtnClick = (btnKey) => {
      setselectbtn((prevState) => ({
        ...prevState,
        [btnKey]: !prevState[btnKey],
      }));
      console.log(`Toggled: ${btnKey}`, selectbtn[btnKey]);
    }; 
    console.log(`the btn selected ${!select[props.content] ==="Home"?`hello form home2`:"is not home2"}`)
  console.log(`the btn selected ${selectbtn[props.content]}`)
  console.log(`the btn selected ${selectbtn[props.content] ==="Home"?`hello form home`:"is not home"}`)
  return (
    <div className={`flex justify-center relative  items-center gap-2 bg-[#D9D9D9] rounded-2xl p-1  cursor-pointer ${selectbtn[props.content]?`bg-[#F4BB6E] text-balck bold rounded-4xl`:props.className}  `} onClick={()=>handleBtnClick(props.content)}>
        {props.icon}
        <p> {props.content} </p>
        
    </div>
  )
}

export default Button