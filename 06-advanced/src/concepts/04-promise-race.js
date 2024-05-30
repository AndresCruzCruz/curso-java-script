
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) => {
    const renderValue = (value) => {
        element.innerHTML = value;
    }

    element.innerHTML = 'Loading...';

    Promise.race([
        slowPromise,
        mediumPromise,
        fastPromise,
        mediumPromise,
        fastPromise,
        mediumPromise,
        mediumPromise,
        slowPromise
    ]).then( value => {
        renderValue(value);
    });
}

const slowPromise = new Promise( resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
});

const mediumPromise = new Promise( resolve => {
    setTimeout(() => {
        resolve('MEdium Promise');
    }, 1500);
});

const fastPromise = new Promise( resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000);
});