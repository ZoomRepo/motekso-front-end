import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <div class="footer">
            <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        </div>
        );
  }
}

export default Footer;
