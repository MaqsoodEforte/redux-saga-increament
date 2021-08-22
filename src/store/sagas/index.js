import { all } from "redux-saga/effects";


import watchIncreament from "./increament";


export default function* rootSaga() {
  yield all([
    watchIncreament()
    // watchForcast()
  ]);
}
