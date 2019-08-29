document.body.style.background = `url(https://source.unsplash.com/1600x900/?nature)`;
document.body.style.backgroundSize='100% 100%';
let x = document.createElement("DIALOG");
x.style.opacity = 0.9;
x.style.color = 'royalblue';
x.textContent= "Сайт находится в разработке";
document.body.appendChild(x);
x.showModal();
