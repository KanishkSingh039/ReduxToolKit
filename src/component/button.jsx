import { useDispatch } from "react-redux"
import { handlecount } from "../slice/countslice";


function Countbutton()
{
    const dispatch=useDispatch();
    return(
        <button onClick={()=>dispatch(handlecount())}>count</button>
    )
}
export default Countbutton