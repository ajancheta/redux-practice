import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar.js';
import './App.css';
import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props){
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event) {
    console.log(this.props);
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <div onClick={this.onUpdateUser}>
        Update User
        </div>
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>

    );
  }
}
  const mapStateToProps = (state, props) => {
    console.log(props);
    return {
      products: state.products,
      user: state.user,
      userPlusProp: `${state.user} ${props.aRandomProps}`
    }
  };

  const mapActionstoProps  = (dispatch, props) =>  {
    return bindActionCreators({
      onUpdateUser: updateUser
    }, dispatch);
  };


// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log(propsFromState, propsFromDispatch,  ownProps)
//   return {};
// }
export default connect(mapStateToProps, mapActionstoProps)(App);
