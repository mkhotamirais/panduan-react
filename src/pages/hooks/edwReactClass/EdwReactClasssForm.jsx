import React from "react";

export class EdwReactClasssForm extends React.Component {
  state = {
    nama: "",
    tool: "",
    gender: "",
    member: "",
    alamat: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    alert(`
    nama: ${this.state.nama}
    tool: ${this.state.tool}
    gender: ${this.state.gender}
    member: ${this.state.member}
    alamat: ${this.state.alamat}
    `);

    this.setState({ nama: "", tool: "", gender: "", member: false, alamat: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="border rounded p-2">
        <input
          type="text"
          placeholder="nama"
          className="border"
          value={this.state.nama}
          onChange={(e) => this.setState({ nama: e.target.value })}
        />
        <br />
        <select className="border" value={this.state.tool} onChange={(e) => this.setState({ tool: e.target.value })}>
          <option value="">--pilih tool--</option>
          <option value="html">html</option>
          <option value="css">css</option>
          <option value="js">js</option>
        </select>
        <br />
        <input
          type="radio"
          value={"laki-laki"}
          className="border"
          name="gender"
          onChange={(e) => this.setState({ gender: e.target.value })}
        />
        laki-laki
        <input
          type="radio"
          value={"perempuan"}
          className="border"
          name="gender"
          onChange={(e) => this.setState({ gender: e.target.value })}
        />
        perempuan
        <br />
        <input
          type="checkbox"
          value="true"
          checked={this.state.member}
          onChange={(e) => this.setState({ member: e.target.checked })}
        />{" "}
        Member
        <br />
        <textarea
          placeholder="alamat"
          className="border"
          value={this.state.alamat}
          onChange={(e) => this.setState({ alamat: e.target.value })}
        ></textarea>
        <br />
        <button type="submit" className="underline">
          submit
        </button>
      </form>
    );
  }
}
