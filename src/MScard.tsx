import React,{Component, useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col } from 'reactstrap';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";

import MSinfo from './MSinfo';
import './App.css'
//import data from './ex_blacklist.json';
import {BsStar} from 'react-icons/bs';

const API_KEY = 'ca119fcc';
const IMDB_ID = 'tt0111161'; //The shawshank redemption (default)



/*function gotoDetails(id){
	//console.log("hey there "+ id);
	//props.history.push("/details");
	
}*/


  
function MScard({id}){

		let history = useNavigate();

		//const gotoDetails = (id)=> { }
		function gotoDetails(id){
			//history("/details" as never, {id:id} as never);
			history("/details/"+id);
			//history.Navigate("/details", {id:id});
		}

		let dataTemplate = {'Title':"",'Year':"",'Poster':"",'Genre':"",'Plot':"", 'Language':"", 'imdbRating':"" };

		const [data, setData] = useState(dataTemplate);
		const [error, setError] = useState(false);
		const [loading, setLoading] = useState(false);		

		useEffect(()=>{
			if(loading === false){
				setLoading(true);
								

				fetch('http://www.omdbapi.com/?apikey='+API_KEY+'&i='+id)
				.then(res => res.json())
				.then(
					(result) => {
						setData(result);

					},
				 (error) => {
				 	/*error handling here*/
           setError(true);
         });
			}
			});	        
      

		return(
		
			
		    <Col className="cardRow"  md="6">
		    	<Card id="crd">	
		    	<Row className = "g-0" >
		    		<Col id = "colCard" className="g-0 padding-0" md="4">
		    			{/*<img src= {data.Poster} className = "img-fluid rounded-start" id= "posterImg" alt="poster image" 
		    			></img>*/}
		    			
		    			<CardImg top width="100%" 
		    			className = ""
		    			src= {data.Poster} alt="poster image" />
		    				
		    			
		    		</Col>
		    		<Col id = "colCard" className = "g-0" md = "8">
				        				    
					    <CardBody>
					      	<CardTitle tag="h5">{data.Title}&nbsp;({data.Year})</CardTitle>
					      	<CardSubtitle className="mb-2 text-muted" tag="h6">{data.Genre}</CardSubtitle>
					      	<CardText id="plot">{data.Plot}</CardText>
					      	<CardText tag = "h6">Language:&nbsp;&nbsp;{data.Language}</CardText>
					      	<CardText tag = "h6"><BsStar id ="iStar" size={17}/>{data.imdbRating}&nbsp;/&nbsp;10</CardText>
					      	<Button id = "Details" onClick = {()=>(gotoDetails(id))}> Details</Button>
					    </CardBody>
		    			
						
					</Col>
				</Row>
				</Card>	
		  </Col>
 			
		  
		);	
	

}

export default MScard;