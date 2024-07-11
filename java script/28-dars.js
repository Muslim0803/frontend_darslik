// 28-dars kop uchraydigan hodisalaar (event)

//  mause event 

// const notifyDoubleCliCk = () => {
//     console.log('Element ikki marta bosildi');
// }

// const btn = document.getElementById('btn');
// btn.addEventListener('dblClic',notifyDoubleCliCk);  








// form event- forma bn ishlaganda yuz beradigan hodisa




// keyboard event - klavyatura tugmasini bosish orqali 

document.addEventListener('keydown', event  => {
    console.log('key:'+ event.key);
    console.log('code:' + event.code);
});