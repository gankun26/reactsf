import  './produto.css'


export default function Produto(props) {

    function show_info(event) {
        const target = event.currentTarget;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility = "initial";
    }

    function hide_info(event) {
        const target = event.currentTarget;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility = "hidden";
    }

    return (
        <figure ClassName={props.categoria + "produto col-lg-3 col-md-4 col-sm-6 col-xs-12 mr-auto"} onMouseOver={show_info} onMouseOut={hide_info}>
            <img src={require (`./img/${props.imagem}`).default} alt="imagem de produtos" />
            <figcaption>
                <p ClassName="nome-prod">
                    {props.nome}
                </p>
                <p ClassName="precofinal-prod">
                    R$ {props.preco}
                </p>
            </figcaption>
        </figure>
    )
}


