import FormularioR from "../../components/FormRegistrar/form";
import BienvenidoRegistrar from "../../components/registrar_bienvenidos/bienvenidos";
import './registrar.css';
function Registrar() {
    return(
    <body class="caja-registrar">
        <section id="caja-registrar">
            <BienvenidoRegistrar/>
            <div id="formulario-registrar">
            <FormularioR/>
 
            </div>
        </section>
    </body>    
    );
}

export default Registrar;