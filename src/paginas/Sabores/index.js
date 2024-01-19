import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";
import "./style.css";

const sabores = () => (
  <div>
    <Topo />

    <main>
      <div className="container-baner">
        <h1>NOSSOS SABORES</h1>
      </div>
      <div className="container-pagina-sabores">
        <h2>SABORES DE SORVETE</h2>
        <div className="limitar-secao-sabores">
          <div className="card">
            <div className="container-img">
              <img src="/assets/sabor-pistache.png"></img>
            </div>
            <div className="container-texto-sabores">
              <span>Sorvete de Pistache</span>
              <p>Cremoso sorvete sabor pistache com pedacinho de sementes.</p>
            </div>
          </div>

          <div className="card">
            <div className="container-img">
              <img src="/assets/sabor-oreo.png"></img>
            </div>
            <div className="container-texto-sabores">
              <span>Sorvete de Oreo</span>
              <p>Delisioso sorvete sabor Oreo. Uma explosão de sabor.</p>
            </div>
          </div>

          <div className="card">
            <div className="container-img">
              <img src="/assets/sabor-cookies-avela.png"></img>
            </div>
            <div className="container-texto-sabores">
              <span>Sorvete de Cookeies & Avelã</span>
              <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
            </div>
          </div>

          <div className="card">
            <div className="container-img">
              <img src="/assets/sorbet-kiwi.png"></img>
            </div>
            <div className="container-texto-sabores">
              <span>Sorvete de kiwi</span>
              <p>
                Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="container-img">
              <img src="/assets/sorbet-morango.png"></img>
            </div>
            <div className="container-texto-sabores">
              <span>Sorvete de Morango</span>
              <p>Sorvete de morango gourmet. Tropical e saboroso.</p>
            </div>
          </div>

          <div className="card">
            <div className="container-img">
              <img src="/assets/sorbet-limao.png"></img>
            </div>
            <div className="container-texto-sabores">
              <span>Sorvete de limão Siciliano</span>
              <p>
                O incrível sorvete gourmet de limão siciliano vai te encantar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Rodape />
  </div>
);
export default sabores;
