
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentsComponent = (element) => {
    // console.log(process.env); // No podemos acceder a las variables de entorno de Vite
    console.log(import.meta.env); // De esta forma accedemos a las variables de entorno de Vite

    const html = `
        Dev: ${import.meta.env.DEV} <br/>
        Prod: ${import.meta.env.PROD} <br/>
        Key: ${import.meta.env.VITE_APY_KEY} <br/>
        URL: ${import.meta.env.VITE_BASE_URL} <br/>
    `;
    element.innerHTML = html;
}