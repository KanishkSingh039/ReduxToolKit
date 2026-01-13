import { useSelector } from "react-redux"


function Countvalue()
{ const state1=useSelector((state=>state.counter.countvalue));
    const comment=useSelector((state)=>state.input.value)
    console.log(state1);
    return(
        <>
        <p>count value is {state1}</p>
        <p>{comment}</p>
        </>
    )
}
export default Countvalue