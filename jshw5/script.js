let nameInput = document.getElementById('nameOfUser');
let ageInput = document.getElementById('ageOfUser');
let messageTextarea = document.getElementById('messageFromUser');
let form = document.forms.userInfo;
form.addEventListener('submit', function (e) {
  e.preventDefault()
    if (nameInput.value && ageInput.value && messageTextarea.value) {
        let formDatas = {
            name: nameInput.value,
            age: ageInput.value,
            message: messageTextarea.value,
        }
        alert(`Name: ${formDatas.name} Age: ${formDatas.age} Message: ${formDatas.message}`);
    } else {
        alert("заповніть усті поля")
    }
    
});



