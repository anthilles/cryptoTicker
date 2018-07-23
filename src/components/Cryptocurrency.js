import React, { Component } from 'react';
import './Cryptocurrency.css';

// var poniżej - technologia "object destructuring" - przypisanie 7 nowych wartości do this.props.data
// przykład this.props.data.price_usd jest równe 100 to price_usd = 100
// data jest własnością zawierającą wszystkie dane, ewentualnie do przekazania komponentowi rodzicowi.
class Cryptocurrency extends Component {
    render() {
        var {
            id,
            name,
            symbol,
            rank,
            price_usd,
            percent_change_1h,
            percent_change_24h,
            percent_change_7d,
        } = this.props.data;
        return (
            <li className={"cryptocurrency " + id}>
                <p className="cryptocurrency-name">{name} ({symbol})</p>
                <h1>${ (+price_usd).toFixed(2) }</h1>
                <p>Miejsce w rankingu: <b>{rank}</b></p>
                <p>{percent_change_1h}% 1 godz</p>
                <p>{percent_change_24h}% 24 godz</p>
                <p>{percent_change_7d}% 7 dni</p>
                <p></p>
            </li>
        )
    }
}

// wyeksportowanie komponentu. Zaimportujemy go w Tickers.js
export default Cryptocurrency;