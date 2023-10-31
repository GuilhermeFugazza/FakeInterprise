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

footer {
    background-color: #fff;
    color: #494454;
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
                        <li className="home"><Link to="/"> <a>Home</a></Link></li>
                        <li className="products"><Link to="/products">Products</Link></li>
                        <li className="contact"><Link to="/contact">Contact</Link></li>
                        <li className="about"><Link to="/about"><a>About</a></Link></li>
                    </ul>
                </nav>
            </header>

            <section id="products">
                PRODUTINHOS
            </section>

            <footer>
                <p>&copy; 2023 Corretora de Imóveis</p>
            </footer>
        </body>
    </Container>
</>