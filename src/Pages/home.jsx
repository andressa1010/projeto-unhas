import React from "react";
import Menu from "../components/menu";

const Home = () => {
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

      <div className="container-servicos">
        <img className="img-unhas" src="/unhas03.webp" alt="imagem-unhas"></img>
        <p className="text-servicos">
          Alongamento de unhas em acrílico, o toque de auto cuidado e estilo
          prolongado Unhas feitas é sinônimo de autoestima renovada. Por isso,
          desejamos tudo de bom, inclusive unhas feitas!
        </p>
      </div>

      <div className="container-main">
        <p className="text-main">
          Após tanto esforço para deixar crescer de forma saudável, ainda sim,
          quebram fáceis? Após fazer qualquer procedimento com água seu esmalte
          sai de suas unhas? Você não consegue passar muito tempo com esmalte,
          pois ele fica “descascando”? Como solução para tudo isso a unha de
          acrílico entrou no mercado, e com certeza você já ouviu falar dessa
          técnica. A nova tendência em unhas de acrílico só tem vantagens! É a
          melhor opção para quem tem unhas fracas, não estraga a unha natural, o
          esmalte dura cerca de 15 a 30 dias, a unha fica bonita e natural, são
          resistentes e a manutenção é simples.
        </p>
        <img
          className="unhas-main"
          src="/unhas-em-gel-decoradas-6.webp"
          alt="imagem-unhas"
        ></img>
      </div>

      <div className="h2-sessao">
        <h2 className="sessao">
          Com unhas feitas, a felicidade e a autoestima é garantida! Conheça
          nossas técnicas.
        </h2>
      </div>

      <div className="container-unhas">
        <div className="content-unhas">
          <h2>Unhas de fibra de vidro</h2>
          <img
            className="unha-azul"
            src="/unha-decoracao01.png"
            alt="imagem unhas"
          ></img>
        </div>
        <div className="content-unhas">
          <h2>Unhas de fibra de vidro</h2>
          <img
            className="unha-azul"
            src="/unha-decoracao02.png"
            alt="imagem unhas"
          ></img>
        </div>
        <div className="content-unhas">
          <h2>Unhas de fibra de vidro</h2>
          <img
            className="unha-rosa"
            src="/unha-decoracao03.jpg"
            alt="imagem unhas"
          ></img>
        </div>
        <div className="content-unhas">
          <h2>Unhas de fibra de vidro</h2>
          <img
            className="unha-azul"
            src="/unhas02.webp"
            alt="imagem unhas"
          ></img>
        </div>
        <div className="content-unhas">
          <h2>Unhas de fibra de vidro</h2>
          <img
            className="unha-branca"
            src="/unhas-em-gel-decoradas-3-1.webp"
            alt="imagem unhas"
          ></img>
        </div>
        <div className="content-unhas">
          <h2>Unhas de fibra de vidro</h2>
          <img
            className="unha-azul-branca"
            src="/unhas-em-gel-decoradas-21-1.webp"
            alt="imagem unhas"
          ></img>
        </div>
      </div>

      <div className="text-p">
        <p>
          Trabalhamos apenas com produtos de alta qualidade, selecionados para
          proporcionar resultados que superam as expectativas. Cada pincelada,
          cada camada é uma celebração do luxo, projetada para criar unhas
          deslumbrantes e duradouras que realmente impressionam.
        </p>
        <img className="img-servico"
         src="/cores-que-trazem-riqueza.jpg" alt="imagem"></img>
      </div>

      <div className="container-banner">

        <div className="content-banner">
          <img className="img-banner"
          src="/Unhas em gel manicure benefícios rose gold story.png" alt="imagem banner"></img>
        </div>
        <div className="content-banner">
          <img className="img-banner"
          src="/Bom dia manicure unhas rose instagram story.png" alt="imagem banner"></img>
        </div>
        <div className="content-banner">
          <img className="img-banner"
          src="/Story manicure nail designer frase sobre unhas moderno rosa.png" alt="imagem banner"></img>
        </div>

      </div>

      <div className="div-h2">
        <h2>Conheça nosso espaço</h2>
      </div>

      <div className="container-espaco">
        <p>
          Bem-vindo ao Studio , o seu destino de confiança para uma experiência
          excepcional de cuidados pessoais. Não estamos apenas redefinindo a
          beleza; estamos reinventando sua experiência de cuidados pessoais.
          Aqui está o porquê escolher-nos é uma decisão que fará toda a
          diferença: Perfeição em cada detalhe do design da sua unha Compromisso
          com a saúde das suas unhas Arte e expertise em sintonia Experiência
          que vai além do espelho; Seu brilho, nossa missão.
        </p>
        <img className="img-espaco" src="/espaco.jpg" alt="imagem loja"></img>
      </div>

      <div className="zap">
       <a 
        href="https://www.whatsapp.com/?lang=pt_BR">
       <img className="img-zap"
         src="/whatsapp.png" alt="imagem whatsapp"></img>
       </a>
      </div>
    </>
  );
};

export default Home;
