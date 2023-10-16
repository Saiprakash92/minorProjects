const changeName = () => {
    const element = document.querySelector('#myId');
    if (element) {
        element.innerHTML = "hari bol";
    }
}

const changeMe = setTimeout(changeName, 3000);

const s = document.querySelector('#stop');

if (s) {
    console.log(s);
    s.addEventListener('click', function () {
        clearTimeout(changeMe);
        console.log('stopped');
    });
}
