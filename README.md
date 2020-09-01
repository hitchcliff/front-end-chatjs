# Chat.js Front-end Starter

### 1). HTML Minimum setup: 

``` 
<div class="chatbox">
    <div class="chatbox__support">
        <div class="chatbox__header">
            Chat support!
        </div>
        <div class="messages">
            <div>
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
const icons = {
    isClicked: 'Clicked',
    isNotClicked: 'Not Clicked" />'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);
``` 

### 5). Linked all CSS and JS files in index.html
### Sample output after setting up
![Sample Setup](http://g.recordit.co/r3vIKlmdYc.gif)

# Example Customization
![Example Outout](http://g.recordit.co/wvNlpakfKl.gif)
