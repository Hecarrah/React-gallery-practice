import ImageArray from "../ImageArray"

async function callCatApiToGetNewCatImageUrl() {
	let newCatPictureUrl = "";
	newCatPictureUrl = await fetch("https://api.thecatapi.com/v1/images/search").then(response => response.json().then(data => {
	  newCatPictureUrl = data[0].url
	  //console.log(data[0].url)
	  ImageArray.push({
	    id: ImageArray.length,
	    image_src: newCatPictureUrl,
	    comment: "No Comments yet!"
	  })
	}))
}
export default callCatApiToGetNewCatImageUrl;
