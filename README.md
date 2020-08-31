# Chat.js Front-end Starter

### 1). HTML Minimum setup: 

``` 
<div class="chatbox">
    <div class="chatbox__support">
        <div class="chatbox__header">
            Chat support!
        </div>
        <div class="messages">
            <div class="messages__item--visitor">
                Hi!
            </div>
            <div class="messages__item--operator">
                What is it?
            </div>
            .<div class="messages__item--typing">
                <span class="messages__dot"></span>
                <span class="messages__dot"></span>
                <span class="messages__dot"></span>
            </div>
        </div>
        <div class="chatbox__footer">
            <input type="text" placeholder="Write a message">
        </div>
    </div>
    <div class="chatbox__button">
        <button>I'm a button!</button>
    </div>
</div>
```

### 2). Copy the Chat.css
### 3). Copy Chat.js
### 4). JS Minimum Setup
```
const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const chatbox = new InteractiveChatbox(chatButton, chatContent);
chatbox.display();
``` 

### 5). Linked all CSS and JS files in index.html


