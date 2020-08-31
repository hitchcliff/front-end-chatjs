class InteractiveChatbox {
    constructor(a, b) {
        this.args = {
            button: a,
            chatbox: b
        }
        this.state = false; 
    }

    display() {
        const {button, chatbox} = this.args;
        
        button.addEventListener('click', () => this.toggleState(chatbox))
    }

    toggleState(chatbox) {
        this.state = !this.state;
        this.showOrHide(chatbox);
    }

    showOrHide(chatbox) {
        if(this.state) {
            chatbox.classList.add('chatbox--active')
        } else if (!this.state) {
            chatbox.classList.remove('chatbox--active')
        }
    }
}