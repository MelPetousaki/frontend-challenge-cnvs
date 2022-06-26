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
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import './App.css';
import MScard from './MScard';
import MSinfo from './MSinfo';
import Search from './Search';
import SearchBar from './SearchBar';
import {searchHook} from './SearchBar';

import {BsSearch} from 'react-icons/bs'

const API_KEY = 'ca119fcc';
const IMDB_ID = 'tt011116'; 


const ids = ['tt0111161','tt0112159','tt0111168','tt9892494','tt0111165','tt0112166'];

export default class App extends React.Component<any, any>{

	async componentDidMount(){
	}

	constructor(props: any){

		super(props);
    
	}


  selectionMS(s1: string){
  	console.log(s1);
  }

  getHPResults(){
  	alert("this is an alert");
  }


  render(){
  return (
	
	<div>
	  <Navbar className = "nbar" color="dark" light expand="md">
	  
          <NavbarBrand id= "nbarBrand" href="/" >MovieSeries</NavbarBrand>          	
	          <Nav>
	          	<NavItem>          		
				    
              <SearchBar dosmth = {Search}/>

	          	</NavItem>
	          </Nav>
	
        </Navbar>

        <div className="cntr">

         <Row>
          	<Col className="spacing" md = "12"></Col>
         </Row>

          <Row>
          	<Col className="MS_Selector" md = "12">
          		
          		<ButtonGroup>
				    <Button id = "selectorBtns" onClick = {()=>{this.selectionMS('movie')}} >Movie</Button>
				    <Button id = "selectorBtns" onClick = {()=>{this.selectionMS('series')}}>Series</Button>				  
				</ButtonGroup>

          	</Col>          	
 
          </Row>

          <Row>
          	<Col>          		
          		<FormGroup tag="fieldset">

	          		<FormGroup check inline>
				    	<Input type="radio" name="filter" defaultChecked/>{' '}Year			    
				    </FormGroup>

				    <FormGroup check inline>
				    	<Input type="radio" name="filter"/>{' '}Alphabetically		    
				    </FormGroup>

				    <FormGroup check inline>
				    	<Input type="radio" name="filter"/>{' '}Rating		    
				    </FormGroup>

				</FormGroup>
          	
          	</Col>
          </Row>

          <Row>

		    {/*{ids.map((index:string) => <MScard id = {index} />)}*/}
		    
		    {ids.map((index) => {
		     let a = index ;	
		     return(<MScard id = {a}/>) } )}


		  </Row>
		  {/*<MSinfo title = {"Blacklist"}/>*/}
		</div>

		

		{/*<div className="fixed-bottom">  
      <Navbar color="dark" dark>
          <div className="cntr">
              <Row>              		
              		<Col md="4" className = "Cfooter" id="f1">here1</Col>

              		<Col md="4" className = "Cfooter">here2</Col>

              		<Col md="4" className = "Cfooter">here3</Col>

              </Row>
          </div>
      </Navbar>
    </div>*/}

	</div>

  );
  }
}


