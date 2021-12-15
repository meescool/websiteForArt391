const menuBtn = document.getElementById('menuButton');
const menu = document.getElementById('topMenu');



function closeMenu(){
  menu.style.display = 'none';
  menuBtn.disabled = false;

}

function openMenu(){
  menuBtn.disabled = true;
  menu.style.display = 'flex';
}
