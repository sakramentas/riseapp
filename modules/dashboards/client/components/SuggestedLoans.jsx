import React from 'react';
import {Circle} from 'rc-progress';
import {
  Grid,
  Col,
  Row,
} from 'react-bootstrap';

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
      <Grid className="core-card">
        <Row className="container-fluid">
          <Col xs={12} className="core-card-title"> Suggested Loans</Col>
          <Col xs={12}>
            <div className="latestLoans">
              <div className="container">
                <Col xs={9} className="text-left">
                  <h4>$300</h4>
                  <span>Megan</span>
                </Col>
                <Col xs={3} className="ratingContainer">
                  <Circle percent="70" strokeWidth="5" trailWidth="5" strokeColor="#8bc34a"/>
                  <span>7</span>
                </Col>
              </div>
            </div>
            <div className="latestLoans">
              <div className="container">
                <Col xs={9} className="text-left">
                  <h4>$300</h4>
                  <span>Megan</span>
                </Col>
                <Col xs={3} className="ratingContainer">
                  <Circle percent="40" strokeWidth="5" trailWidth="5" strokeColor="#ff9800"/>
                  <span>4</span>
                </Col>
              </div>
            </div>
            <div className="latestLoans">
              <div className="container">
                <Col xs={9} className="text-left">
                  <h4>$300</h4>
                  <span>Megan</span>
                </Col>
                <Col xs={3} className="ratingContainer">
                  <Circle percent="40" strokeWidth="5" trailWidth="5" strokeColor="#0299E3"/>
                  <span>4</span>
                </Col>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>

    )
  }
}

// const mainContainer = {
//   background: 'white',
//   borderRadius: '4px',
//   marginTop: '10px',
//   marginBottom: '10px',
//   padding: '4px 9px'
// }

// const eachLoan = {
//   width: '30%',
// }

const latestLoans = {
  borderBottom: '1px gray solid',
}


export default SuggestedLoans
