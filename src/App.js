import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import NaviBar from './NaviBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchArea from './SearchArea';

class App extends Component {
  render(){
    return(
      <Container>
        {/*App-title*/}
        <Row>
          <Col xs={12}>
          <h1 className="text-center border-0 display-4">TOYOBUS</h1>
          </Col>
        </Row>

        {/*Nav-bar*/}
        <Row>
          <Col>
          <NaviBar></NaviBar>
          </Col>
        </Row>
        <br/>
        {/*SearchArea component*/}
        <SearchArea></SearchArea>
        {/*Search-button component*/}
        <Row></Row>
      </Container>


    );
  }
}

export default App;
