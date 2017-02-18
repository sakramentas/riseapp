import React from 'react';
import { Circle } from 'rc-progress';

class CurrentLoans extends React.Component {
  constructor(props) {
    super(props)
    State = {
      loans: props.user.openedloans,
    }
  }

  render() {
    <Circle percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
  }
}

export default CurrentLoans
