import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import BaseRouter from './routes';

import './App.css';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';
import * as actions from './store/actions/auth';

class App extends Component {

    componentDidMount() {
        this.props.onTryAutoSignUp();
    }

  render(){
    return (
        <div className="App">
          <Router>
           <CustomLayout {...this.props}>
              <BaseRouter />
           </CustomLayout>
           </Router>
        </div>
      );
  }
}

//Check Authentication via mapping the state
const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
}

// Method for
const mapDispatchToPropse = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(actions.authCheckState())
    }
}

export default connect(mapStateToProps, mapDispatchToPropse)(App);
