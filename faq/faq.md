**node info**
```
node -v
npm -v
```

**tworzenie projektu**
```
npm install -g create-react-app
create-react-app cryptocurrency-ticker-app
```

**OPIS**
* node_modules: All the packages that are installed that your app uses.
* public: All the files you can access directly from your browser like static assets.
* src: The source files for your React app.
* .gitignore: The file that tells git what to ignore.
* package.json: A file that contains various information about your React app.
* README.md: A file written in markdown that has important information.

**coSieTuDzieje**

ideą Reacta jest rozbicie interfejsu na mniejsze części zwane komponentami. Komponenty moją być niezależne i uruchomione wiele razy

W pliku index.js importujemy a potem mamy:

```javascript
ReactDOM.render(<App />, document.getElementById('root'));
```

Co znaczy mniej więcej "Hej, daj mi komponent App i wyrenderuj go z id "Root"

Następnie jak przejdziemy do index.html to znajdziemy tam
```html
<div id="root"></div>
```
i to tutaj React renderuje cały app

jak otworzymy app.js gdzie żyje komponent app to znajdziemy tam cały kod komponentu.

```javascript
 class App extends Component {
        render() {
            return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
            );
        }
    }
```

**AXIOS - integracja z API**
instalacja
```
npm install --save
```
następnie importujemy do naszego komponentu Tickers.js
```javascript
import axios from 'axios';
```
