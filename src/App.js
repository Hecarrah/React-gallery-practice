import './App.css';
import Grid from '@material-ui/core/Grid';
import { Header } from './components/Header';
import { useState } from 'react'
import ImageArray from './ImageArray'
import ImagePopup from './components/ImagePopup'
import React from 'react';
import callCatApiToGetNewCatImageUrl from './components/AddCatImage';

let currImage = 1;

function create_images(functionOnClick) {
  return ( //array_id and key are unique to conform to React.js not wanting to use key as value later.
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
      <img className="Image" src={props.image_src} alt="Fetching from TheCatApi" onClick={handleClick}></img>
    </div>
  )
}

function Placeholder(props) {
  return (
    <div xs={2} className="Thumbnail">
      <img src={props.image_src} alt="Click to fetch a new cat from TheCatApi"
        onClick={props.func}></img>
    </div>
  )
}

function App() {
  const [, refreshPageWithState] = useState(0)
  const [popupOpen, toggleOpenPopup] = useState(false)

  function popupImage() {
    toggleOpenPopup(!popupOpen)
  }

  async function handleUpdate() {
    await callCatApiToGetNewCatImageUrl()
    refreshPageWithState({})
  }
  return (
    <div className="App">
      <div style={{ filter: popupOpen ? "blur(3px)" : null }}>
        <Header />
        <button className="Button" onClick={handleUpdate}>Add some cats if clicking on the picture fails</button>
        <Grid container>
          {create_images(popupImage)}
          <Placeholder image_src="" func={handleUpdate} />
        </Grid>
      </div>
      {popupOpen && <ImagePopup img_id={currImage} handleClosePopup={popupImage} />}
    </div>
  );
}

export default App;
