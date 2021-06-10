import './App.css';
import Grid from '@material-ui/core/Grid';
import { Header } from './components/Header';
import { useEffect, useState } from 'react'
import ImageArray from './ImageArray'
import ImagePopup from './components/ImagePopup'
import React from 'react';
import callCatApiToGetNewCatImageUrl from './components/AddCatImage';

let currImage = 0;

function create_images(functionOnClick) {
  return (
    ImageArray.map((img) => <Thumbnail image_src={img.image_src} key={img.id} array_id={img.id} clickFunc={functionOnClick} />
    )
  )
}

function Thumbnail(props) {
  function handleClick() {
    currImage = props.array_id;
    props.clickFunc()
  }
  return (
    <div xs={2} className="Thumbnail">
      <img className="Image" src={props.image_src} alt="no" onClick={handleClick}></img>
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
  const [refresh, refreshPageWithState] = useState(0)
  const [popupOpen, toggleOpenPopup] = useState(false)

  function popupImage() {
    toggleOpenPopup(!popupOpen)
   // console.log(popupOpen)
  }

  function handleUpdate() {
    callCatApiToGetNewCatImageUrl(refreshPageWithState())

    create_images()
    refreshPageWithState({})
  }
  useEffect(() => {handleUpdate()},[])
  return (
    <div className="App">
      <Header />
      <button onClick={handleUpdate}>test</button>
      <Grid container>
        {create_images(popupImage)}
        <Placeholder image_src="" func={handleUpdate} />
      </Grid>
      {popupOpen && <ImagePopup img_id={currImage} handleClosePopup={popupImage} />}
    </div>
  );
}

export default App;
