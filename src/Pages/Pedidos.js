import {useState} from 'react';
import {Form, Button, Row} from 'react-bootstrap';

export default function Pedidos() {

  const[form, setForm] = useState({
      nome: " ",
      endereco: " ",
      fone: " ",
      valor: " ",
      quantidade: " ",
      preco_final: " "

});

  const controleMudanca =  (evento) => {
      console.log(evento.target.value)
      console.log(form)
      setForm({
          ...form,
          [evento.target.id]: evento.target.value
      })
      console.log(form);
  }

  const controleEnvio = (evento) => { 
      evento.preventDefault();
      console.log("submit")
      const preco_final = parseFloat(form.valor) * parseFloat(form.quantidade);
      console.log(preco_final);
      document.getElementById("preco_final").value = `R$ ${preco_final}`;
  }

    return(
        <Row>
            <div className="col-lg-6 col-md-6 mx-auto">
                <Form onSubmit={controleEnvio}>
                    <h4>Fazer pedidos</h4>

                    <Form.Group>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="nome" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Endereço:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="endereco" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Fone:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="fone" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Valor Unitário:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="valor" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="quantidade" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Preço Final:</Form.Label>
                        <Form.Control  disabled type="text" id="preco_final" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>

                </Form>
            </div>
        </Row>
    );
}

