import './form.css';
//IMAGENES
import hotolia_negro from './Hoteliahorizontalnegro.svg';

function Form () {
  return (
    <body id='Inicio-sesion'>
    <section id="formulario">
    <div class="img-formulario">
        <img src={hotolia_negro} id="img-formulario"/>
    </div>
    <div class="user-formulario">
        <i class="fa-solid fa-circle-user"></i>
    </div>
    <fieldset class="formulario">
        <form action="dashboard" method="get">
        <label for="usuario">Usuario</label>
        <input type="text" name="usario" id="usuario" class="formu"/><br/><br/>

        <label for="contrasena">Constraseña</label>
        <input type="password" name="contrasena" id="contrasena" class="formu"/><br/><br/>

        <button type="submit" class="boton-formu">Ingresar</button>
    </form>
    </fieldset>
    <div class="registrar-formu">
        <p class="registrate">¿No tienes una cuenta?</p>
        <a href="registrar" class="aqui">Registrate aquí</a>
    </div>
</section>
</body>
  );
}
export default Form;

