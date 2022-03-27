let slider = document.getElementsByClassName('slider')[0];
slider.style.left = '0px';

let x;
let y;

let lastXDiff = 0;
let xDiffSpeed = 0;

function handleTouchStart(event)
{
    const firstTouch = event.touches[0];
    x = firstTouch.clientX;
    y = firstTouch.clientY;
}

let currentItemNum = 0;

function handleTouchMove(event)
{
    slider.style.transition = '0s'

    const firstTouch = event.touches[0];
    const x2 = firstTouch.clientX;
    const y2 = firstTouch.clientY; 

    let xDiff = x2 - x;
    let yDiff = y2 - y;

    if (Math.abs(xDiff) < Math.abs(yDiff))
    {
        return
    }

    slider.style.left = -currentItemNum * 270 + xDiff + 'px';  
    xDiffSpeed = xDiff - lastXDiff;
    lastXDiff = xDiff;
}  
 

async function handleTouchEnd(event)
{
    slider.style.transition = '.2s'
    const firstTouch = event.changedTouches[0];
    const x2 = firstTouch.clientX;
    const y2 = firstTouch.clientY; 

    const xDiff = x2 - x;
    const yDiff = y2 - y;

    if (Math.abs(xDiff) < Math.abs(yDiff))
    {
        return
    }

    itemNumDiff = -Math.round((xDiff + 10 * (xDiffSpeed ** 1/2)) / 270);
    if (currentItemNum + itemNumDiff <= 0)
    {
        currentItemNum = 0;
    }
    else if (currentItemNum + itemNumDiff >= 3)
    {
        currentItemNum = 3;
    }
    else 
    {
        currentItemNum += itemNumDiff;
    }
    slider.style.left = -currentItemNum * 270  + 'px';    
}


slider.addEventListener('touchstart', handleTouchStart);
slider.addEventListener('touchmove', handleTouchMove);
slider.addEventListener('touchend', handleTouchEnd);