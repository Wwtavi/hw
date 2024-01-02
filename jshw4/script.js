let textField = document.querySelector('.text');
let offsetX, offsetY;
let dragg = false;
textField.addEventListener('mousedown', function (event) {
    if (event.button === 0 ){
    let rect = textField.getBoundingClientRect();
    if (textField.classList.contains('startPosition')) {
        textField.style.width = '300px';
        textField.style.height = '200px';
        offsetX = 0; 
        offsetY = 0; 
        textField.classList.remove('startPosition');
    } else {
        dragg = true;
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;
    }
    }
});
document.addEventListener('mousemove', function (event) {
    if (dragg) {
        let newWidth = event.clientX - offsetX;
        let newHeight = event.clientY - offsetY;

        textField.style.width = newWidth  + 'px';
        textField.style.height = newHeight  + 'px';
    }
});
textField.addEventListener('mouseup', function () {
    if (dragg) {
        dragg = false;
    } else {
        blockTarget.classList.add('startPosition');
    }
});
