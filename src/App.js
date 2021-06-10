import './App.css';
import Grid from '@material-ui/core/Grid';
import { Header } from './components/Header';
import { useState } from 'react'
import ImageArray from './ImageArray'
import ImagePopup from './components/ImagePopup'
import React from 'react';

let currImage = "";

function create_images(functionOnClick) {
  return (
    ImageArray.map((img) => <Thumbnail image_src={img.image_src} key={img.id} clickFunc={functionOnClick} />
    )
  )
}

function Thumbnail(props) {
  function handleClick() {
    currImage = props.image_src
    props.clickFunc()
  }
  return (
    <div xs={2} className="Thumbnail">
      <img src={props.image_src} alt="no" onClick={handleClick}></img>
    </div>
  )
}


function Placeholder(props) {
  return (
    <div xs={2} className="Thumbnail">
      <img src={props.image_src} alt="Click to add"
        onClick={props.func}></img>
    </div>
  )
}


function App() {
  const [, setState] = useState(0)
  const [popupOpen, toggleOpenPopup] = useState(false)


  function popupImage() {
    toggleOpenPopup(!popupOpen)
   // console.log(popupOpen)
  }

  function handleUpdate() {
    ImageArray.push({
      id: ImageArray.length,
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
        {create_images(popupImage)}
        <Placeholder image_src="" func={handleUpdate} />
      </Grid>
      {popupOpen && <ImagePopup img_src={currImage} handleClosePopup={popupImage} />}
    </div>
  );
}

export default App;
