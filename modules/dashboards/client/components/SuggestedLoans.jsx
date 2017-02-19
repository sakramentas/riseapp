import React from 'react';
import {Circle} from 'rc-progress';

// const singleTransaction = () => {
//   return() (
//     <div>
//       <span className="borrower.value">$350</span>
//       <span className="borrower.name">Megan</span>
//       <div className="borrower.trustrating">7</div>
//     </div>
//   )
// }

class SuggestedLoans extends React.Component {
  constructor(props) {
    super(props)
    // State = {
    //   loans: props.user.loans,
    // }
  }

  render() {
    return (
      <div className="container-fluid" style={ mainContainer }>
        <span style={{marginBottom: '5px'}}>Suggested Loans</span>
        <div className="latestLoans">
          <div className="container-fluid" style={{borderBottom: '1px #dedbdb solid'}}>
            <div className="col-xs-9 text-left">
              <h4>$300</h4>
              <span>Megan</span>
            </div>
            <div className="col-xs-3">
              <Circle percent="40" strokeWidth="4" strokeColor="#0299E3" />
            </div>
          </div>
        </div>
        <div className="latestLoans">
          <div className="container-fluid" style={{borderBottom: '1px #dedbdb solid'}}>
            <div className="col-xs-9 text-left">
              <h4>$300</h4>
              <span>Megan</span>
            </div>
            <div className="col-xs-3">
              <Circle percent="40" strokeWidth="4" strokeColor="#0299E3" />
            </div>
          </div>
        </div>
        <div className="latestLoans">
          <div className="container-fluid" style={{borderBottom: '1px #dedbdb solid'}}>
            <div className="col-xs-9 text-left">
              <h4>$300</h4>
              <span>Megan</span>
            </div>
            <div className="col-xs-3">
              <Circle percent="40" strokeWidth="4" strokeColor="#0299E3" />
            </div>
          </div>
        </div>
        <div className="latestLoans">
          <div className="container-fluid" style={{borderBottom: '1px #dedbdb solid'}}>
            <div className="col-xs-9 text-left">
              <h4>$300</h4>
              <span>Megan</span>
            </div>
            <div className="col-xs-3">
              <Circle percent="40" strokeWidth="4" strokeColor="#0299E3" />
            </div>
          </div>
        </div>
        <div className="latestLoans">
          <div className="container-fluid" style={{borderBottom: '1px #dedbdb solid'}}>
            <div className="col-xs-9 text-left">
              <h4>$300</h4>
              <span>Megan</span>
            </div>
            <div className="col-xs-3">
              <Circle percent="40" strokeWidth="4" strokeColor="#0299E3" />
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
  marginTop: '10px',
  marginBottom: '10px',
  padding: '4px 9px'
}

// const eachLoan = {
//   width: '30%',
// }

const latestLoans = {
  borderBottom: '1px gray solid',
}


export default SuggestedLoans
