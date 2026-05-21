class ChatBot extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 400px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }
                .chat-window {
                    height: 500px;
                    display: flex;
                    flex-direction: column;
                }
                .messages {
                    flex-grow: 1;
                    padding: 20px;
                    overflow-y: auto;
                    background-color: #f9f9f9;
                }
                .input-area {
                    display: flex;
                    border-top: 1px solid #ccc;
                }
                input {
                    flex-grow: 1;
                    border: none;
                    padding: 15px;
                    font-size: 16px;
                }
                button {
                    border: none;
                    background-color: var(--primary-color);
                    color: white;
                    padding: 15px 20px;
                    cursor: pointer;
                    font-size: 16px;
                }
                .message {
                    margin-bottom: 15px;
                    padding: 10px 15px;
                    border-radius: 20px;
                    max-width: 80%;
                    line-height: 1.5;
                }
                .user-message {
                    background-color: var(--primary-color);
                    color: white;
                    align-self: flex-end;
                    border-bottom-right-radius: 5px;
                }
                .bot-message {
                    background-color: #e9e9eb;
                    color: var(--dark-color);
                    align-self: flex-start;
                    border-bottom-left-radius: 5px;
                }
            </style>
            <div class="chat-window">
                <div class="messages">
                    <div class="message bot-message">Hello! I am the SPF E-Services chatbot. How can I help you today?</div>
                </div>
                <div class="input-area">
                    <input type="text" placeholder="Type your message...">
                    <button>Send</button>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        const input = this.shadowRoot.querySelector('input');
        const button = this.shadowRoot.querySelector('button');
        const messages = this.shadowRoot.querySelector('.messages');

        const eServices = [
            {
                name: 'Certificate of No Criminal Conviction',
                url: 'https://eservices.police.gov.sg/content/policehubhome/homepage/certificate-of-clearance-hub.html',
                keywords: ['criminal record', 'certificate', 'conviction', 'cncc'],
            },
            {
                name: 'Traffic Appeal',
                url: 'https://eservices.police.gov.sg/content/policehubhome/homepage/traffic-appeal-hub.html',
                keywords: ['traffic', 'fine', 'appeal', 'ticket'],
            },
            {
                name: 'Lost & Found Property',
                url: 'https://eservices.police.gov.sg/content/policehubhome/homepage/lost-and-found-property-hub.html',
                keywords: ['lost', 'found', 'property'],
            },
            {
                name: 'Police Report',
                url: 'https://eservices.police.gov.sg/content/policehubhome/homepage/police-report-hub.html',
                keywords: ['report', 'crime'],
            },
        ];

        button.addEventListener('click', () => {
            const userText = input.value.trim();
            if (userText) {
                this.addMessage(userText, 'user');
                this.handleUserInput(userText);
                input.value = '';
            }
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                button.click();
            }
        });
    }

    addMessage(text, sender) {
        const messages = this.shadowRoot.querySelector('.messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        messageElement.textContent = text;
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight;
    }

    handleUserInput(text) {
        const lowerCaseText = text.toLowerCase();
        const matchedService = this.eServices.find(service => 
            service.keywords.some(keyword => lowerCaseText.includes(keyword))
        );

        if (matchedService) {
            const response = `I found a matching e-service for you: <a href="${matchedService.url}" target="_blank">${matchedService.name}</a>`;
            this.addMessage(response, 'bot');
        } else {
            this.addMessage("I'm sorry, I couldn't find a matching e-service. Please try rephrasing your query.", 'bot');
        }
    }
}

customElements.define('chat-bot', ChatBot);
