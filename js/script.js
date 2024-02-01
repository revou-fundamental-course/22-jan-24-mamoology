const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');

const button = document.getElementById('tombol-kirim');

button.addEventListener('click',function() {
    let name = inputName.value;
    let email = inputEmail.value;

    if (!name) {
        const nameError = document.getElementById('name-error');
        nameError.classList.add('error-message');
        
        nameError.innerText = "Nama harus diisi!"
    }

    if (!email) {
        const emailError = document.getElementById('email-error');
        emailError.classList.add('error-message');

        emailError.innerText = "Email harus diisi!";
    }
})