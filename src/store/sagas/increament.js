import { put, takeLatest } from "redux-saga/effects";


import {INCREAMENT_SUCESSS,INCREAMENT_REQUEST,INCREAMENT_ERROR} from "../../config/types"
import {increamentRequest,increamentSuccess,increamentError} from "../actions/increament"

// functions
let increamentFunc = (body) =>{
    // console.log("body value",body)
    let res =  body.value + 1;
    return res
}
// generators

function* increamentGenerator(action) {

    try {
        let res =  increamentFunc(action.body)

        console.log("res",res)
        if(typeof res == "string"){
            yield put(increamentError("string found"));

        }
        else{

            yield put(increamentSuccess(res));
        }
    } catch (error) {
        yield put(increamentError(error));

    }
 
  }

  function* watchIncreament() {
    yield takeLatest(INCREAMENT_REQUEST, increamentGenerator);
  }
  
  export default watchIncreament;
  