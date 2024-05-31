
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {
    console.log('generatorFunctionsComponent');

    // const myGenerator = myfirstGeneratorFunction();

    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());

    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click Me';
    element.append(button);

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${value}`;
    }

    
    button.addEventListener('click', (event) => renderButton() );
}


function* idGenerator() {
    let currentId = 0;
    while (true) {
        yield ++currentId; // se pone el ++ antes para que primero incremente y luego retorne el valor
    }
}



function* myfirstGeneratorFunction() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return 'No hay valores';
    yield 'Ya no puedo hacer nada';
}