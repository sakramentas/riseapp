import React from 'react';
import {Circle} from 'rc-progress';
import {
  Grid,
  Col,
  Row,
} from 'react-bootstrap';


class CurrentLoans extends React.Component {
  // constructor(props) {
  //   super(props)
  //   State = {
  //     loans: props.user.openedloans,
  //   }
  // }

  render() {
    return (
      <Grid className="core-card">
        <Row className="container-fluid">
          <Col xs={12} className="core-card-title"> Current Loans</Col>
          <Col xs={12} className="current-loans-progress">
            <Row>
              <Col xs={4} className="progressContainer">
                <Circle percent="28" strokeWidth="5" trailWidth="5" strokeColor="#0299E3" />
                <span>28%</span>
              </Col>
              <Col xs={4} className="progressContainer">
                <Circle percent="18" strokeWidth="5" trailWidth="5" strokeColor="#0299E3" />
                <span>18%</span>
              </Col>
              <Col xs={4} className="progressContainer">
                <Circle percent="18" strokeWidth="5" trailWidth="5" strokeColor="#0299E3" />
                <span>18%</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>

    )
  }
}


// const eachLoan = {
//   width: '30%',
//   float: 'left'
// }

export default CurrentLoans
