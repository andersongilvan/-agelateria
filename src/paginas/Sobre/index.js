import Topo from '../../componentes/Topo'
import Rodape from '../../componentes/Rodape'
import './style.css'

const Sobre = () => (
    <div>

        <Topo />

       <div className='secao-pagina-sobre'>
        <div className='baner-pagina-sobre'>
        
            <h1>A GELATERIA</h1>
        

        </div>
        <div className='box-texto'>
            <h2>Sobre Nós</h2>
            <p>
            Bem-vindo à GELATERIA, a sorveteria que começou a adoçar vidas em 2000! Há mais de duas décadas, temos oferecido uma variedade de sabores deliciosos, desde os clássicos até criações ousadas como maracujá com gengibre.

Na GELATERIA, não servimos apenas sorvetes; servimos sorrisos em casquinhas e potinhos! Criamos um ambiente descontraído e acolhedor, onde cada mordida é uma viagem ao passado e o presente é sempre doce. Aqui, celebramos aniversários, conquistas e risadas, transformando clientes em membros da nossa família congelada.

Venha se deliciar em um lugar onde a felicidade é servida em porções generosas! 🍦✨
            </p>
        </div>
        <div className='box-duas-imagens'>
            <img src=''></img>
            <img src=''></img>
        </div>
       </div>

        <Rodape />

    </div>
)
export default Sobre;