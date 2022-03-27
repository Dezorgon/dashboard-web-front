//resize animation stopper
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 100);
});



function moveRectToElement(element)
{
    const coord = element.getBoundingClientRect();
    var bg = document.querySelector('.menu__item_bg');
    const menu = document.querySelector('.menu');
    const direction = window.getComputedStyle(menu).getPropertyValue('flex-direction');
    if (direction == 'row')
    {
        bg.style.setProperty('left', coord.left + 'px');
        bg.style.setProperty('top', '9px');
    }  
    else
    {
        bg.style.setProperty('left', 0);
        bg.style.setProperty('top', coord.top + 'px');
    }
}


const items = document.querySelectorAll('.menu__item');
let active = document.querySelector('.menu__item_active');

function mouseoverActiveItem()
{
    items.forEach(element => element.classList.remove('menu__item_active'));
    this.classList.add('menu__item_active');
    moveRectToElement(this);
}
items.forEach(element => element.addEventListener('mouseover', mouseoverActiveItem));

function mouseleaveNavbar()
{
    items.forEach(element => element.classList.remove('menu__item_active'));
    active.classList.add('menu__item_active');
    moveRectToElement(active);
}
document.querySelector('.navbar').addEventListener('mouseleave', mouseleaveNavbar);


function init()
{
    document.querySelector('.menu__item_bg').style.setProperty('display', 'block');
    moveRectToElement(document.querySelector('.menu__item_active'));
}
init();
window.addEventListener('resize', init , true);


let logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener("click", () => {sessionStorage.removeItem('token')});