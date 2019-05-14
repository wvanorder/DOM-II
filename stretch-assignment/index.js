const blocks = document.querySelector("body > div");

const redBlock = document.querySelector("body > div > div.block.block--red");
const blueBlock = document.querySelector("body > div > div.block.block--blue")
const greenBlock = document.querySelector("body > div > div.block.block--green")
const pinkBlock = document.querySelector("body > div > div.block.block--pink")
const grayBlock = document.querySelector("body > div > div.block.block--gray")


redBlock.addEventListener('click', event =>{
blocks.removeChild(redBlock);
blocks.prepend(redBlock);
})

blueBlock.addEventListener('click', event =>{
blocks.removeChild(blueBlock);
blocks.prepend(blueBlock);
})

greenBlock.addEventListener('click', event =>{
blocks.removeChild(greenBlock);
blocks.prepend(greenBlock);
})

pinkBlock.addEventListener('click', event =>{
blocks.removeChild(pinkBlock);
blocks.prepend(pinkBlock);
})

grayBlock.addEventListener('click', event =>{
blocks.removeChild(grayBlock);
blocks.prepend(grayBlock);
})




redBlock.addEventListener('mousedown', event =>{
    TweenMax.staggerTo(document.querySelectorAll("body > div > div.block--red")
    , 2, { ease: SlowMo.ease.config(0.5, 0.7, false), x:800}, 0.2);
})

redBlock.addEventListener('mouseup', event =>{
    TweenMax.staggerTo(document.querySelectorAll("body > div > div.block--red")
    , 2, { ease: SlowMo.ease.config(0.5, 0.7, false), x:0}, 0.2);
})

blueBlock.addEventListener('mousedown', event =>{
    TweenMax.staggerTo(document.querySelectorAll("body > div > div.block--blue")
    , 2, { ease: SlowMo.ease.config(0.5, 0.7, false), x:800}, 0.2);
})

blueBlock.addEventListener('mouseup', event =>{
    TweenMax.staggerTo(document.querySelectorAll("body > div > div.block--blue")
    , 2, { ease: SlowMo.ease.config(0.5, 0.7, false), x:0}, 0.2);
})

greenBlock.addEventListener('mousedown', event =>{
    TweenMax.staggerTo(document.querySelectorAll("body > div > div.block--green")
    , 2, { ease: SlowMo.ease.config(0.5, 0.7, false), x:800}, 0.2);
})

greenBlock.addEventListener('mouseup', event =>{
    TweenMax.staggerTo(document.querySelectorAll("body > div > div.block--green")
    , 2, { ease: SlowMo.ease.config(0.5, 0.7, false), x:0}, 0.2);
})

pinkBlock.addEventListener('mousedown', event =>{
    TweenMax.staggerTo(document.querySelectorAll("body > div > div.block--pink")
    , 2, { ease: SlowMo.ease.config(0.5, 0.7, false), x:800}, 0.2);
})

pinkBlock.addEventListener('mouseup', event =>{
    TweenMax.staggerTo(document.querySelectorAll("body > div > div.block--pink")
    , 2, { ease: SlowMo.ease.config(0.5, 0.7, false), x:0}, 0.2);
})

grayBlock.addEventListener('mousedown', event =>{
    TweenMax.staggerTo(document.querySelectorAll("body > div > div.block--gray")
    , 2, { ease: SlowMo.ease.config(0.5, 0.7, false), x:800}, 0.2);
})

grayBlock.addEventListener('mouseup', event =>{
    TweenMax.staggerTo(document.querySelectorAll("body > div > div.block--gray")
    , 2, { ease: SlowMo.ease.config(0.5, 0.7, false), x:0}, 0.2);
})

const abortMission = document.querySelector("body > button")

const warning = function() {
    
    alert(`5 seconds left!`);
}

abortMission.addEventListener('click', event => {
    setTimeout(warning, 5000);
    window.setInterval('location.reload()', 10000);

})
