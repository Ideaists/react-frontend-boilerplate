import React from 'react';
import './style.css'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <div className="register">
          <h1>Welcome to the Register Page !</h1>
          <p>HTML for this Page - src/components/register/index.js</p>
          <p>CSS for this Page - src/components/register/style.css</p>
      </div>
    );
  }
}


export default Register;