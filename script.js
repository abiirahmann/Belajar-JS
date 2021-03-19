//  DOM Selection
// document.getElementById() -> element

// get element
const judul= document.getElementById('judul');
// set style color to red
judul.style.color = 'red';
// set style backgound to #ccc
judul.style.backgroundColor = '#ccc';
// set innerHTML
judul.innerHTML= 'Belajar DOM';

// document.getElementsByTagname()
// -> HTMLCollections
// get Collection of element
const p= document.getElementsByTagName('p');
// set element of collection by index of array
p[0].style.backgroundColor = 'lightblue';
p[1].style.backgroundColor = 'lightblue';
p[2].style.backgroundColor = 'yellow';
p[3].style.backgroundColor = 'green';

// with looping
for(let i = 0; i<p.length; i++){
    p[i].style.backgroundColor= 'lightblue';
}
// document.getElementByClassName()
// HTMLCollection
const p1= document.getElementsByClassName('p1');
p1[0].innerHTML= 'Ini diubah dari JS'

// document.getQuerySelector()
const p4= document.querySelector('p')
p4.style.color= 'blue';
p4.style.fontSize= '30px';

const li2= document.querySelector('section ul li:nth-child(2)');
li2.style.backgroundColor= 'orange';

// set the first
const p3= document.querySelector('p');
p3.innerHTML= 'HAHAHA';

// //document.querySelectorAll()
const p2 = document.querySelectorAll('p');
// //set element
p2[2].style.backgroundColor = 'lightblue';