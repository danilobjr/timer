import { Component, ReactNode } from 'react';

const initialState = { active: false };

type ToggleMethod = { toggle: Toggleable['toggle'] };
type Args = ToggleableState & ToggleMethod;
type RenderCallback = (args: Args) => ReactNode;

type ToggleableProps = {
  children?: RenderCallback;
  render?: RenderCallback;
};
type ToggleableState = Readonly<typeof initialState>;

export class Toggleable extends Component<ToggleableProps, ToggleableState> {
  readonly state: ToggleableState = initialState;

  render() {
    const { children, render } = this.props;

    const args = {
      ...this.state,
      toggle: this.toggle,
    };

    return !!children
      ? children(args)
      : render(args);
  }

  toggle = () => this.setState(prevState => ({ active: !prevState.active }));
}
