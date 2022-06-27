import React,{Component, useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
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
import MScard from './MScard';
import MSinfo from './MSinfo';
import Search from './Search';
import SearchBar from './SearchBar';
import NavigationBar from './NavigationBar';
import Homepage from './Homepage';

import {BsSearch} from 'react-icons/bs'

const API_KEY = 'ca119fcc'; 

const ids = ['tt0111161','tt0112159','tt0111168','tt9892494','tt0111165','tt0112166'];

export default class App extends React.Component<any, any>{

	async componentDidMount(){
	}

	constructor(props: any){

		super(props);
    
	}

  render(){
    return (
  	
    	<>
       <BrowserRouter>
         <Routes>
          <Route path="/" element ={ <Homepage/>}/>
          <Route path = "/details/:id" element = {<MSinfo/>}/>
          <Route path = "/search/:query" element = {<Search/>}/>
         </Routes>
       </BrowserRouter> 
      </>

    );
  }

}


