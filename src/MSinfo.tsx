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

import './App.css';
import NavigationBar from './NavigationBar';

import {BsStar,BsClock,BsAward} from 'react-icons/bs';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams
} from "react-router-dom";

const API_KEY = 'ca119fcc';

function MSinfo(){

  //const {id} = route.params;
  let {id} = useParams();
  console.log(id);


  let dataTemplate = {'Title':"",'Year':"", 'Rated':"", 'Released':"", 'Runtime':"",'Genre':"", 'Director':"", 'Writer':"",
  'Actors':"",'Plot':"", 'Language':"", 'Country':"", 'Awards':"", 'Poster':"", 'Ratings':[], 'Metascore':"", 'imdbRating':"",
  'imdbVotes':"", 'imdbID':"", 'Type':"", 'totalSeasons':""};

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
      <>
      <NavigationBar/>
      <Container id = "detailsCntr">
      <Row>
        <Col md = "3">
          <img src= {data.Poster} className = "posterImg img-fluid rounded-start" alt="poster image" ></img>

        </Col>
        <Col md = "9">
          <h3>{data.Title}&nbsp;({data.Year})</h3>

          <h4><BsStar id = "dStar"  size={30}/>&nbsp;&nbsp;{data.imdbRating} / 10 
            <p id = "rated">-{data.Rated}-</p>
            <p id = "rated"><BsClock id="dStar" size={25}/> &nbsp;{data.Runtime}</p>
          </h4> 

          <h5>{data.Genre}</h5>

          <hr/>
          <p>{data.Plot}</p>
          <p>
            <b>Actors:</b>&nbsp; {data.Actors}<br/>
            <b>Director:</b> &nbsp;{data.Director}<br/>
            <b>Writer:</b>&nbsp;{data.Writer}<br/>
          </p>

          <p>
            <b>Language:</b>&nbsp; {data.Language} &nbsp;&nbsp;&nbsp;&nbsp;
            <b>Country:</b>&nbsp; {data.Country}<br/>
          </p>

          <p>
            <BsAward id="dStar" size={30}/>&nbsp;{data.Awards}
          </p>

          <p className = "text-muted">Release Date: {data.Released}</p>
        </Col>
      </Row>
      </Container>
      </>
    )


    

}


export default MSinfo;