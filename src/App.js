//Task List:
import React, { useEffect } from "react";
//1. Connect the fetchSmurfs actions to the App component.
import { connect } from "react-redux";
import AddForm from './components/AddForm';
import { fetchSmurfs } from "./actions";
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = ( props ) => {

  //2. Call the fetchSmurfs action when the component mounts.
  useEffect (() => {
    props.fetchSmurfs()   
  }, [])

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}
const mapStateToProps = ( state ) => {
  return state;
}
export default connect(mapStateToProps, { fetchSmurfs })(App);


