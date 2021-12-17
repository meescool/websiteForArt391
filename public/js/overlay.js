const galleryBtns = document.getElementsByName('galleryButtons')
const overlay = document.getElementById('overlayContainer');
const imgContainer = document.getElementById('imagesContainer');

function showOverlay(e){
  // turn images into an array
  const images = e.split(',');
  console.log(images.length)

  if (images.length == 2){
    const imgHolder= document.createElement('div');
    imgHolder.classList.add('imageHolder');
    imgContainer.appendChild(imgHolder);

    const imgTag = document.createElement('img');
    imgTag.setAttribute('src','../img/' + images[0]);
    imgTag.setAttribute('id', images[0]);
    imgHolder.appendChild(imgTag);

    const imgDesc= document.createElement('p');
    imgDesc.innerHTML= images[1];
    imgHolder.appendChild(imgDesc);
  }

  else {
    // create buttons

    const leftArrow = document.createElement('button');
    leftArrow.classList.add('leftBtn');
    imgContainer.appendChild(leftArrow);

    const imgHolder= document.createElement('div');
    imgHolder.classList.add('imageHolder');
    imgContainer.appendChild(imgHolder);

    const imgTag = document.createElement('img');
    imgTag.setAttribute('src','../img/' + images[0]);
    imgTag.setAttribute('id', images[0]);
    imgHolder.appendChild(imgTag);

    const imgDesc= document.createElement('p');
    imgDesc.innerHTML= images[1];
    imgHolder.appendChild(imgDesc);

    const rightArrow = document.createElement('button');
    rightArrow.classList.add('rightBtn');
    imgContainer.appendChild(rightArrow);

    setArrowsEvent(rightArrow, leftArrow, imgTag, images, imgDesc);

  }

  // disable buttons
  galleryBtns.forEach((item, i) => {
    item.disabled = true;
  });

  // show the overlay
  overlay.style.display = 'flex';

}


  function setArrowsEvent(r, l, image, images, p){

    r.addEventListener('click', function(e){
      let index = 0;
      images.forEach((item, i) => {

        if(item == image.getAttribute('id')){

          if(images.length-2 === i ){
            index = 0;
          }
          else{
            index = i + 2;
          }
          return index;
        }
      });
      image.setAttribute('src','../img/'+images[index]);
      image.setAttribute('id',images[index]);
      p.innerHTML = images[index + 1];
      setArrows(r, l, index, images.length - 2);
    });

    l.addEventListener('click', function(e){
      let index = 0;
      images.forEach((item, i) => {
        if(item == image.getAttribute('id')){

            if(0 === i ){
              index = images.length-2;
            }
            else{
              index = i - 2;
            }
          return index;
        }
      });
      image.setAttribute('src','../img/'+images[index]);
      image.setAttribute('id',images[index]);
      p.innerHTML = images[index + 1];
      setArrows(r, l, index, images.length - 2);
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
