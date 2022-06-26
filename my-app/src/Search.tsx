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

import './App.css'
//import data from './ex_blacklist.json';
import {BsStar} from 'react-icons/bs'

const API_KEY = 'ca119fcc';


function Search(query: string){

  console.log("azul " + query);

  // let dataTemplate = {'Title':"",'Year':"",'Poster':"",'Genre':"",'Plot':"", 'Language':"", 'imdbRating':"" };

  //   const [data, setData] = useState(dataTemplate);
  //   const [error, setError] = useState(false);
  //   const [loading, setLoading] = useState(false);    

  //   useEffect(()=>{
  //     if(loading === false){
  //       setLoading(true);
                

  //       fetch('http://www.omdbapi.com/?apikey='+API_KEY+'&s='+query)
  //       .then(res => res.json())
  //       .then(
  //         (result) => {
  //           setData(result);

  //         },
  //        (error) => {
  //         /*error handling here*/
  //          setError(true);
  //        });
  //     }
  //     });         


  //   return(
  //     <Row>
  //       <Col md = "4">
  //         <img src= {data.Poster} className = "posterImg img-fluid rounded-start" alt="poster image" ></img>
  //       </Col>
  //       <Col md = "8">
          
  //       </Col>
  //     </Row>
  //   )

}

export default Search;