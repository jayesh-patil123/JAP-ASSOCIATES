// Create a chatbot window in HTML
const createChatbot = () => {
  // Create the chatbot container but hide it initially
  const chatbotContainer = document.createElement('div');
  chatbotContainer.id = 'chatbot-container';
  chatbotContainer.style.position = 'fixed';
  chatbotContainer.style.bottom = '20px';
  chatbotContainer.style.right = '20px';
  chatbotContainer.style.width = '300px';
  chatbotContainer.style.height = '400px';
  chatbotContainer.style.backgroundColor = '#fff';
  chatbotContainer.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.1)';
  chatbotContainer.style.borderRadius = '8px';
  chatbotContainer.style.display = 'none'; // Initially hidden
  chatbotContainer.style.flexDirection = 'column';
  chatbotContainer.style.zIndex = '1000';

  const chatbotHeader = document.createElement('div');
  chatbotHeader.style.backgroundColor = '#0078d4';
  chatbotHeader.style.color = '#fff';
  chatbotHeader.style.padding = '10px';
  chatbotHeader.style.textAlign = 'center';
  chatbotHeader.style.fontSize = '16px';
  chatbotHeader.style.borderTopLeftRadius = '8px';
  chatbotHeader.style.borderTopRightRadius = '8px';
  chatbotHeader.innerText = 'Chat with Us';

  // Close button for the chatbot
  const closeButton = document.createElement('button');
  closeButton.innerText = 'X';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.style.backgroundColor = '#ff5c5c';
  closeButton.style.color = '#fff';
  closeButton.style.border = 'none';
  closeButton.style.borderRadius = '50%';
  closeButton.style.width = '30px';
  closeButton.style.height = '30px';
  closeButton.style.fontSize = '14px';
  closeButton.style.cursor = 'pointer';
  closeButton.addEventListener('click', () => {
      chatbotContainer.style.display = 'none';  // Hide the chatbot container
  });

  chatbotHeader.appendChild(closeButton);

  const chatbotBody = document.createElement('div');
  chatbotBody.id = 'chatbot-body';
  chatbotBody.style.flex = '1';
  chatbotBody.style.overflowY = 'auto';
  chatbotBody.style.padding = '10px';
  chatbotBody.style.display = 'flex';
  chatbotBody.style.flexDirection = 'column';
  chatbotBody.style.justifyContent = 'flex-end';

  const chatbotFooter = document.createElement('div');
  chatbotFooter.style.padding = '10px';
  chatbotFooter.style.backgroundColor = '#f1f1f1';
  chatbotFooter.style.borderBottomLeftRadius = '8px';
  chatbotFooter.style.borderBottomRightRadius = '8px';
  chatbotFooter.style.display = 'flex';

  const userInput = document.createElement('input');
  userInput.type = 'text';
  userInput.id = 'user-input';
  userInput.placeholder = 'Type a message...';
  userInput.style.width = '100%';
  userInput.style.padding = '8px';
  userInput.style.border = '1px solid #ddd';
  userInput.style.borderRadius = '4px';
  userInput.style.outline = 'none';

  const sendButton = document.createElement('button');
  sendButton.innerText = 'Send';
  sendButton.style.backgroundColor = '#0078d4';
  sendButton.style.color = '#fff';
  sendButton.style.border = 'none';
  sendButton.style.padding = '8px 12px';
  sendButton.style.borderRadius = '4px';
  sendButton.style.marginLeft = '10px';
  sendButton.addEventListener('click', sendMessage);

  chatbotFooter.appendChild(userInput);
  chatbotFooter.appendChild(sendButton);

  chatbotContainer.appendChild(chatbotHeader);
  chatbotContainer.appendChild(chatbotBody);
  chatbotContainer.appendChild(chatbotFooter);

  document.body.appendChild(chatbotContainer);

  // Create a small chatbot icon to toggle visibility
  const chatbotIcon = document.createElement('div');
  chatbotIcon.id = 'chatbot-icon';
  chatbotIcon.style.position = 'fixed';
  chatbotIcon.style.bottom = '20px';
  chatbotIcon.style.right = '20px';
  chatbotIcon.style.width = '50px';
  chatbotIcon.style.height = '50px';
  chatbotIcon.style.backgroundColor = '#0078d4';
  chatbotIcon.style.borderRadius = '50%';
  chatbotIcon.style.color = '#fff';
  chatbotIcon.style.display = 'flex';
  chatbotIcon.style.alignItems = 'center';
  chatbotIcon.style.justifyContent = 'center';
  chatbotIcon.style.cursor = 'pointer';
  chatbotIcon.innerHTML = '💬';

  // Toggle the chatbot container visibility
  chatbotIcon.addEventListener('click', () => {
      if (chatbotContainer.style.display === 'none') {
          chatbotContainer.style.display = 'flex';  // Show the chatbot
      } else {
          chatbotContainer.style.display = 'none';  // Hide the chatbot
      }
  });

  document.body.appendChild(chatbotIcon);
};

// Send message to the chatbot
const sendMessage = async () => {
  const userMessage = document.getElementById('user-input').value.trim();

  if (userMessage === '') return;

  const chatbotBody = document.getElementById('chatbot-body');

  // Display user message
  const userMessageElement = document.createElement('div');
  userMessageElement.style.textAlign = 'right';
  userMessageElement.style.margin = '10px';
  userMessageElement.innerText = userMessage;
  chatbotBody.appendChild(userMessageElement);

  // Clear input field
  document.getElementById('user-input').value = '';

  // Scroll to the bottom of the chat
  chatbotBody.scrollTop = chatbotBody.scrollHeight;

  // Simulate chatbot response after a delay
  const chatbotResponse = await getChatbotResponse(userMessage);

  // Display chatbot response
  const chatbotMessageElement = document.createElement('div');
  chatbotMessageElement.style.textAlign = 'left';
  chatbotMessageElement.style.margin = '10px';
  chatbotMessageElement.style.color = '#0078d4';
  chatbotMessageElement.innerText = chatbotResponse;
  chatbotBody.appendChild(chatbotMessageElement);

  // Scroll to the bottom of the chat
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
};

// Get a response from the chatbot (simulated, could be integrated with an API or backend)
const getChatbotResponse = (userMessage) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          // Simple response logic for demo purposes
          const responses = {
              'hi': 'Hello! How can I assist you today?',
              'hello': 'Hi! How can I help you today?',
              'how are you': 'I am doing great, thank you for asking!',
              'bye': 'Goodbye! Have a great day!',
          };

          resolve(responses[userMessage.toLowerCase()] || 'I\'m sorry, I didn\'t quite get that.');
      }, 1000);
  });
};

// Initialize chatbot when the page is ready
window.onload = () => {
  createChatbot();
};
