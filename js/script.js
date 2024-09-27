// sticky navbar
// window.onscroll = function() {
//     var navbar = document.querySelector('nav');
//     if (window.scrollY > 10) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// };

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav')
    if(window.scrollY > 60) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled')
    }
})

document.getElementById('searchField').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        alert('Site under construction');
    }
});

document.getElementById('searchIcon').addEventListener('click', function() {
    alert('Site under construction');
});