import React from 'react';
import './style.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="login">
          <h1>Welcome to the Login Page !</h1>
          <p>HTML for this Page - src/components/login/index.js</p>
          <p>CSS for this Page - src/components/login/style.css</p>
      </div>
    );
  }
}


export default Login;