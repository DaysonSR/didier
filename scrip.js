const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');

btnYes.addEventListener('click', () => {
    alert('YO SI SABIA QUE TENIA AL MEJOR PROFE DEL MUNDO, LE DEBO UNA Y POR CIERTO SI ERA VRD LO DEL SABADO PASADO DE YA SABE QUIEN ');
});

btnNo.addEventListener('click', () => {
    const x = Math.random() * (window.innerWidth - 150); // 150 es el ancho del botón
    const y = Math.random() * (window.innerHeight - 50); // 50 es el alto del botón

    btnNo.style.position = 'absolute';
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
});
