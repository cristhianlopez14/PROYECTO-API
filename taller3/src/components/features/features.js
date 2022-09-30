import './features.css';
import CajaFeature from '../caja-feature/caja';
function Feature() {

    return(
        <section id="features">
        <h2 class="features-title">Razones por las que disfrutarás quedarte con nosotros</h2>
        <div class="features-description">

        <CajaFeature 
        text='Lorem ipsum dolor'
        background={true}
        icon='fa-solid fa-bell-concierge' />
        
        <CajaFeature
        text='Lorem ipsum dolor'
        background={false}
        icon='fa-solid fa-bed' />

        <CajaFeature
        text='Lorem ipsum dolor'
        background={true}
        icon='fa-solid fa-wifi' />

        <CajaFeature
        text='Lorem ipsum dolor'
        background={false}
        icon='fa-solid fa-dumbbell' />

        </div>
    </section>
    );
    
}

export default Feature;