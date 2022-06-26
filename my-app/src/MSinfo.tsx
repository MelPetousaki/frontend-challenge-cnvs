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

import {BsStar} from 'react-icons/bs'

const API_KEY = 'ca119fcc';

function MSinfo({title}){

  let dataTemplate = {'Title':"",'Year':"", 'Rated':"", 'Released':"", 'Runtime':"",'Genre':"", 'Director':"", 'Writer':"",
  'Actors':"",'Plot':"", 'Language':"", 'Country':"", 'Awards':"", 'Poster':"", 'Ratings':[], 'Metascore':"", 'imdbRating':"",
  'imdbVotes':"", 'imdbID':"", 'Type':"", 'totalSeasons':""};

    const [data, setData] = useState(dataTemplate);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);    

    useEffect(()=>{
      if(loading === false){
        setLoading(true);
                

        fetch('http://www.omdbapi.com/?apikey='+API_KEY+'&t='+title)
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
      <Row>
        <Col md = "3">
          <img src= {data.Poster} className = "posterImg img-fluid rounded-start" alt="poster image" ></img>

        </Col>
        <Col md = "9">
          <h3>{data.Title}&nbsp;({data.Year})</h3>

          <h4><BsStar size={30}/>&nbsp;&nbsp;{data.imdbRating} / 10</h4> 
          <hr/>
          <p>{data.Plot}</p>
        </Col>
      </Row>
    )

}


export default MSinfo;