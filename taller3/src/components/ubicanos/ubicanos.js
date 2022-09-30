import './ubicanos.css';

const props=0;
const {
        iframeSource ='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.964412016966!2d-74.07746738568648!3d4.600397243801156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7147877c9%3A0x378b95e9cbda0740!2sCra.%208%20%2312a-42%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1659027279856!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    } = props;

function Ubicacion() {
    
    return(
        <section id="ubicanos">
        <h2 class="title-ubicanos">Ubícanos</h2>
       <div class="caja-ubicanos">
       <div class="image-ubicanos">
        
        <div className="Ubicacion" dangerouslySetInnerHTML={{__html: iframeSource}}>

        </div>

        </div>
        </div>
       <p class="addres-ubicacion">AVENIDA CARRERA 8. #12A-42. BOGOTA DC, COLOMBIA</p>
       <hr class="ubicacion-hr" noshade="" />
       <p class="contactar">+57 601 4567899</p>

        </section>

    );
}

export default Ubicacion;