import { styled } from "styled-components";
import { Link } from "react-router-dom"

const Container = styled.div`
    }
    body, h1, h2, p, ul, li {
        margin: 0;
        padding: 0;
    }
    
    /* Estilos gerais */
    body {
        font-family: Arial, sans-serif;
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
        margin-right: 2vw;
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
    
    footer {
        background-color: #fff;
        color: #6c5ce7;
        text-align: center;
        padding: 10px 0;
        box-shadow: 0px -5px 5px 0px #dfe6e9
    }
`

export default () => <>
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

            <section id="contact">
                CONTATINHOS
            </section>

            <footer>
                <p>&copy; 2023 Corretora de Imóveis</p>
            </footer>
        </body>
    </Container>
</>