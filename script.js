let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classlist.toggle('bx-x');
    navbar.classlist.toggle('active');
}

window.onscrroll = () => {
    menu.classlist.remove('bx-x');
    navbar.classlist.remove('active');
}

const typed = new Typed('.multiple-text', {
      strings: ['Frontend Developer', 'Backend Developer', 'Blockchain Developer', 'Web Designer', 'YouTuber'],
      typeSpeed: 80,
      backspeed: 80,
      backdelay: 1200,
      loop: true,
    });