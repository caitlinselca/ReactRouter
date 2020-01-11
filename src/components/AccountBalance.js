// src/components/AccountBalance.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AccountBalance extends Component {
  render() {
    return (
        <div>
        <h1 className="title"><Link to="/">Home</Link></h1>
        <h1 className="heading">Balance</h1>
        <h1 className="heading1">Balance: {this.props.accountBalance}</h1>
        </div>
    );
  }
}

export default AccountBalance;