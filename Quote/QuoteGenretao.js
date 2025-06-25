const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream it. Wish it. Do it.",
    "Great things never come from comfort zones.",
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Sometimes later becomes never. Do it now.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "The key to success is to focus on goals, not obstacles.",
    "Doubt kills more dreams than failure ever will.",
    "Work hard in silence, let your success be the noise. – Frank Ocean",
    "Believe in yourself and all that you are.",
    "Act as if what you do makes a difference. It does. – William James"
];

function changeQuote(){
const quote = document.getElementById('para2')
const rd = Math.floor(Math.random() * quotes.length);
quote.innerHTML = quotes[rd]
}

setInterval(changeQuote,5000)