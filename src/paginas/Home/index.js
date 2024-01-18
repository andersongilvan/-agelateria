import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";
import "./style.css";

const Home = () => (
  <div>
    <Topo />

    <main>
      <section className="secao-baner">
        
        <div className="titulo">
          <h1>@SORVETEARTESANAL</h1>
        </div>
      </section>
        
        <section className="secao-sabores">
          <div className="container-img">
            <img src="assets/banner-sabores.jpg"></img>
          </div>

          <div className="container-texto">
            <h2>NOSSOS SABORES</h2>
            <span>Novos e deliciosos!</span>
            <p>
              Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
              gelateria todoes os nossos produtos são naturais, à base de frutas
              e sem nenhum conservante! também temos opções sem lactose e sem
              açúcar. Venha conhecer e perceber que tem como o sorvete ser
              delicioso e saudável ao mesmo tempo.
            </p>
          </div>
        </section>

        <section className="secao-eventos">
          <div className="container-texto">
                <h2>NOSSOS EVENTOS</h2>
                <span>Delisias com sorvete!</span>
                <p>
                Mais de que uma sorveteria, uma extensão da sua casa! Estamos aqui
                prontinhos para te atender e oferecer os melhores eventos com os
                melhores sorvetes da sua vida! Venha nos conhecer e passar um
                tempo aqui com a gente.
             </p>
          </div>

          <div className="container-img">
            <img src="assets/eventos-image.jpg"></img>
          </div>
        </section>

        <section className="secao-sobre">
          <div className="container-img">
            <img src="assets/sobre-image.jpg"></img>
          </div>

          <div className="container-texto">
            <h2>SOBRE NÓS</h2>
            <span>Alegria em cada casqionha!</span>
            <p>
              Venha tomar o melhor sorvete da região aqui com a gente! Nós
              estamos há anos no mercado produzindo o que tem de melhor para
              nossos clientes e você não pode ficar fora dessa. Venha nos fazer
              uma visita e aproveite o melhor atendimento e o melhor sorvete da
              cidade.
            </p>
            </div>
        </section>
      
        <Rodape />
    </main>
  </div>
);
export default Home;
