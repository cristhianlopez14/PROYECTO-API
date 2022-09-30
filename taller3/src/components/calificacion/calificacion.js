import './calificacion.css';
import icon from './icon.webp';
function Calificacion() {
    return(
        <section id="calificacion">
        <h2 class="title-calificacion">Nuestros usuarios dicen...</h2>

        <div class="caja-card">

        <div class="card-calificacion" >
                <div class="usuario">
                    <img src={icon}/>
                    <h1>Cristhian López</h1>
                </div>
                <div class="calificacion">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>  
                <div class="card-descripcion">                            
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur 
                    placeat ducimus sequi laboriosam velit accusamus praesentium harum animi, 
                    labore temporibus iusto beatae.</p>
                </div>
        </div>

        <div class="card-calificacion" >
                <div class="usuario">
                    <img src={icon}/>
                    <h1>Cristhian López</h1>
                </div>
                <div class="calificacion">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>  
                <div class="card-descripcion">                            
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur 
                    placeat ducimus sequi laboriosam velit accusamus praesentium harum animi, 
                    labore temporibus iusto beatae.</p>
                </div>
        </div>

        <div class="card-calificacion" >
                <div class="usuario">
                    <img src={icon}/>
                    <h1>Cristhian López</h1>
                </div>
                <div class="calificacion">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>  
                <div class="card-descripcion">                            
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur 
                    placeat ducimus sequi laboriosam velit accusamus praesentium harum animi, 
                    labore temporibus iusto beatae.</p>
                </div>
        </div>

        </div>


        <div class="carruselOp">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active"> 

                <div id="op" class="d-block w-100">
                    <div class="usuario">
                        <img src={icon}/>
                        <h1>Cristhian López</h1>
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>  
                    
                    <div class="descripcion">                            
                    <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                        Elit quis enim ultricies ullamcorper.
                        Nunc aenean auctor vel diam dictum.</p>
                    </div>
                </div>
              </div>
    
              <div class="carousel-item">
                 <div id="op"  class="d-block w-100">
                    <div class="usuario">
                       <img src={icon}/>
                        <h1>Cristhian López</h1>
                       
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="descripcion">                            
                        <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.
                            Nunc aenean auctor vel diam dictum.</p>
                    </div>
                </div>
              </div>
              <div class="carousel-item">
                <div id="op"  class="d-block w-100">
                    <div class="usuario">
                        <img src={icon}/> 
                        <h1>Cristhian López</h1>
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="descripcion">                            
                        <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.Elit quis enim 
                            ultricies ullamcorper. Nunc aenean auctor vel diam dictum.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>


    </section>
    
    );
}

export default Calificacion; 