// Simple Chatbot with mock Gemini API integration

document.addEventListener('DOMContentLoaded', function() {
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendBtn = document.getElementById('chatbot-send');
    
    if (!chatbotMessages || !chatbotInput || !chatbotSendBtn) return;
    
    // Add event listeners
    chatbotSendBtn.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Mock responses for common questions
    const responses = {
        "hello": "Hi there! How can I help you today?",
        "hi": "Hello! What can I do for you?",
        "how are you": "I'm doing well, thanks for asking! How about you?",
        "bye": "Goodbye! Have a great day!",
        "thank you": "You're welcome! Is there anything else I can help with?",
        "thanks": "You're welcome! Is there anything else I can help with?",
        "what is this blog about": "This blog is all about interesting fun facts from various topics like science, history, space, and more!",
        "contact information": "You can contact us using the form in the Contact section or email us at info@funfactsblog.com",
        "help": "I can help answer questions about our blog, articles, or assist with navigation. What would you like to know?"
    };
    
    // Function to send a message
    function sendMessage() {
        const message = chatbotInput.value.trim();
        
        if (message === '') return;
        
        // Add user message to chat
        addMessage(message, 'user');
        
        // Clear input
        chatbotInput.value = '';
        
        // Get bot response (with slight delay for realism)
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, 'bot');
        }, 500);
    }
    
    // Function to add a message to the chat
    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
        
        chatbotMessages.appendChild(messageElement);
        
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Function to get bot response
    function getBotResponse(message) {
        // Process message
        const processedMessage = message.toLowerCase();
        
        // First try exact matches
        if (responses[processedMessage]) {
            return responses[processedMessage];
        }
        
        // Then try partial matches
        for (const key in responses) {
            if (processedMessage.includes(key)) {
                return responses[key];
            }
        }
        
        // If no matching response is found, use the API
        return getApiResponse(message);
    }
    
    // Mock API call to Gemini (in a real app, this would be an actual API call)
    function getApiResponse(message) {
        // In a real implementation, this would make a fetch call to a Gemini API endpoint
        
        // Analyze message intent
        if (message.toLowerCase().includes('fact') || message.toLowerCase().includes('article')) {
            return "We have several interesting articles on ocean facts, space exploration, and ancient Egyptian mysteries. You can check them out in the Blog section!";
        }
        
        if (message.toLowerCase().includes('contact') || message.toLowerCase().includes('email')) {
            return "You can contact us through the form in the Contact section. We'll get back to you as soon as possible!";
        }
        
        if (message.toLowerCase().includes('dark') || message.toLowerCase().includes('mode') || message.toLowerCase().includes('theme')) {
            return "You can toggle dark mode by clicking the moon icon in the navigation bar!";
        }
        
        // Default response
        return "I'm not sure I understand. Could you please rephrase your question, or ask me about our blog articles, contact information, or website features?";
    }
    
    // API integration (this would connect to Gemini in a real app)
    // Note: This is a placeholder for the actual implementation
    async function callGeminiApi(userMessage) {
        try {
            // In a real implementation, this would be an actual API call:
            /*
            const response = await fetch('https://api.gemini.ai/v1/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer YOUR_API_KEY'
                },
                body: JSON.stringify({
                    messages: [
                        {role: "user", content: userMessage}
                    ]
                })
            });
            */
            const data = await response.json();
            return data.response;
            
            
            // For now, just return a placeholder response
            return "This would be a response from the Gemini API in a real implementation.";
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            return "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
        }
    }
});