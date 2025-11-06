import { useState } from "react"
import Navbar from "../components/Navbar"

    
    
    function Applications() {
      const [isEdit,setIsEdit]=useState<boolean>(false);
      return (
        <>
        <Navbar/>
        <div>
{
  isEdit?<>{

  }</>:<div>
    <a href="">
      
    </a>
  </div>
}
        </div>
        
        
        </>
      )
    }
    
    export default Applications