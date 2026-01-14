import { useDispatch,useSelector } from "react-redux"
import { handlecount } from "../slice/countslice";
import { useEffect, useState } from "react";
import { handleediting, handleprint } from "../slice/inputslice";
import { handledeleting } from "../slice/inputslice";

function Countbutton()
{
    const dispatch=useDispatch();
    const comment=useSelector((state)=>state.input.value);
    const Text=useSelector((state)=>state.input.Text);
    const [edit,setedit]=useState(null);
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
    function handleedit(item)
    {
        // console.log(item);
        let cpy={...item,
            current:comment
        }
        setedit(cpy)
        
    }
    function handleeditclick()
    {
        dispatch(handleediting(edit))
        setedit(null);
    }


    return(
        <>
        {
            Text&&Text.length>0?Text.map(item=>{
                return(<>
                <p style={{margin:"20px"}} key={item.id}>{item.com}</p>
                    <button onClick={()=>handledelete(item.id)}>delete</button>
                    <button onClick={()=>handleedit(item)}>Edit</button>
                
                </>)
                
            }):(<p>Nothing yet</p>)
        }
        <button onClick={()=>edit?handleeditclick():handleclick()}>
        {
            edit?'add edited': 'click'
        }

        </button>
        </>
        
    )
}
export default Countbutton