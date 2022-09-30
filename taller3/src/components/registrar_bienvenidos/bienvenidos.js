import './bienvenidos.css';
import image from './Hotelia_horizontal_blanco.svg';

function BienvenidoRegistrar() {
    return(
    <div id="bienvenido-registrar">
        <img src={image}/>
        <h2 class="hotelia">Eres más que bienvenido</h2>
        <h2 class="hotelia2">Un lugar en tu corazón</h2>
     </div> 
    );
}

export default BienvenidoRegistrar;