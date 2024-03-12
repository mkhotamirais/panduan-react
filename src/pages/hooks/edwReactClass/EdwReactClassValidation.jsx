import React from "react";

const Input = ({ label, type, name, onChange }) => (
  <>
    <label>
      {label}: <input type={type} name={name} onChange={onChange} className="border" />
    </label>
    <br />
  </>
);
Input.propTypes;

const ShowErrors = ({ errors }) => (
  <ul style={{ color: "red" }}>
    {errors.map((error, i) => (
      <li key={i}>{error}</li>
    ))}
  </ul>
);
ShowErrors.propTypes;

export class EdwReactClassValidation extends React.Component {
  state = { email: "", password: "", errors: [] };
  handleSubmit = (e) => {
    e.preventDefault();
    let message = [];
    const { email, password } = this.state;
    if (email.length === 0) {
      message = [...message, "Email tidak boleh kosong"];
    }
    if (password.length === 0) {
      message = [...message, "Password tidak boleh kosong"];
    }
    if (message.length > 0) {
      this.setState(
        {
          errors: message,
        },
        () => console.log(this.state.errors)
      );
    }
  };
  render() {
    return (
      <div className="border rounded p-2">
        {this.state.errors && <ShowErrors errors={this.state.errors} />}
        <h3>login page</h3>
        <form onSubmit={this.handleSubmit}>
          <Input type="text" name="email" label="email" onChange={(e) => this.setState({ email: e.target.value })} />
          <Input
            type="password"
            name="password"
            label="password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button type="submit" className="underline">
            submit
          </button>
        </form>
      </div>
    );
  }
}
