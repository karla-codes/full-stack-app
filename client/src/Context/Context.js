import React, { Component } from 'react';
import Data from '../Data';

const Context = React.createContext();

export class Provider extends Component {
  constructor() {
    super();
    this.data = new Data();
    this.state = { authenticatedUser: null };
  }

  render() {
    const { authenticatedUser } = this.state;
    const value = {
      authenticatedUser,
      data: this.data,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut,
        cancel: this.cancel,
        submit: this.submit,
      },
    };

    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }

  // items to add to Context
  // - Sign In (authenticate)
  signIn = async (username, password) => {};
  // - Sign Out
  signOut = async () => {};

  // - Cancel
  cancel = e => {
    e.preventDefault();
    this.props.history.push('/courses');
  };
}

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  };
}
