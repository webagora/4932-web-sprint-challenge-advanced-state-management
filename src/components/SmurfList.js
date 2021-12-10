import React from 'react';
import { connect } from 'react-redux';  
import Smurf from './Smurf';

 const SmurfList = (props)=> {
    //3. Replace the static isLoading variable with the state loading variable.
    const { smurfs, isLoading } = props;
    
    if (isLoading) {
        return <h1>Loading...</h1>;
    }    

    return(<div className="listContainer">
        {/* 2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list. */}
        {
            smurfs.map(smurf => <Smurf key ={smurf.id} smurf={smurf}/>)
        }        
    </div>);
}

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
const mapStateToProps = ({ smurfs, isLoading }) => ({ smurfs, isLoading});

export default connect(mapStateToProps)(SmurfList);

