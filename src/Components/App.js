import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import TableView from './TableView';
import makeRequest from '../utils.js'

const styles = {
    fontSize: 24,
    padding: 16,
    marginBottom: 12,
    fontWeight: 400,
    width: '17%',
    margin: '0 auto'
}


const App = () => (
  <div>
    <h2 style={styles}>Dad Joke App</h2>
    <TableView />
  </div> )

export default App;