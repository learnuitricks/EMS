import React,{Component} from 'react';
import PropTypes from "prop-types";

class EquipmentDetails extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props);
        //once the component is ready but before render. if we need to do any code we can do it here
    }

   // i need to access the name parameter here.
    render(){

        const {category,match} = this.props;// from props object extract category and match props an
      
        return (
            <>
            <div>
                I am detail component {match.params.name}
                category : {category}
               {/* match is  {match} */}
               {/* I am a detail component for {match.params.name} */}
            </div>
          
            </>
        )
    }
}


export default EquipmentDetails;
