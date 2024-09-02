const check = document.getElementById('check');
const heading = document.getElementById('heading');
const image = document.getElementById('home-icon');
const link = document.getElementById('current');

check.addEventListener('click', function () {
    // try and change color
if (check.checked) {
    // changes to light theme
    document.body.style.backgroundColor = '#F2F9FE';
    // changes text color
    document.body.style.color = '#111729';
    // changes heading color
    heading.style.color = '#111729';
    // changes nav link color
    link.style.color = '#111729';
    // changes image
    image.src = './assets/svg/alarado-icon-homepage.svg';
} else {
    // dark theme
    document.body.style.backgroundColor = '#111729';
    // changes text color
    document.body.style.color = '#F2F9FE';
    // changes heading color
    heading.style.color = '#F2F9FE';
    // changes nav link color
    link.style.color = '#F2F9FE';
    // changes image
    image.src = './assets/svg/alarado-icon-homepage-dark.svg';
}
})

