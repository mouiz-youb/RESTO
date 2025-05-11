import React ,{useState} from 'react'
import "../index.css"
function Button3(props) {
  const [selectbtn, setselectbtn] = useState({
    vehiculeType: false,
    vehiculeName: false,
    vehiculeYear: false,
    vehiculecolor: false,
  });

  const handleBtnClick = (btnKey) => {
    setselectbtn((prevState) => ({
      ...prevState,
      [btnKey]: !prevState[btnKey],
    }));
    console.log(`Toggled: ${btnKey}`, selectbtn[btnKey]);
  };
  return (
    <div className={props.className?props.className:` w-full flex flex-row justify-between items-start p-3 bg-amber-600  rounded-2xl border-[1px]`}>
    {
      !selectbtn[props.btnKey] ? 
      <div className=' flex justify-start items-center  gap-2 flex-row pl-3 pt-2 pb-2 pr-3   w-full '>
         <p className='text-gary-500  '> {props.content} <span> {props.value} </span> </p>
         {props.icon}
      </div>
      :
      <div className=' w-full flex justify-start items-center  flex-row pl-3 pt-2 pb-2   '>
         <p className='text-gary-500 flex justify-center items-center  flex-row  '> {props.content} <input type={props.type} className={props.type==="color"?`rounded-full`:`focus w-1/2 placeholder:text-[12px]`} placeholder={`Enter ${props.content}`} /> </p>
         {props.icon}
      </div>
    }
      {props.content2?<p className='text-white bg-[#F4BB6E] cursor-pointer p-2 rounded-2xl' onClick={()=>handleBtnClick(props.btnKey)}> {props.content2} </p>:null}
    </div>
  )
}

export default Button3