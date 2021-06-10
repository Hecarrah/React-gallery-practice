import React from "react"

export function ImagePopup(props) {
  return (
    <div className="ImagePopup" onClick={props.handleClosePopup}>
      <img src={props.img_src} alt="no" ></img>
    </div>
  );
}

export default ImagePopup;
