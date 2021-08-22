import {INCREAMENT_REQUEST,INCREAMENT_SUCESSS,INCREAMENT_ERROR} from "../../config/types";
import { increamentError } from "../actions/increament";

let inititalState = {
    value:0,
    error:null
}


const increamentReducer = (state=inititalState,action) =>{
 switch(action.type){
    case INCREAMENT_REQUEST: {
        return Object.assign({}, state, { error: null});
      }
      case INCREAMENT_SUCESSS: {
          console.log("action",action.payload)
        return Object.assign({}, state, {
          value: action.payload,
          error: null,
        });
      }
      case INCREAMENT_ERROR: {
        return Object.assign({}, state, {
          value: 0,
          error: action.payload,
        });
      }

      default: {
        return state;
      }
 }   
}

export default increamentReducer;