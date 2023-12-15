var quotes = [
    {
        quote: '“Be yourself; everyone else is already taken.”',
        writer: '― Oscar Wilde',
    },
    {
        quote: '“So many books, so little time.”',
        writer: '― Frank Zappa',
    },
    {
        quote: '“A room without books is like a body without a soul.”',
        writer: '― Marcus Tullius Cicero',
    },
    {
        quote: '“You only live once, but if you do it right, once is enough.”',
        writer: '― Mae West',
    },
    {
        quote: '“Be the change that you wish to see in the world.”',
        writer: '― Mahatma Gandhi',
    },
    {
        quote: '“If you tell the truth, you dont have to remember anything.”',
        writer: '― Mark Twain',
    },
    {
        quote: '“A friend is someone who knows all about you and still loves you.”',
        writer: '― Elbert Hubbard',
    },
    {
        quote: '“To live is the rarest thing in the world. Most people exist, that is all.”',
        writer: '― Oscar Wilde',
    },
    {
        quote: '“Without music, life would be a mistake.”',
        writer: '― Friedrich Nietzsche, Twilight of the Idols',
    },
    {
        quote: '“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”',
        writer: '― C.S. Lewis, The Four Loves',
    },
    {
        quote: '“If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals.”',
        writer: '― J.K. Rowling, Harry Potter and the Goblet of Fire',
    },
    {
        quote: '“You know yourae in love when you cant fall asleep because reality is finally better than your dreams.”',
        writer: '― Dr. Seuss',
    },
    {
        quote: '“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.”',
        writer: '― Bernard M. Baruch',
    },
]

let btn = document.getElementById("Qbtn");
let quote = document.getElementById("quote");
let writer = document.getElementById("writer");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
})