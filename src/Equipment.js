import {
    Link
  } from "react-router-dom";

function Equipment(props){
    return(  <tr key={props.itemIndex}>
                      
        <td>{props.itemIndex+1}</td>


  
         <td> {props.equipment.id}</td>
         <td> 
   <Link to={`/details/${props.equipment.name}`}>{props.equipment.name}</Link>
 </td>
        
        <td>{props.equipment.date}</td>
       <td> {props.equipment.maintenanceCycle}</td>
</tr>)
}

export default Equipment;