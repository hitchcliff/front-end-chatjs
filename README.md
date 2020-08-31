# Chat.js Front-end Starter

### 1). HTML Minimum setup: 

``` 
<div class="chatbox">
        <div class="chatbox__support">
            <div class="chatbox__header">
                Chat support!
            </div>
            <div class="chatbox__messages">
                <div class="messages__item messages__item--visitor">
                    Hi!
                </div>
                <div class="messages__item messages__item--operator">
                    What is it?
                </div>
                .<div class="messages__item messages__item--typing">
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
            <button>Branch-1</button>
        </div>
    </div>
```

### 2). Copy the Chat.css
### 3). Copy Chat.js
### 4). JS Minimum Setup
```
const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: '</p>Clicked!</p>',
    isNotClicked: '<p>Not clicked!</p>'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);

``` 

### 5). Linked all CSS and JS files in index.html

![Test GIF](http://g.recordit.co/r3vIKlmdYc.gif)

