const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const chatbox = new InteractiveChatbox(chatButton, chatContent);
chatbox.display();
