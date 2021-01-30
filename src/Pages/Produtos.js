import { useState, useEffect } from 'react';
import Produto from '../components/Produto'
import { Container, Row } from "react-bootstrap"

export default function Produtos () {
    const [ produto, setProduto ] = useState([]);
    
    useEffect(async () => {
        const resposta = await fetch("http://localhost:4000")
        const dados = await resposta.json()
        setProduto(dados);
    }, []);

    return (
        <Container>
            <Row>
                {produto && produto.map(item => <Produto categoria={item.categoria} descricao={item.descricao} preco={item.preco} 
                imagem={item.imagem} />)}
            </Row>
        </Container>  
    )
}
