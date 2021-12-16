const galleryBtns = document.getElementsByName('galleryButtons')
const overlay = document.getElementById('overlayContainer');
const imgContainer = document.getElementById('imagesContainer');

function showOverlay(e){
  // turn images into an array
  const images = e.split(',');

  // create buttons
  if (images.size == 1){
    const imgTag = document.createElement('img');
    imgTag.setAttribute('src') = images[0];
    imgContainer.appendChild(imgTag);
  }

  else {
    const leftArrow = document.createElement('button');
    leftArrow.classList.add('leftBtn');
    imgContainer.appendChild(leftArrow);

    const imgTag = document.createElement('img');
    imgTag.setAttribute('src','../img/' + images[0]);
    imgTag.setAttribute('id', images[0]);
    imgContainer.appendChild(imgTag);

    const rightArrow = document.createElement('button');
    rightArrow.classList.add('rightBtn');
    imgContainer.appendChild(rightArrow);

    console.log(imgTag.getAttribute('id'));

    setArrowsEvent(rightArrow, leftArrow, imgTag, images);
  }

  function setArrowsEvent(r, l, image, images){

    r.addEventListener('click', function(e){
      let index = 0;
      images.forEach((item, i) => {

        if(item == image.getAttribute('id')){

          if(images.length-1 === i ){
            index = 0;
          }
          else{
            index = i + 1;
          }
          return index;
        }
      });
      image.setAttribute('src','../img/'+images[index]);
      image.setAttribute('id',images[index]);
      setArrows(r, l, index, images.length - 1);
    });

    l.addEventListener('click', function(e){
      let index = 0;
      images.forEach((item, i) => {
        if(item == image.getAttribute('id')){

            if(0 === i ){
              index = images.length-1;
            }
            else{
              index = i - 1;
            }
          return index;
        }
      });
      image.setAttribute('src','../img/'+images[index]);
      image.setAttribute('id',images[index]);
      setArrows(r, l, index, images.length - 1);
    });
  }

  function setArrows(r, l, index, size){
    if(index == size){
      arrowStyles(r, false);
    } else {
      arrowStyles(r,true);
    }

    if(index == 0){
      arrowStyles(l, false);
    } else {
      arrowStyles(l,true);
    }
  }

  function arrowStyles(arrow, state){
    if(state == false){
      arrow.style.opacity = 0;
      arrow.disabled = true;
      arrow.style.cursor = 'default';
    } else {
      arrow.style.opacity = 1;
      arrow.disabled = false;
      arrow.style.cursor = 'pointer';
    }
  }

  // disable buttons
  galleryBtns.forEach((item, i) => {
    item.disabled = true;
  });

  // show the overlay
  overlay.style.display = 'flex';

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
