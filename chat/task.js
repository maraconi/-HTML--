const chatWidgetSideText = document.querySelector('.chat-widget__side-text');
const chatWidgetInput = document.getElementById('chat-widget__input');

chatWidgetSideText.onclick = function() {
    const chatWidget = document.querySelector('.chat-widget');
    chatWidget.classList.add('chat-widget_active');
};

chatWidgetInput.onkeydown = function(e) {
    if (e.key === 'Enter') {
        const time = new Date();
        const messageCustomer = chatWidgetInput.value;
        const messageBot = [
            'Ничего не знаю',
            'Не пишите нам больше',
            'Все операторы сейчас заняты!',
            'Я не могу вам помочь',
            'До свидания!',
        ],
        index = Math.floor(Math.random() * messageBot.length);
        if (messageCustomer != '') {
            const messages = document.querySelector('.chat-widget__messages');
            messages.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
                    <div class="message__text">${messageCustomer}</div>
                </div>
                <div class="message">
                    <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
                    <div class="message__text">${messageBot[index]}</div>
                </div>`;
        }
        chatWidgetInput.value = '';
    };
};