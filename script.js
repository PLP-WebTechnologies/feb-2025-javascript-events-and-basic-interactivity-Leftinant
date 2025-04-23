document.addEventListener('DOMContentLoaded', () => {
    // --- Event Handling ---
    const clickButton = document.getElementById('clickButton');
    const hoverArea = document.getElementById('hoverArea');
    const keypressInput = document.getElementById('keypressInput');
    const keypressDisplay = document.getElementById('keypressDisplay');
    const doubleClickButton = document.getElementById('doubleClickButton');
    const longPressArea = document.getElementById('longPressArea');
    const longPressMessage = document.getElementById('longPressMessage');

    clickButton.addEventListener('click', () => {
        alert('Double click SECRET! 🎉');
    });

    hoverArea.addEventListener('mouseover', () => {
        hoverArea.style.backgroundColor = 'Red';
        hoverArea.textContent = 'HAHAHAAAAAAAAAAAAAAA!';
    });

    hoverArea.addEventListener('mouseout', () => {
        hoverArea.style.backgroundColor = '#eee';
    });

    keypressInput.addEventListener('keypress', (event) => {
        keypressDisplay.textContent += `You pressed: ${event.key} `;
    });

    doubleClickButton.addEventListener('dblclick', () => {
        alert('My celebrity crush is Ssaru 🤫');
    });

    let longPressTimer;
    longPressArea.addEventListener('mousedown', () => {
        longPressTimer = setTimeout(() => {
            longPressMessage.classList.remove('hidden');
            longPressMessage.textContent = 'Long Press Detected! ✨';
            setTimeout(() => {
                longPressMessage.classList.add('hidden');
            }, 2000);
        }, 1000); // 1 second long press
    });

    longPressArea.addEventListener('mouseup', () => {
        clearTimeout(longPressTimer);
    });

    longPressArea.addEventListener('mouseleave', () => {
        clearTimeout(longPressTimer);
    });

    // --- Interactive Elements ---
    const changeButton = document.getElementById('changeButton');
    const changingText = document.getElementById('changingText');
    let isOriginalText = true;

    changeButton.addEventListener('click', () => {
        changingText.classList.toggle('changing-color');
        if (isOriginalText) {
            changingText.textContent = 'You do not want to what me to ask you? ';
            changeButton.textContent = 'Yes';
        } else {
            changingText.textContent = 'No worrys, I am not going to ask you anything!';
            changeButton.textContent = 'This is okward!';
        }
        isOriginalText = !isOriginalText;
    });

    const images = document.querySelectorAll('.image-gallery img');
    const prevButton = document.getElementById('prevImage');
    const nextButton = document.getElementById('nextImage');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    if (images.length > 0) {
        showImage(currentIndex);
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });
    }

    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('open');
        });
    });

    // --- Form Validation ---
    const form = document.getElementById('myForm');
    const requiredField = document.getElementById('requiredField');
    const emailField = document.getElementById('emailField');
    const passwordField = document.getElementById('passwordField');
    const requiredFieldError = document.getElementById('requiredFieldError');
    const emailFieldError = document.getElementById('emailFieldError');
    const passwordFieldError = document.getElementById('passwordFieldError');
    const formFeedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (event) => {
        let isValid = true;

        // Required Field Check
        if (requiredField.value.trim() === '') {
            requiredFieldError.textContent = 'This field is required.';
            isValid = false;
        } else {
            requiredFieldError.textContent = '';
        }

        // Email Format Validation (basic)
        if (emailField.value.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
            emailFieldError.textContent = 'Invalid email format.';
            isValid = false;
        } else {
            emailFieldError.textContent = '';
        }

        // Password Rules
        if (passwordField.value.length < 8) {
            passwordFieldError.textContent = 'Password must be at least 8 characters long.';
            isValid = false;
        } else {
            passwordFieldError.textContent = '';
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
            formFeedback.classList.add('hidden');
        } else {
            formFeedback.textContent = 'Nlijua Tu utadanganya Bladi...Hahahaa 🎉';
            formFeedback.classList.remove('hidden');
            event.preventDefault(); // For demonstration, prevent actual submission
            setTimeout(() => {
                formFeedback.classList.add('hidden');
                form.reset();
            }, 3000);
        }
    });

    // Bonus: Real-time feedback while typing (for password)
    passwordField.addEventListener('input', () => {
        if (passwordField.value.length < 8) {
            passwordFieldError.textContent = 'Password must be at least 8 characters long.';
        } else {
            passwordFieldError.textContent = '';
        }
    });

    // Bonus: Real-time feedback while typing (for email)
    emailField.addEventListener('input', () => {
        if (emailField.value.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
            emailFieldError.textContent = 'Invalid email format.';
        } else {
            emailFieldError.textContent = '';
        }
    });
});