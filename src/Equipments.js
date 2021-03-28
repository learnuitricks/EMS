import React,{Component} from 'react';
import Home from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import EquipmentDetails from './EquipmentDetails';
import Equipment from './Equipment';

class Equipments extends React.Component {
    constructor(props) {
        super(props);

        // i am in the Axios Branch
        
        this.state = [{id:'eq01',name:'mixer1',date:'1998',maintenanceCycle:6},
        {id:'eq02',name:'mixer2',date:'1998',maintenanceCycle:6},
        {id:'eq03',name:'boiler1',date:'2000',maintenanceCycle:8},
        {id:'eq04',name:'freezer1',date:'2002',maintenanceCycle:6}];
      }

      componentDidMount(){
          console.log(this.props);
      }

//using above equipments display the details of the equipment.


    render() {
      return(
      <div>
          <Router>
          <table border="10px">
      <thead>
               <tr>
               
               <th> index </th>
              <th> id </th>
              <th>  name </th>
              <th>  date </th>
               <th> maintenance </th>
               </tr>
       </thead>
       
              { this.state.map((item,index)=>
              {
                  return(
                    <Equipment equipment={item} itemIndex={index}/>
                  )
              }
          )
              
              
                  }
                           
          
          
  </table>
  <div>
    <Link to='/Home'>Homes</Link> 
  </div>

        <div>
        <Route path="/Home">
            <Home type="Duplex" />
          </Route>
          </div> 

          <Switch>
          <Route path="/details/:name" render={(matchProps)=>   <EquipmentDetails  {...matchProps}
    {...this.props}/>} >
         
          </Route>
          </Switch>

      </Router>
              
      </div>

         
      
       ) }
  }

export default Equipments;
