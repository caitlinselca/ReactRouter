import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
          <h1>Bank of React</h1>

          <div> <Link to="/LogIn">Login</Link> </div>

          <div> <Link to="/userProfile">User Profile</Link> </div>

          <div> <Link to="/Debits">Debits</Link> </div>

          <div> <Link to="/Credits">Credits</Link> </div>

          <div> <Link to="/AccountBalance">Account Balance</Link> </div>

        </div>
    );
  }
}

export default Home;