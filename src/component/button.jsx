import { useDispatch,useSelector } from "react-redux"
import { handlecount } from "../slice/countslice";
import { useEffect, useState } from "react";
import { handleprint } from "../slice/inputslice";
import { handledeleting } from "../slice/inputslice";

function Countbutton()
{
    const dispatch=useDispatch();
    const comment=useSelector((state)=>state.input.value);
    const Text=useSelector((state)=>state.input.Text);
    const[text,settext]=useState("");
    // const[Text,setText]=useState([]);
    useEffect(()=>{
        console.log(Text);
    },[Text]);
    function handleclick()
    {
        dispatch(handlecount());
            console.log(comment);
        //     settext(comment); 
        //     setText([
        //         ...Text,
        //         comment
        //     ])    
        dispatch(handleprint(comment));
    }
    function handledelete(id)
    {
        console.log(id);
        dispatch(handledeleting(id));
    }
    return(
        <>
        <p>{text}</p>
        {
            Text&&Text.length>0?Text.map(item=>{
                return(<>
                <p style={{margin:"20px"}} key={item.id}>{item.com}</p>
                    <button onClick={()=>handledelete(item.id)}>delete</button>
                
                </>)
                
            }):(<p>Nothing yet</p>)
        }
        <button onClick={()=>handleclick()}>count</button>
        </>
        
    )
}
export default Countbutton