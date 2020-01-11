import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
          <h1 className="title">Bank of React</h1>

          <button className= "buttons"><div> <Link to="/LogIn">Login</Link> </div></button>

          <button className= "buttons"><div> <Link to="/userProfile">User Profile</Link> </div></button>

          <button className= "buttons"><div> <Link to="/Debits">Debits</Link> </div></button>

          <button className= "buttons"><div> <Link to="/Credits">Credits</Link> </div></button>

          <button className= "buttons"><div> <Link to="/AccountBalance">Account Balance</Link> </div></button>

        </div>
    );
  }
}

export default Home;