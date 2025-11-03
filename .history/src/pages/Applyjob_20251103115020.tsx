import { useParams } from "react-router-dom"


function Applyjob() {
  const {id}=useParams();
  return (
    <div>Applyjob{id}</div>
  )
}

export default Applyjob