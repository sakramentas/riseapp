import React from 'react';
import {Circle} from 'rc-progress';

class CurrentLoans extends React.Component {
  // constructor(props) {
  //   super(props)
  //   State = {
  //     loans: props.user.openedloans,
  //   }
  // }

  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <span className="col-sm-12">Current Loans</span>
          <div className="row">
            <Circle percent="10" strokeWidth="4" strokeColor="#0299E3" className="col-sm-4" />
            <Circle percent="10" strokeWidth="4" strokeColor="#0299E3" className="col-sm-4" />
            <Circle percent="10" strokeWidth="4" strokeColor="#0299E3" className="col-sm-4" />
          </div>
        </div>
      </div>
    )
  }
}

export default CurrentLoans
