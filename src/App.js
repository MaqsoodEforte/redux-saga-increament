import logo from './logo.svg';
import './App.css';
import { increamentRequest } from "../src/store/actions/increament";
import { connect } from "react-redux";
import { store } from './store';


function App(props) {

  const increament = (values) => {
    console.log("store",props)
    let data = {
      value:values
    };
    console.log("data",data)
    props.increamentReq(data, (res) => {
     

    });
  };
  return (
    <div className="App">
     <button onClick = {()=>{increament(props.store.increament.value)}}>Increament</button>
     <button>decreament</button>
     <h1>value = {props.store.increament.value}</h1>
     {/* <button>Increamenr</button> */}
    </div>
  );
}

// export default App;
const mapStateToProps = (state) => {
  return {
    store: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increamentReq: (...args) => {
      dispatch(increamentRequest(...args));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
