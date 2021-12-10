import { LOADING, SUCCESS, ERROR } from "../actions"
import AddForm from "../components/AddForm"

//Task List:
const initialState = {
    //1. Adds the following state values into the initialState:
    //  - an array of smurfs
    //  - a boolean indicating if the app is loading
    //  - a string indicating a possible error message
    smurfs: [],
    isLoading: false,
    error: ""
}

const reducer = (state = initialState, action) => {
    //2. Add in the arguments needed to complete a standard reducer function.
    //3. Add in a reducer case to accommodate the start of a smurf fetch.
    //4. Add in a reducer case to accommodate the successful smurf api fetch.
    //5. Add in a reducer cases to accommodate the failed smurf api fetch.
    //6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
    //7. Add in a reducer case that adds in a value to the error message.
    switch (action.type){
        case LOADING:
            return {
                ...state,
                smurfs: [],
                isLoading: true,
                error: ""
            }
        case SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: ""
            }
        case ERROR:
            return {
                ...state,
                smurfs: [],
                isLoading: false,
                error: action.payload
            }        
        default:
            return state  
    }       
}

export default reducer


