import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from '../login/Login';
import Dashboard from '../dashboard/Dashboard';

function App() {
  return (
    <Container className="p-3">
      <Row>
        <Col>
          <Router>
            <Switch>
              <Route path="/" exact><Dashboard/></Route>
              <Route path="/login" exact><Login/></Route>
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
