//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotesArray = [{
    quote: "So many books, so little time.",
    person: "Frank Zappa"},

    {
        quote: "Be the change that you wish to see in the world.",
        person: "Mahatma Gandhi"
    },

    {
        quote:"In three words I can sum up everything I've learned about life: it goes on.",
        person: "Robert Frost"
    },

    {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        person: "J.K. Rowling, Harry Potter and the Goblet of Fire"
    },
    {
         quote: "If you tell the truth, you don't have to remember anything.",
         person: "Mark Twain"

    }

];

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotesArray.length);
    quote.innerText = quotesArray[random].quote;
    person.innerText = quotesArray[random].person;
})