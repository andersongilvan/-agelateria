import './style.css'
import { Link } from 'react-router-dom';


const Topo = () => (
    <header>

        <div className='limitar-secao'>
            
            <img src='/assets/logo.png'></img>
            
            <nav>
                <Link className='opcao-home' to={'/'}>Home</Link>
                <Link className='opcao-sabores' to={'/sabores'}>Sabores</Link>
                <Link className='opcao-sobre' to={'/sobre'}>Sobre</Link>
            </nav>
        </div>

    </header>
)
export default Topo;