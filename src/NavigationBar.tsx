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
import Search from './Search';
import SearchBar from './SearchBar';
//import data from './ex_blacklist.json';
import {BsSearch} from 'react-icons/bs'



function NavigationBar(){

  return(

    <Navbar className = "nbar" color="dark" light expand="md">
    
      <NavbarBrand id= "nbarBrand" href="/" >MovieSeries</NavbarBrand>            
        <Nav>
          <NavItem>             
        
          <SearchBar/>

          </NavItem>
        </Nav>

    </Navbar>

  )

}


export default NavigationBar;
