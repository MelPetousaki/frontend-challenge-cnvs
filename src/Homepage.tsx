import React,{Component, useState, useEffect } from 'react';
import {
  Button,
  ButtonGroup,
  Collapse,
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  FormGroup,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  InputGroup,
  Row,
  Col } from 'reactstrap';

import './App.css'
import MScard from './MScard';
import MSinfo from './MSinfo';
import Search from './Search';
import SearchBar from './SearchBar';
import NavigationBar from './NavigationBar';

const API_KEY = 'ca119fcc';

const ids = ['tt0111161','tt0112159','tt0167260','tt0109830','tt9892494','tt0112166'];

function selectionMS(s1: string){
    console.log(s1);
}

function Homepage(){

  let dataTemplate = {'Title':"",'Year':"", 'imdbRating':"",'imdbID':""};

  let idsYear: {id:string , year:string}[]= [];
  let idsAlphaB: {id:string, title:string}[] = [];
  let idsRating: {id:string, rating:number}[] = [];



  const [data, setData] = useState(dataTemplate);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);    

  useEffect(()=>{
    if(loading === false){
      setLoading(true);              

      const fetchData = async () => {
        for(var i=0; i<ids.length; i++){
          const data = await fetch('http://www.omdbapi.com/?apikey='+API_KEY+'&i='+ids[i]);
          const response = await data.json();
          //console.log(response);
          idsYear[i] = {"id":response.imdbID, "year":response.Year};
          idsAlphaB[i] = {"id":response.imdbID, "title":response.Title};
          idsRating[i] = {"id":response.imdbID, "rating":response.imdbRating};
          //console.log(idsYear[i]);
                                       
          
        } 
          idsYear.sort(function (a,b){
            if(a.year > b.year){

              return -1;
            }
            if(a.year < b.year){
              return 1;
            }
            return 0;
          });

          //console.log(idsAlphaB.length);

          idsAlphaB.sort(function (a,b){
          
            if(a.title > b.title){

              return 1;
            }
            if(a.title < b.title){
              return -1;
            }
            return 0;
          });
          

          idsRating.sort(function (a,b){
          
            if(a.rating > b.rating){

              return -1;
            }
            if(a.rating < b.rating){
              return 1;
            }
            return 0;
          });

          // console.log(idsYear);
          // console.log(idsAlphaB);
          // console.log(idsRating);
      }
     

        fetchData();

        
    }
    });      


  // useEffect(()=>{
    
  //   console.log("im not empty "+idsAlphaB.length);  
  
  // },[data]);
  function filterSort(f,arr){
    //console.log(f);

    //let temp = [];
    //console.log(arr);
    if(f  === "alphabetically"){
      for(var i=0; i<ids.length; i++){
         ids[i] = arr[i]['id']; 
      }

    }else if(f === "rating"){

      for(var i=0; i<ids.length; i++){
         ids[i] = arr[i]['id']; 
      }

    }else{
      for(var i=0; i<ids.length; i++){
         ids[i] = arr[i]['id']; 
      }
    }

    

    //console.log(ids);

  }

  return(
    <div>
      <NavigationBar/>

      <div className="cntr">

        <Row>
          <Col className="spacing" md = "12"></Col>
        </Row>

        <Row>
          <Col className="MS_Selector" md = "12">
              
            <ButtonGroup>
              <Button id = "selectorBtns" onClick = {()=>{selectionMS('movie')}} >Movie</Button>
              <Button id = "selectorBtns" onClick = {()=>{selectionMS('series')}}>Series</Button>          
            </ButtonGroup>

          </Col>            
 
        </Row>

        <Row>
          <Col>             
            <FormGroup tag="fieldset">

              <FormGroup check inline>
                <Input type="radio" onChange={(event)=> {filterSort("year",idsYear)}}
                name="filter" defaultChecked/>{' '}Year         
              </FormGroup>

              <FormGroup check inline>
                <Input type="radio" onChange={(event)=> {filterSort("alphabetically",idsAlphaB)}}
                 name="filter"/>{' '}Alphabetically        
              </FormGroup>

              <FormGroup check inline>
                <Input type="radio" onChange={(event)=> {filterSort("rating",idsRating)}}
                name="filter"/>{' '}Rating        
              </FormGroup>

            </FormGroup>
            
          </Col>
        </Row>

        <Row>
        
          {ids.map((index) => {
           let a = index ;  
           return(<MScard id = {a}/>) } )}

        </Row>

      
      </div>        
    </div>
   
  )

}


export default Homepage;
