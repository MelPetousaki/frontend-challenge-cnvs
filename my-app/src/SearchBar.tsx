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
//import data from './ex_blacklist.json';
import {BsSearch} from 'react-icons/bs'

export interface searchHook{

  dosmth: (params: string) => any;

}

function SearchBar({dosmth}: searchHook){

  const [query, setQuery] = useState("");

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
        onClick = {()=>{dosmth(query)}}
      >
        <BsSearch color= {"black"} size={20}/>
      
      </Button>
      
    </InputGroup>

  )

}


export default SearchBar;
