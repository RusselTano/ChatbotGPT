function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-window');

    const userMessage = userInput.value.trim();
    if (userMessage === '') {
        return;
    }

    const userMessageElement = document.createElement('div');
    userMessageElement.className = 'message user-message';
    userMessageElement.textContent = userMessage;
    chatWindow.appendChild(userMessageElement);

    userInput.value = '';
    chatWindow.scrollTop = chatWindow.scrollHeight;

    setTimeout(() => {
        const botMessageElement = document.createElement('div');
        botMessageElement.className = 'message bot-message';
        botMessageElement.textContent = getBotResponse(userMessage);
        chatWindow.appendChild(botMessageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 1000);
}

function getBotResponse(userMessage) {
    // Réponses de base du bot. Vous pouvez étendre ceci avec plus de logique.
    const responses = {
        'bonjour': 'Bonjour! Comment puis-je vous aider aujourd\'hui?',
        'comment ça va': 'Je suis un bot, donc je n\'ai pas d\'émotions, mais merci de demander!',
        'aide': 'Je suis là pour vous aider. Que puis-je faire pour vous?',
        'merci': 'De rien! Je suis là pour aider.'
    };

    const message = userMessage.toLowerCase();
    return responses[message] || 'Désolé, je ne comprends pas. Pouvez-vous reformuler?';
}
