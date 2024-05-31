/**
 * @returns {Object} Quote information
 */
const fetchQuote = async() => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    console.log(data);
    return data[0];
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async(element) => {
    document.querySelector('#app-title').innerHTML = 'Breaking Bad APP';
    element.innerHTML = 'Loading...';
    const quote = await fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (quoteObject) => {
        quoteLabel.innerHTML = quoteObject.quote;
        authorLabel.innerHTML = quoteObject.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }

    fetchQuote()
        .then(renderQuote);
        // .then( data => renderQuote(data)); // Cuando el nombre del parámetro es el mismo que el nombre de la propiedad, se puede simplificar

    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote(quote);
    });

    
}