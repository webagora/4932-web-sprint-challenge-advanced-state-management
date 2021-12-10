import axios from 'axios';
//Task List:

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const ADD_SMURF = "ADD_SMURF";

//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const fetchSmurfs = () => (dispatch) => {
    dispatch({type: LOADING})
    
    axios.get(`http://localhost:3333/smurfs`)
        .then (resp => {            
            dispatch({type: SUCCESS, payload: resp.data})
        })
        .catch( err => {
            //3. Add a standard action that allows us to set the value of the error message slice of state.            
            dispatch(set_Error(err.message))
        })    
}

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const add_smurf = ( newSmurf ) => {
    return ({type: ADD_SMURF, payload: newSmurf})
};

export const set_Error = (errorMessage) => {
    return ({type: ERROR, payload: errorMessage })
}

