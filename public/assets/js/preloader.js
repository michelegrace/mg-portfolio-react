// //run loader

function preload() {
  setTimeout( () => {
    if (document.readyState === 'complete') {
    var preloader = document.getElementById('loading');
    var docLoad = document.querySelector('main');
    docLoad.classList.remove('body-hidden');
    docLoad.classList.add('body-visible');
    preloader.classList.remove('loading');
    preloader.classList.add('loaded');
    };
  }, 4977);

  setTimeout( ()=> {

    var welcomeTimeLine = anime.timeline({
        easing: 'linear',
         duration: 500
    });

    welcomeTimeLine.add({
        targets: 'h1.mega',
        opacity: 1,
        delay: 100
    }).add({
      targets: '.intro-text',
      opacity: 1,
      delay: 75
    }).add({
        targets: '.navbar-logo span',
        opacity: 1,
        // delay: 10
      }).add({
        targets: '.navbar-menu .navbar-item',
        opacity: 1,
        delay: [75, anime.stagger(250)] 
      })
}, 5000);
};

preload();