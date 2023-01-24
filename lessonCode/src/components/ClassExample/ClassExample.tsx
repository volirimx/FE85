import React from "react";
import Hoc from "../../HOC/Hoc";

interface MyState {
  color: string;
  aboba: number;
}

class ClassExample extends React.Component<any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { color: "red", aboba: 0 };
    this.update = this.update.bind(this);
  }

  componentDidMount(): void {
    this.setState({ color: "mounted" });
  }

  update() {
    this.setState({ aboba: this.state.aboba + 1 });
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {}

  componentDidUpdate(): void {
    console.log("updated");
  }
  componentWillUnmount(): void {
    this.setState({ color: "unmounted" });
  }

  render(): React.ReactNode {
    return (
      <div onClick={this.update}>
        <button>asd</button>
        {this.state.color}
      </div>
    );
  }
}

export const ClassComp = Hoc(ClassExample);
