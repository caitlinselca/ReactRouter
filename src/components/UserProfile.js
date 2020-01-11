// src/components/UserProfile.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1 className="title"><Link to="/">Home</Link></h1>

          <h1 className="heading">User Profile</h1>

          <div className="heading1">Username: {this.props.userName}</div>
          <div className="heading1">Member Since: {this.props.memberSince}</div>
        </div>
    );
  }
}

export default UserProfile;