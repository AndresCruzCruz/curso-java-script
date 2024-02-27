import html from './app.html?raw'; // Se coloca el ?raw para que el archivo html se importe como texto plano directamente

export const App = (elementId) => {
    (() => { // Funcion autoejecutable que se ejecuta cuando App() se llama
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    })();
}