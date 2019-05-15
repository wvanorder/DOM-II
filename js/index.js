// Your code goes here
const footer = document.querySelector("body > footer")
const headBar = document.querySelector("body > header")
const navLinks = document.querySelectorAll("body > header > div > nav > a")
const body = document.querySelector("body")
var image1 = document.querySelector("body > div > section:nth-child(2) > div.img-content > img")
var image2 = document.querySelector("body > div > section.content-section.inverse-content > div.img-content > img")
const image1src = 'file:///Users/vanorder/Documents/lambdaschool/DOM-II/img/adventure.jpg';
const image2src = 'file:///Users/vanorder/Documents/lambdaschool/DOM-II/img/fun.jpg';

body.addEventListener('wheel', event => {
    body.classList.add('fadeback');
})



image1.addEventListener('click', event => {
    if(image1.src === image1src) {
        image1.src = image2src;
        image2.src = image1src;
    } else {
        image1.src = image1src;
        image2.src = image2src;
    }
})

image2.addEventListener('dblclick', event => {
    if(image1.src === image1src) {
        image1.src = image2src;
        image2.src = image1src;
    } else {
        image1.src = image1src;
        image2.src = image2src;
    }
})

const button1 = document.querySelector("body > div > section.content-pick > div:nth-child(1) > div")
const button2 = document.querySelector("body > div > section.content-pick > div:nth-child(2) > div")
const button3 = document.querySelector("body > div > section.content-pick > div:nth-child(3) > div")
const bottomContent = document.querySelector('.content-pick');

bottomContent.addEventListener('mouseenter', event => {
    button1.classList.toggle('bigBtn');
    button2.classList.toggle('bigBtn');
    button3.classList.toggle('bigBtn');
})

bottomContent.addEventListener('mouseleave', event => {
    button1.classList.toggle('bigBtn');
    button2.classList.toggle('bigBtn');
    button3.classList.toggle('bigBtn');
})

button1.addEventListener('mouseover', event => {
    button1.textContent = 'pick me!'
})

button2.addEventListener('mouseover', event => {
    button2.textContent = 'No, pick me!'
})

button3.addEventListener('mouseover', event => {
    button3.textContent = `I'm what you want!`
})

window.addEventListener('load', event => {
    headBar.classList.add('onload')
})

window.addEventListener('keydown', event => {
    body.classList.toggle('greenmode');
    footer.classList.toggle('greenmode');
    headBar.classList.toggle('greenmode');
    console.log(event.key);
})





window.addEventListener('contextmenu', event => {
    event.preventDefault();
})


window.addEventListener('copy', event => {
    var theTarget = event.target;
    event.preventDefault();
    theTarget.classList.add('whencopied');
    alert(`Intruder Alert!`);
   
})

// window.addEventListener('resize', event => {
// alert('Need a bigger screen for all this fun?')
// });