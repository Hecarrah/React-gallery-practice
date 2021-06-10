import React, { useState } from "react"
import ImageArray from "../ImageArray"

export function ImagePopup(props) {
  const id = props.img_id;
  const [commentValue, setCommentValue] = useState(ImageArray[id].comment)

  const handleCommentChange = (e) => {
    console.log(ImageArray[props.img_id])
    //console.log(commentValue)
    setCommentValue(e.target.value)
  }
  const handleConfirmButton = (e) => {
    ImageArray[id].comment = commentValue
    if (ImageArray[id].comment === commentValue) { //Make sure everything is alright and the value changed
      console.log(`Succesfully changed comment of ID: ${id} to ${commentValue}`)
    }
  }
  return (
    <div className="ImagePopupBackground" >
      <h1 style={{ color: "whitesmoke" }}>{ImageArray[id].image_src}</h1>
      <h3 style={{ color: "whitesmoke" }}>Click the image again to close</h3>
      <img className="ImagePopupImage" src={ImageArray[id].image_src} alt="" onClick={props.handleClosePopup}></img>
      <br></br>
      <textarea type="textarea" value={commentValue} onChange={handleCommentChange} />
      <br></br>
      <button onClick={handleConfirmButton}>Save Changes to the comment</button>
    </div>
  );
}
export default ImagePopup;
