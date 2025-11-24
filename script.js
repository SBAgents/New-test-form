// Пример обработки webhook от Telegram бота
app.post('/webhook', (req, res) => {
    const { callback_query } = req.body;
    if (callback_query) {
        const [action, type, requestId] = callback_query.data.split('_');
        
        if (action === 'approve') {
            // Вызвать window.PaymentSystem.approveRequest(requestId)
        } else if (action === 'decline') {
            // Вызвать window.PaymentSystem.declineRequest(requestId)
        }
    }
});
