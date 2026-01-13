import { useDispatch } from "react-redux"
import { handleinput } from "../slice/inputslice"


function Inputtext()
{
    const dispatch=useDispatch()
    return(
        <input type="text"
        onChange={(e)=>dispatch(handleinput(e.target.value))}
        />
    )
}
export default Inputtext