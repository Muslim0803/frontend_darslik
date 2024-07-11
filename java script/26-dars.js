//# 1 element qoshish

// const paragraph= document.createElement('p');
// console.log(paragraph);

// const text = document.createTextNode('bu yerda xat boshi yozilgan');
// console.log(text);






//# element yaratish 


// const paragraph= document.createElement('p');
// const text = document.createTextNode('bu yerda xat boshi yozilgan');

// paragraph.appendChild(text);

// const box =document.getElementById('box');
// box.appendChild(paragraph); 

// console.log(box.parentElement);
// console.log(box.children); 







//  # element ochirish


const paragraph= document.createElement('p');
const text = document.createTextNode('bu yerda xat boshi yozilgan');

paragraph.appendChild(text);

const box =document.getElementById('box');
box.appendChild(paragraph); 

console.log(box.parentElement);
console.log(box.children); 

box.remove();

