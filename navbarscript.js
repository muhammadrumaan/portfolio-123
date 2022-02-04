const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('.nav-links');
const navlinks = document.querySelector('.nav-list-links');

hamburger.addEventListener('click',  () => {
  navlist.classList.toggle('nav-links-active');
});

navlinks.addEventListener('click', () =>{
  navlist.classList.remove('nav-links-active');
});


console.log(2+3);

// x =
// content.document.getElementsByTagName("a");
// for(i=0; i < x.length; i++){
//   x[i].addEventListener('click', () =>{
//     navlist.classList.remove('nav-links-active');
//   });
// }