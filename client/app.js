
const menu = document.querySelector('.Menu')
const icon = document.querySelector('.bi-list')

menu.addEventListener('click', (e) => {
    const links = document.querySelector('.links')
    links.classList.toggle('active')
    icon.classList.toggle('bi-x')
    icon.classList.toggle('bi-list')
})


var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Otaku')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('Freelancer')
    .pauseFor(2500)
    .start();


    const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});