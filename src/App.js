import './App.css';
import Grid from '@material-ui/core/Grid';
import { Header } from './components/Header';
import { useEffect, useState } from 'react'
import ImageArray from './ImageArray'
import React from 'react';
import { render } from '@testing-library/react';

function create_images() {
  return (
    ImageArray.map((img) => <Thumbnail image_src={img.image_src} key={img.id} />
    )
  )
}

function Thumbnail(props) {
  return (
    <div xs={2} className="Thumbnail">
      <img src={props.image_src} alt="no"></img>
    </div>
  )
}


function Placeholder(props) {
  const [state, setState] = useState(props.state)

  return (
    <div xs={2} className="Thumbnail">
      <img src={props.image_src} alt="Click to add"
        onClick={props.func}></img>
    </div>
  )
}


function App() {
  const [state, setState] = useState(0)
  function handleUpdate() {
    ImageArray.push({
      id: 1,
      image_src: "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=518&q=80",
    })
    create_images()
    setState(() => {
      return {
        test: true
      }
    })
  }
  return (
    <div className="App">
      <Header />
      <button onClick={handleUpdate}>test</button>
      <Grid container>
        {create_images()}
        <Placeholder image_src="" func={handleUpdate} />
      </Grid>
    </div>
  );
}

export default App;
