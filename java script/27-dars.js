// hodisalar (events)

// * inline event handler

// const changeHeading =()=> {
//     const heading = document.getElementById('heading');
//     heading.textContent = 'yangi sarlavha';
// }






// * inline event properties

// const changeHeading =()=> {
//     const heading = document.getElementById('heading');
//     heading.textContent = 'yangi sarlavha';
// }

// const btn = document.getElementById('changeHeadingBtn');
// btn.onclick = changeHeading;

// * event listners


// const changeHeading =()=> {
//     const heading = document.getElementById('heading');
//     heading.textContent = 'yangi sarlavha';
// }

// const btn = document.getElementById('changeHeadingBtn');
// btn.addEventListener('click',changeHeading);


function hisoblash(){

            
    let a = Number(document.getElementById('a_son').value);
    let b = Number(document.getElementById('b_son').value);

   document.getElementById('orta_geometrik').innerHTML =" orta geometrik: " + a*b ;
  
   
}




