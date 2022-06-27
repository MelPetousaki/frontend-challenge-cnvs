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

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";

import './App.css';
import NavigationBar from './NavigationBar';
//import data from './ex_blacklist.json';
import {BsSearch} from 'react-icons/bs';


function SearchBar(){

  const [query, setQuery] = useState("");

  let history  = useNavigate();

  function gotoResults(query){
    history("/search/"+query);
  }

  return(

    <InputGroup >
      <Input    
        id="searchBar"          
        name="searchBar"
        placeholder="Shawshank Redeption..."
        type="search"        
        value = {query}
        onChange = {(event)=> {setQuery(event.target.value)}}     
      />

      <Button id = "searchBtn" 
        onClick = {()=>{gotoResults(query)}}
      >
        <BsSearch color= {"black"} size={20}/>
      
      </Button>
      
    </InputGroup>

  )

}


export default SearchBar;
