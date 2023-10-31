import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import styles from "./home.module.css"
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Container = styled.div`
    }
    body, h1, h2, p, ul, li {
        margin: 0;
        padding: 0;
    }
    
    /* Estilos gerais */
    body {
        font-family: Arial, sans-serif;
        height: 100%;
    }
    
    header {
        background-color: #fff;
        color: #000;
        text-align: right;
        padding: 20px 60px;
        box-shadow: 0px 5px 5px #dfe6e9;
    }
    
    nav ul {
        list-style: none;
    }
    
    nav ul li {
        display: inline;
        margin-right: 20px;
    }
    
    nav ul li:last-child {
        margin-right: 0;
    }
    
    nav a {
        text-decoration: none;
        color: #6c5ce7;
        font-weight: bold;
        font-size: 18px;
    }
    
    section {
        padding: 50px;
        height: 74.84vh;
    }

    .divCoin {
        width: 100vw;
        border-radius: 5px;
        border: solid 0px 1px 0px 0px #dfe6e9;
        box-shadow: 0px 5px 5px 0px #dfe6e9
    }
    
    footer {
        background-color: #fff;
        color: #6c5ce7;
        text-align: center;
        padding: 10px 0;
        box-shadow: 0px -5px 5px 0px #dfe6e9
    }
`




//https://sujeitoprogramador.com/api-cripto/?key=cc333fdc79bbecb8

interface CoinProps {
    name: string;
    delta_24h: string;
    price: string;
    symbol: string;
    volume_24h: string;
    market_cap: string;
    formatedPrice: string;
    formatedMarket: string;
}


export default function Homepage() {

    const [coins, setCoins] = useState<CoinProps[]>([])
    const [inputValue, setInputValue] = useState("")
    useEffect(() => {
        async function getData() {
            fetch('https://sujeitoprogramador.com/api-cripto/?key=cc333fdc79bbecb8&pref=BRL')
                .then(response => response.json())
                .then((data) => {
                    let coinsData = data.coins.slice(0, 15);

                    let price = Intl.NumberFormat("pt-BR", {

                        style: "currency",
                        currency: "BRL"
                    })
                    const FormatResult = coinsData.map((item) => {
                        const formated = {
                            ...item,
                            formatedPrice: price.format(Number(item.price)),
                            formatedMarket: price.format(Number(item.market_cap))
                        }
                        return formated;
                    })
                    setCoins(FormatResult);
                })
        }

        getData();
    }, [])



    return (
        <Container>
            <body>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>
                </header>

                <main className={styles.container}>
                    <form className={styles.form}>
                        <div className="divCoin">
                            <input
                                placeholder="Digite o simbolo da moeda: BTC..."
                                value={inputValue}
                                onChange={ (e) => setInputValue(e.target.value)}
                            />
                        </div>
                        <button type="submit">
                            <HiMiniMagnifyingGlass size={30} color="#fff"/>
                        </button>

                    </form>

                    <table>

                        <thead>
                            <tr>

                                <th scope="col">Moedas</th>
                                <th scope="col">Valor Mercado</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Volume</th>

                            </tr>

                        </thead>

                        <tbody id="tbody">
                            {coins.map(coin => (
                                <tr key={coin.name} className={styles.tr}>
                                    <td className={styles.tdLabel} data-label="Moeda">
                                        <Link className={styles.link} to="/detail/btc">
                                            <span>{coin.name}</span> | {coin.symbol}
                                        </Link>
                                    </td>
                                    <td className={styles.tdLabel} data-label="Mercado">
                                        {coin.formatedMarket}
                                    </td>
                                    <td className={styles.tdLabel} data-label="Preço">
                                        {coin.formatedPrice}
                                    </td>
                                    <td className={Number(coin?.delta_24h) >= 0 ? styles.tdProfit : styles.tdLoss} data-label="delta_24h">
                                        <span> {coin.delta_24h}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>


                </main>

                <footer>
                    <p>&copy; 2023 Corretora de Imóveis</p>
                </footer>
            </body>
        </Container>
    )
}