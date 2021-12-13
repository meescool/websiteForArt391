const galleryBtns = document.getElementsByName('galleryButtons')
const overlay = document.getElementById('overlayContainer');
const imgContainer = document.getElementById('imagesContainer');

function showOverlay(e){
  // turn images into an array
  const images = e.split(',');
  // for each item in array create an img element
  images.forEach((item, i) => {
    let imgTag = document.createElement('p');
    imgTag.innerHTML = item;
    imgContainer.appendChild(imgTag);
    console.log(item)
  });
  // disable buttons
  galleryBtns.forEach((item, i) => {
    item.disabled = true;
  });

  // show the overlay
  overlay.style.display = 'block';

}

function closeOverlay(e){
  // get the first child of the image container
  let firstChild = imgContainer.firstChild;
  // loop while the first child exists
  while(firstChild){
    firstChild.remove();
    firstChild = imgContainer.firstChild;
  }
  // enable buttons
  galleryBtns.forEach((item, i) => {
    item.disabled = false;
  });
  // remove the overlay
  overlay.style.display = 'none';
}
