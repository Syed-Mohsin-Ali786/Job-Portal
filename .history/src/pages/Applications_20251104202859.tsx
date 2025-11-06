import { useState } from "react"
import Navbar from "../components/Navbar"

    
    
    function Applications() {
      const [isEdit,setIsEdit]=useState<boolean>(false);
      return (
        <>
        <Navbar/>
        <div>
          <h2></h2>
{
  isEdit?<>{

  }</>:<div>
    <a href="">
      Resume
    </a>
    <button>Edit</button>
  </div>
}
        </div>
        
        
        </>
      )
    }
    
    export default Applications