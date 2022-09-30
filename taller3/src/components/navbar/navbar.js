import './navbar.css'
import image from './Hotelia horizontal blanco.svg'
function Navbar() { 
  return (
    <nav>
        <div class="logo">
            <img src={image}/>
            <button id="button-menu" class="button-menu " >
            <i class="fa-solid fa-bars" ></i>
            </button>
        </div>
        <div class="menu menuopen" id="menu">
          <a href="Index.html" class="item">Inicio</a>
          <a href="Ubicanos.html" class="item">Ubícanos</a>
          <a href="Opiniones.html" class="item">Opiniones</a>
          <hr class="menu-hr" noshade=""/>
          <a href="inicio" class="item">
          <button class="navbar-button">
          <i class='fa-solid fa-user'>
         </i>Iniciar Sesión</button></a>
        </div>
    </nav> 
  );
}

export default Navbar;
