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
      <div className="container-fluid" style={ mainContainer }>
        <div className="container text-center">
          <span className="text-center" style={{marginBottom: '5px'}}>Current Loans</span>
          <div className="row" style={{ padding: '14px'}}>
            <div className="col-xs-4">
              <Circle percent="10" strokeWidth="8" strokeColor="#0299E3" />
            </div>
            <div className="col-xs-4" >
              <Circle percent="40" strokeWidth="8" strokeColor="#0299E3" />
            </div>
            <div className="col-xs-4">
              <Circle percent="70" strokeWidth="8" strokeColor="#0299E3" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mainContainer = {
  background: 'white',
  borderRadius: '4px',
  padding: '4px 9px'
}

// const eachLoan = {
//   width: '30%',
//   float: 'left'
// }

export default CurrentLoans
