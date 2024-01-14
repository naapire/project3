// Function to add a message to the chat widget
function addMessage(sender, message, isUser = false, isReply = false) {
    const chatMessages = document.getElementById('chat-messages');
    const newMessage = document.createElement('div');
    newMessage.innerHTML = `<strong>${sender}:</strong> ${message}`;
    if (isUser) {
      newMessage.className = 'user-message';
    } else {
      newMessage.className = isReply ? 'ai-reply' : 'ai-message';
    }
    chatMessages.appendChild(newMessage);

    // Scroll to the bottom to show the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Function to handle user input
  function handleUserInput() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message !== '') {
      addMessage('You', message, true);
      userInput.value = ''; // Clear the input field
      getAIResponse(message);
    }
  }

  // Function to get AI response (simulated for demonstration)
  function getAIResponse(userMessage) {
    // Simulate AI processing and response (replace with actual AI logic)
    const aiResponse = `Thank you for reaching out. Our team will assist you shortly.`;
    addMessage('Vida', aiResponse, false, true);
  }

  // Event listener for user input
  document.getElementById('user-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      handleUserInput();
    }
  });