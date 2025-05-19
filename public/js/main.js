document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const blogPost = this.closest('.blog-post');
            const fullContent = blogPost.querySelector('.blog-full-content');

            fullContent.classList.toggle('hidden');

            if (fullContent.classList.contains('hidden')) {
                this.textContent = 'Read More';
            } else {
                this.textContent = 'Read Less';
            }
        });
    });

    setupLikeButtons();

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (validateForm()) {
                submitForm();
            }
        });

        const messageInput = document.getElementById('message');
        const sentimentResult = document.getElementById('sentiment-result');

        if (messageInput && sentimentResult) {
            messageInput.addEventListener('input', async function () {
                const sentiment = await analyzeSentiment(this.value);
                if (!sentiment) {
                    sentimentResult.textContent = 'Error';
                    sentimentResult.style.color = '#FF0000';
                    return;
                }
                sentimentResult.textContent = `${sentiment.emoji} ${capitalize(sentiment.sentiment)}`;

                sentimentResult.className = '';
                sentimentResult.classList.add(sentiment.sentiment.toLowerCase());

                switch (sentiment.sentiment) {
                    case 'positive':
                        sentimentResult.style.color = '#4CAF50'; // Green
                        break;
                    case 'neutral':
                        sentimentResult.style.color = '#607D8B'; // Blue-grey
                        break;
                    case 'negative':
                        sentimentResult.style.color = '#FF9800'; // Orange
                        break;
                    default:
                        sentimentResult.style.color = '#607D8B';
                }
            });
        }
    }

    function validateForm() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        let isValid = true;

        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });

        if (!nameInput.value.trim()) {
            showError(nameInput, 'Name is required');
            isValid = false;
        }

        if (!emailInput.value.trim()) {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email');
            isValid = false;
        }

        if (!messageInput.value.trim()) {
            showError(messageInput, 'Message is required');
            isValid = false;
        }

        return isValid;
    }

    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = message;
        input.classList.add('error');
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function submitForm() {
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                showPopup('Thank you! Your message has been sent successfully.');
                contactForm.reset();
            })
            .catch(error => {
                showPopup('Sorry, there was an error sending your message. Please try again later.');
                console.error('Error:', error);
            });
    }

    function showPopup(message) {
        const popup = document.getElementById('popup');
        const popupMessage = document.getElementById('popup-message');

        popupMessage.textContent = message;
        popup.style.display = 'flex';

        const closeBtn = document.querySelector('.close-popup');
        closeBtn.addEventListener('click', function () {
            popup.style.display = 'none';
        });

        popup.addEventListener('click', function (e) {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });

        setTimeout(() => {
            popup.style.display = 'none';
        }, 5000);
    }

    async function analyzeSentiment(text) {
        try {
            const response = await fetch('/api/sentiment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text })
            });

            if (!response.ok) {
                throw new Error('Failed to analyze sentiment');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error analyzing sentiment:', error);
            return null;
        }
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
});

function setupLikeButtons() {
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach((button, index) => {
        const storageKey = `like-post-${index}`;

        button.addEventListener('click', function () {
            const liked = localStorage.getItem(storageKey) === '1';
            if (liked) {
                button.innerHTML = '<i class="far fa-heart"></i>';
                localStorage.setItem(storageKey, '0');
            } else {
                button.innerHTML = '<i class="fas fa-heart"></i>';
                localStorage.setItem(storageKey, '1');
            }
        });

        // Set initial state from localStorage
        const liked = localStorage.getItem(storageKey) === '1';
        button.innerHTML = liked ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
    });
}

const blogContainer = document.getElementById('blog-container');
if (blogContainer) {
    blogContainer.addEventListener('click', function (e) {
        if (e.target.closest('.like-btn')) {
            const button = e.target.closest('.like-btn');
            const likeCount = button.nextElementSibling;
            const allButtons = blogContainer.querySelectorAll('.like-btn');
            const index = Array.from(allButtons).indexOf(button);
            const storageKey = `like-post-${index}`;

            const currentCount = parseInt(likeCount.textContent || '0');
            const newCount = currentCount === 0 ? 1 : 0; // Toggle like

            likeCount.textContent = newCount;
            button.innerHTML = newCount ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';

            localStorage.setItem(storageKey, newCount);
        }
    });
}
function setupGeminiAI() {
    const geminiToggle = document.getElementById('gemini-toggle');
    const geminiContainer = document.getElementById('gemini-container');
    const geminiClose = document.getElementById('gemini-close');
    const geminiInput = document.getElementById('gemini-input');
    const geminiButton = document.getElementById('gemini-button');
    const geminiContent = document.getElementById('gemini-content');

    // Gemini API key
    const GEMINI_API_KEY = 'AIzaSyCbOlb3N_Bru-OKJvl22H1-KGuZmbHULFE';

    // Toggle Gemini container visibility
    geminiToggle.addEventListener('click', function () {
        geminiContainer.classList.toggle('active');
    });

    // Close Gemini container
    geminiClose.addEventListener('click', function () {
        geminiContainer.classList.remove('active');
    });

    // Send query to Gemini API
    function askGemini() {
        const query = geminiInput.value.trim();

        if (query === '') {
            return;
        }

        // Clear input
        geminiInput.value = '';

        // Show loading state
        geminiContent.innerHTML = '<div class="gemini-loading">Getting answer from Gemini...</div>';

        // Call Gemini API directly
        fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: query }]
                }]
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                // Extract text from the Gemini response
                let responseText = '';
                if (data &&
                    data.candidates &&
                    data.candidates[0] &&
                    data.candidates[0].content &&
                    data.candidates[0].content.parts) {

                    // Extract text from each part
                    responseText = data.candidates[0].content.parts
                        .map(part => part.text || '')
                        .join('\n');
                }

                // Format and display the response
                geminiContent.innerHTML = `
                <p><strong>Your question:</strong> ${query}</p>
                <div class="gemini-response">${responseText || 'No response from Gemini.'}</div>
            `;
            })
            .catch(error => {
                console.error('Error:', error);
                geminiContent.innerHTML = `
                <p><strong>Your question:</strong> ${query}</p>
                <div class="gemini-response">
                    Sorry, I encountered an error when calling the Gemini API. Please try again.
                </div>
            `;
            });
    }

    // Send query on button click
    geminiButton.addEventListener('click', askGemini);

    // Send query on Enter key
    geminiInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            askGemini();
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    // ...existing code...
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // 👇 Add this to initialize Gemini AI
    setupGeminiAI();
});