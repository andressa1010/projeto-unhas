import React from "react";
import Menu from "../components/menu";


const galeriaUnhas=[
  {
    id: 1,
    name: "Unhas Gel",
    image:"/unhas-brancas-com-decoracao.webp"
  },
  {
    id: 2,
    name: "Unhas Fibra",
    image:"/unha-azul.jpg"
  },
  {
    id: 3,
    name: "Unhas Gel",
    image:"/unhas-brancas-com-decoracao.webp"
  },
  {
    id: 4,
    name: " Mão e Pé",
    image:"/unhas-pé-e-mão-mesma-cor-13.jpg"
  },
  {
    id: 5,
    name: " Mão e Pé",
    image:"/unhas-pe-maos.jpg"
  },
  {
    id: 6,
    name: "Mão e Pé",
    image:"/maoepe.jpg"
  },
  {
    id: 7,
    name: "Mão e Pé",
    image:"/unhas-pé-e-mão-cores-diferentes-8.jpg"
  },
  {
    id: 8,
    name: "Mão e Pé",
    image:"/unhas-maos-pes-vermelho.jpg"
  },
  {
    id: 9,
    name: "Mão e Pé",
    image:"/unhas-maos-pes-vermelho.jpg"
  },
]
 


const Galeria = () => {
  return (
    <>
      <Menu />
      <video
        className="estilo-video"
        src="/esmaltes.mp4"
        autoPlay
        muted
        loop
        alt="video esmaltes"
      ></video>
      <div className="mascara"></div>

      <header>
        <img src="/1.png" alt="imagem-logo"></img>
      </header>

      <div className="div-text-unhas">
        <h2 className="text-unhas">
          Unhas personalizadas é puro luxo em cada toque! Veja alguns trabalhos
          realizados
        </h2>
      </div>

        <div id="container-galeria">
           {
            galeriaUnhas.map((produto)=>(
              <div key={produto.id} className="galeria">
                <h2> {produto.name} </h2>
                <img className="img-unhas-manicure-pedicure"
                src={produto.image} alt={produto.name} ></img>
                </div>
            ))
           }
        </div>

        
      <div className="zap">
        <a href="https://www.whatsapp.com/?lang=pt_BR">
          <img
            className="img-zap"
            src="/whatsapp.png"
            alt="imagem whatsapp"
          ></img>
        </a>
      </div>

    </>
  );
};

export default Galeria;
