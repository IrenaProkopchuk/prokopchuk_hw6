import React from "react";
import "./FormComponent.scss"
import "./FormComponent.module.css"

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userMessage: "",
      nameError: "",
      emailError: "",
      messageError: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      userName: value,
      nameError: ""
    });
  }

  handleChangeEmail(e) {
    const value = e.target.value;
    this.setState({
      userEmail: value,
      emailError: ""
    });
  }

  handleChangeMessage(e) {
    const value = e.target.value;
    this.setState({
      userMessage: value,
      messageError: ""
    });
  }

  validateForm() {
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (!this.state.userName) {
      nameError = "Please enter your name";
    }

    if (!this.state.userEmail.includes("@")) {
      emailError = "Invalid email address";
    }

    if (!this.state.userMessage) {
      messageError = "Please enter a message";
    }

    if (nameError || emailError || messageError) {
      this.setState({
        nameError,
        emailError,
        messageError
      });
      return false;
    }

    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      console.log(this.state);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Name:
              <br />
              <input
                className={`${this.state.nameError ? "error" : ""}`}
                type="text"
                value={this.state.userName}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <span className="error-message">{this.state.nameError}</span>
            <br />
            <label>
              Email:
              <br />
              <input
                className={`${this.state.emailError ? "error" : ""}`}
                type="text"
                value={this.state.userEmail}
                onChange={this.handleChangeEmail}
              />
            </label>
            <br />
            <span className="error-message">{this.state.emailError}</span>
            <br />
            <label>
              Message:
              <br />
              <textarea
                className={`${this.state.messageError ? "error" : ""}`}
                type="text"
                value={this.state.userMessage}
                onChange={this.handleChangeMessage}
              />
            </label>
            <br />
            <span className="error-message">{this.state.messageError}</span>
            <br />
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    );
  }
}

export default FormComponent;