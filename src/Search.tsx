import React,{Component, useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  Row,
  Col } from 'reactstrap';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams
} from "react-router-dom";

import './App.css'
import NavigationBar from './NavigationBar';
//import data from './ex_blacklist.json';
import {BsStar} from 'react-icons/bs';

const API_KEY = 'ca119fcc';


function Search(){

  let {query} = useParams();

  console.log(query); 

  let ar = [];

  let subdataTemplate = {'Title':"",'Year':"",'Poster':"",'Genre':"",'Plot':"", 'Language':"", 'imdbRating':"" };
  let dataTemplate  = {'Search':[]};  

  const [data, setData] = useState([{'Title':"",'Year':"",'Poster':"",'imdbID':"", 'Type':"" }]);
  //const [data, setData] = useState("");
  const [subData, setSubData] = useState(subdataTemplate);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);    

  useEffect(()=>{
    if(loading === false){
      
      setLoading(true);      
      const fetchData = async () => {

        const data = await fetch('http://www.omdbapi.com/?apikey='+API_KEY+'&s='+query);
        const result = await data.json();

        //console.log(result);
        //console.log(dt);
        //setData(dt);
        console.log(data);

      }  


      fetchData();


      // fetch('http://www.omdbapi.com/?apikey='+API_KEY+'&s='+query)
      // .then(res => res.json())
      // .then(
      //   (result) => {
      //     setData(result.Search);
      //     setLoading(true);
          
      //   },
      //  (error) => {
      //   /*error handling here*/
      //    setError(true);
      //  });

      //console.log(data);
      //console.log(Array.isArray(data));
    }

    //console.log(data);
    //console.log(data[0]);

    //console.log(Array.isArray(data));
    //console.log(data['Search']);
    //console.log(data['Search'][0]);
    //setSubData(data['Search'][0]);
    //console.log(subData);

    //setSubData(data[0]);
    //console.log(subData);

    //console.log(data.Search[0]['Poster']);
    //let ar = data.Search;

    });        

    //console.log(data[0]);

    // if(!error){
    //   if(loading){
    //     console.log(data[0]);
    //     var max = 10;
    //     if(data.size<max) max = data.length; 

    //     for(var i =0; i<max; i++){
    //       ar.push(data[i]);
    //       console.log(ar[i]);
    //     }

    //   }
    // }

    return(

      // {data.map((index) => {
      //      let a = index ;
      //      console.log(a);  
      //      return(<></>)}

     
      //  } 
      <></>

    )

    // return(
    //   <Row>
    //     <Col md = "4">
    //       <img src= "" className = "posterImg img-fluid rounded-start" alt="poster image" ></img>
    //     </Col>
    //     <Col md = "8">
          
    //     </Col>
    //   </Row>
    // )
     
    //  return(

    //   <Col className = "cardRow" md = "12">
        
    //     <Card>
    //       <Row className = "g-0" >
    //         <Col id = "colCard" className="g-0 padding-0" md="4">
    //           <CardImg width ="100px" heigth="200px" src= {data[0]['Poster']} alt="poster image" />
    //         </Col>
    //         <Col className="g-0 padding-0" md="8">
    //           <CardBody>
    //               <CardTitle tag="h5">{data[0]['Title']}&nbsp;({data[0]['Year']})</CardTitle>
    //               <CardSubtitle className="mb-2 text-muted" tag="h6">{data[0]['Type']}</CardSubtitle>
    //               {/*<Button id = "Details" onClick = {()=>(gotoDetails(data[0]['imdbID']))}> Details</Button>*/}
    //           </CardBody>
    //         </Col>
    //       </Row>
    //     </Card>

    //   </Col>

    // )


    // return(
    //   <>
    //   <NavigationBar/>
    //   <Container>
    //   <Col className = "cardRow" md = "6">
        
    //     <Card>
    //       <Row className = "g-0" >
    //         <Col id = "colCard" className="g-0 padding-0" md="2">
    //           <CardImg id="searchImg" src= {data[0]['Poster']} alt="poster image" />
    //         </Col>
    //         <Col className="g-0 padding-0" md="9">
    //           <CardBody>
    //               <CardTitle tag="h5">{data[0]['Title']}&nbsp;({data[0]['Year']})</CardTitle>
    //               <CardSubtitle className="mb-2 text-muted" tag="h6">{data[0]['Type']}</CardSubtitle>
    //               {/*<Button id = "Details" onClick = {()=>(gotoDetails(data[0]['imdbID']))}> Details</Button>*/}
    //               <Button id = "Details"> Details</Button>
    //           </CardBody>
    //         </Col>
    //       </Row>
    //     </Card>

    //   </Col>
    //   </Container>
    //   </>
    // )

}

export default Search;