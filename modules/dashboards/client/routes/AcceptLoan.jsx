import React from 'react';
import {
  Grid,
  Col,
  Row,
} from 'react-bootstrap';

class AcceptLoan extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid>
        <Row className="acceptLoan">
          <Col xs={12} className="accept-top">
            <Row>
              <span>ACCEPT LOAN</span>
              <Col xs={12} className="">
                <h3>Brandon</h3>
                <span>Brandon has successfully paid back his 10 loans</span>
                <h4>$200 for 2 months at 10% interest</h4>
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="accept-bottom">
            <row>
              <Col xs={4} className="">
                <span>Completed</span>
                <span>15</span>
              </Col>
              <Col xs={4} className="">
                <span>Current</span>
                <span>2</span>
              </Col>
              <Col xs={4} className="">
                <span>5</span>
              </Col>
                <span>Overdue</span>
              <Col xs={12}>
                Rating
              </Col>
            </row>

          </Col>
        </Row>
      </Grid>
    )
  }
}

export default AcceptLoan
