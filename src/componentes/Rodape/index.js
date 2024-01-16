import "./style.css";

const Rodape = () => (
  <footer>
    <div className="limitar-largura">

    <img src="assets/logo.png"></img>
    <div className="container">
      <h3>ENDEREÇO</h3>
      <p>Av. Bernadini de Campo, 98 São Paulo, SP 12345-678</p>
    </div>

    <div className="container">
      <h3>CONTATO</h3>
      <p>info@meusite.com tel: (11) 3456-7890</p>
    </div>

    <div className="container">
      <h3>HORÁRIOS</h3>
      <p>ABERTO TODOS OS DIAS 10:00 - 22:00</p>
    </div>
    
    </div>
    <div className="container-creditos">
      <p>
        Gelateria. Orgulhosamente desenvolvido por ANDERSON THECH EMAIL:
        techandersongilvan@gmail.com
      </p>
      <p>A conduta é quem faz o HOMEN</p>
    </div>
  </footer>
);
export default Rodape;
