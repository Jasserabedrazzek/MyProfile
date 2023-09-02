const face = document.getElementById('fa');
const inst = document.getElementById('ins');
const tik = document.getElementById('tik');
const dis = document.getElementById('dis');
const dev = document.getElementById('dev');

const filename = 'dev-social.json';

fetch(filename)
.then(res => res.json())
.then(data => {
    inst.addEventListener('click', () => {
        window.location.href = data.instagram;
    });
    face.addEventListener('click', () => {
        window.location.href = data.facebook;
    });
    dis.addEventListener('click', () => {
        window.location.href = data.discord;
    });
    tik.addEventListener('click', () => {
        window.location.href = data.tiktok;
    });
    dev.addEventListener('click', () => {
        window.location.href = data.DevTunisian;
    });
})
.catch(error => {
    alert('error: '+ error)
});