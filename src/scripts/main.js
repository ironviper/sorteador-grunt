document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the page from being reloaded


        let maxNumber = document.getElementById('max-number').value;
        maxNumber = parseInt(maxNumber);

        let randomNumber = Math.ceil(Math.random() * maxNumber);
        
        
        document.getElementById('numero-sorteado').innerText = randomNumber;

        document.getElementsByClassName('resultado')[0].style.display = 'block';
    })
})