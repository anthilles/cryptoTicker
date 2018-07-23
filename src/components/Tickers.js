import React, { Component } from 'react';
import axios from 'axios';
import Cryptocurrency from './Cryptocurrency';
import './Tickers.css';

class Tickers extends Component {

//funkcja constructor - wywoływana kiedy komponent jest tworzony i służy do budowania komponentu.
//właściwości mogą zostać przekazana do jakiegokolwek innego komponentu dlatego jest "props"
// każdy komponent ma swój stan (state) - podstawowe dane, które trzymają ścieżki
// w naszym wypadku tworzymy trzy krypto, które trzymają cenę 1 dolara każda.
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: "bitcoin",
                    name: "Bitcoin",
                    symbol: "BTC",
                    rank: "1",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0"
                },
                {
                    id: "ethereum",
                    name: "Ethereum",
                    symbol: "ETH",
                    rank: "1",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0"
                },
                {
                    id: "litecoin",
                    name: "Litecoin",
                    symbol: "LTC",
                    rank: "1",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0"
                },
                {
                    id: "Neo",
                    name: "neo",
                    symbol: "NEO",
                    rank: "1",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0"
                },
                {
                    id: "eos",
                    name: "EOS",
                    symbol: "EOS",
                    rank: "1",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0"
                },
                {
                    id: "Waves",
                    name: "waves",
                    symbol: "WAVES",
                    rank: "1",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0"
                },
                {
                    id: "BCH",
                    name: "Bitcoin Cash",
                    symbol: "BCH",
                    price_usd: "1",
                    rank: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0"
                }
            ]
        };
    }

// axios
// Get request na API, następnie przefiltrowanie odpowiedzi po wanted i zwrócenie tych, 
// które chcemy. Następnie ustawiamy state komponentu jako resultat filtrowania (data)
    feachCryptocurrencyData(){
        axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=100")
        .then(response => {
            var wanted = ["bitcoin","ethereum","litecoin","neo","eos","waves","bitcoin-cash"];
            var result = response.data.filter(currency => wanted.includes(currency.id));
            this.setState({ data: result});
        })
        .catch(err => console.log(err));
    }
// musimy wywołać funkcję feachCryptocurrencyData i to co 60s
// React ma już wbudowaną funkcję którą możemy wykorzystać.
    componentDidMount() {
        this.feachCryptocurrencyData();
        this.interval = setInterval(() => this.feachCryptocurrencyData(), 60*1000);
    }


// render zwraca JSX potrzebny do wyrenderowania komponentu
    render () {
// tickers zawiera listę wszystkich itemków (li) - każdej kryptowaluty.
// funkcja map jest używana aby iterować każdą kryptowalutę. tworząc elementy li
// zawierające id oraz cenę
        var tickers = this.state.data.map((currency) =>
// Odwołanie do cryptocurrency z Cryptocurrency.js
// iteracja idzie po array this.state.data i tworzy nowe Cryptocurrency komponenty dla każdego elementu
// Przekazuje wszystkie dane jako właściwość wywoływaną jako data
// Dzięki temu komponent dziecko może przekazać dane dla rodzica (this.props.data)
        <Cryptocurrency data={currency} key={currency.id} />
        );
// na koniec zwracamy div zawierający nasze ul z tickers oraz proste <p> z info
        return (
            <div className="tickers-container">
                <ul className="tickers">{tickers}</ul>
                <p>informacja aktualizowana co minutę w oparciu o coinmarketcap</p>
            </div>
        );
    }
}

// export wszystkiego jako Tickers. Teraz w App.js musimy to zaimportować
export default Tickers;