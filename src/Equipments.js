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
import axios from 'axios';

class Equipments extends React.Component {

  state = {
    equipments: []
  }
    constructor(props) {
        super(props);
    }
        //refactor this code to use axios
      componentDidMount(){
        axios.get(`http://demo8499217.mockable.io/Equipments`)
        .then(res => {
          const equipments = res.data;
          this.setState({ equipments });
        });
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
       
              { this.state.equipments.map((item,index)=>
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
