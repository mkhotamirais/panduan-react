import React from "react";
import { Breadcrumb, H1 } from "../../../components/Components";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "lifecycle" };
    console.log("CONSTRUCTOR");
  }
  static getDerivedStateFromProps(props, state) {
    console.group("get derived state from props");
    console.log("props: ", props);
    console.log("state: ", state);
    console.groupEnd();
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.group("SHOULD UPDATE");
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    console.log("this props", this.props);
    console.log("this state", this.state);
    console.groupEnd();
    if (nextProps.count > 3) {
      return false;
    }
    return true;
  }
  render() {
    console.log("RENDER");
    return (
      <div>
        {this.state.title} - {this.props.name} : {this.props.count}
      </div>
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.group("get snapshot before update");
    console.log("prevProps: ", prevProps);
    console.log("prevState: ", prevState);
    console.log("this.props: ", this.props);
    console.log("this.state: ", this.state);
    return true;
  }
  componentDidMount() {
    console.log("DID MOUNT");
  }
  componentDidUpdate() {
    console.log("DID UPDATE");
  }
  componentWillUnmount() {
    console.log("WILL UNMOUNT");
  }
}
Title.propTypes;

class LifecycleClass extends React.Component {
  state = {
    name: "Components",
    view: true,
    count: 0,
  };
  render() {
    console.log("RENDER");
    return (
      <>
        <H1>lifecycle class</H1>
        <Breadcrumb />
        <p>Untuk melihat siklusnya lihat di console</p>
        {this.state.view ? <Title name={this.state.name} count={this.state.count} /> : null}
        <button onClick={() => this.setState({ view: !this.state.view })} className="underline">
          toggle copot
        </button>
        <br />
        <button onClick={() => this.setState({ name: "class" })} className="underline">
          update
        </button>
        <br />
        <button onClick={() => this.setState({ count: this.state.count + 1 })} className="underline">
          count
        </button>
        <br />
      </>
    );
  }
}

export default LifecycleClass;
