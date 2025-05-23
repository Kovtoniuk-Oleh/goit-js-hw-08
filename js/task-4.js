document.querySelector('.login-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Запобігає перезавантаженню сторінки

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value.trim();
    const password = formElements.password.value.trim();

    // Перевіряємо, чи всі поля заповнені
    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }

    // Створюємо об'єкт з введеними даними
    const formData = {
        email,
        password
    };

    console.log(formData); // Виводимо об'єкт у консоль

    event.currentTarget.reset(); // Очищуємо форму
});

