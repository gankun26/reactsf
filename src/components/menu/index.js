import {Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import  './Menu.css';

 function BaseMenu(props) {
     const {Location} = props
    return(
        <Navbar className="navbar-dark" bg="primary" expand="lg" fixed="top">
            <Navbar.Brand>
                FullStack Eletro
            </Navbar.Brand> 

            <Navbar.Toggle aria-controls="item menu" />

            <Navbar.Collapse id="item menu">
                <Nav activeKey={Location} className="ml-auto mr-3">
                    <Nav.Item>
                            <Nav.Link as={Link}  href="/pagina_inicial" to="/pagina_inicial">Pagina Inicial</Nav.Link>
                    </Nav.Item>
                   
                    <Nav.Item>
                            <Nav.Link as={Link}   href="/" to="/">Produtos</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                            <Nav.Link as={Link}   href="/contatos" to="/contatos">Contatos</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                            <Nav.Link as={Link}   href="/pedidos" to="/pedidos">Pedidos</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                            <Nav.Link as={Link}   href="/lojas" to="/lojas">Lojas</Nav.Link>
                    </Nav.Item>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu);

export default Menu