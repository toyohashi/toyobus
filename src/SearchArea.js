import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import result from "./data";

class SearchArea extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			lists:[],
			departure:"",
			arival:""
		}
	}

	render(){
		return(
		  <Container>
			  <Row>
				  <Col className="d-flex justify-content-center">
				  	<label>
						出発:
						<input type="text" name="departure" onChange={this.handleChange}
						value = {this.state.departure}/>
					</label>
				  </Col>
			  </Row>

			  <Row>
				  <Col className="d-flex justify-content-center">
				  	<label>
						到着:
						<input type="text" name="arival" onChange={this.handleChange}
						value = {this.state.arival}/>
					</label>
				  </Col>
			  </Row>

			  <Row>
				  <Col className="d-flex justify-content-center">
				  	<button className ="searchButton" onClick={this.handleSubmit}>
					検索
					</button>
				  </Col>
			  </Row>

			
			<br/>

			{this.state.lists.map((l)=>(
			<div key={l.departure}>
				<p>出発バス停:{l.departure}</p>
				<p>到着バス停:{l.arival}</p>

			</div>
			))}
		  </Container>

		)
	}

	handleChange = (event)=>{
		this.setState({[event.target.name]:event.target.value})
	}

	handleSubmit = event =>{
		event.preventDefault();
		this.setState({
			lists:[
				...this.state.lists,
				{
					departure:this.state.departure,
					arival:this.state.arival
				}],
			departure:"",
			arival:""
		});
	}

}
export default SearchArea;
  


