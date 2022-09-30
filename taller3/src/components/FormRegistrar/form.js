import './form.css';
 
function FormularioR() {
    return(
        <form action="inicio">
            <h2 class="title-registro">Regístrate</h2>
            <div class="campos-formu">
                <div class="campo1-2">  
                    <div class="campo1">
                <label for="TipoDoc">Tipo Documento</label>
                <select name="" id="">
                    <option value="">Escoja una opción</option>
                    <option value="tarjeta">Tarjeta</option>
                    <option value="cedula">Cedula</option>
                </select>
              </div>
               <div class="campo1">
                <label for="nDocumento">Número de documento</label>
                <input type="number" name="nDocunento" id="nDocumento"/>
                </div>

                </div>

             <div class="campo1-2">
                <div class="campo1">
                    <label for="Nombre">Nombres</label>
                    <input type="text" name="Nombre" id="Nombre"/>
                </div>

                <div class="campo1">
                    <label for="apellidos">Apellidos</label>
                    <input type="text" name="apellidos" id="apellidos"/>
                </div>
            
            </div>

            <div class="campo1-2">
                <div class="campo1">
                    <label for="FechaNac">Fecha nacimiento</label>
                    <input type="date" name="FechaNac" id="FechaNac"/>                   
                </div>

                <div class="campo1">
                    <label for="genero">Género</label>
                    <div class="campo-genero">
                        <input type="circle" name="genero" id="mujer" class="check" /><h1>Mujer</h1> 
                        <input type="circle" name="genero" id="mujer" class="check" /> <h1>Hombre</h1> 
                        <input type="circle" name="genero" id="otro" class="check" />  <h1>Otro</h1>
                    </div>
                </div>

            </div>

            <div class="campo1-2">
                <div class="campo1">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email"/>    
                </div>
                <div class="campo1">
                    <label for="telefono">Teléfono de contacto</label>
                    <input type="number" name="telefono" id="telefono"/>                  
                </div>
            </div>

            <div class="campo1-2">
                <div class="campo1">
                    <label for="pais">País origen</label>
                    <input type="text" name="pais" id="pais"/>
                </div>
                <div class="campo1">
                    <label for="foto">Foto</label>
                    <input type="file" name="foto" id="foto"/>
                </div>
            </div>
                
            <div class="campo1-2">
                <div class="campo1">
                    <label for="contrasena">Contraseña</label>
                    <input type="password" name="contrasena" id="contrasena"/>
                </div>
                <div class="campo1">
                    <label for="contrasena">Confirmar Contraseña</label>
                    <input type="password" name="contrasena" id="contrasena"/>
                </div>
            </div>

            
                <div class="terminos">
                <div class="TerCon">
                    <input type="checkbox" name="terminos" id="terminos"/>
                    <a href="#Terminos">Acepto Terminos y Condiciones</a>
                </div>
            </div>

            <div class="modal" id="Terminos">
                <div class="contenido-modal">
                    <h2 class="title-modal">Términos y Condiciones</h2>
                    <p class="p-modal">Lore ipsum dolor sit amet consectetur adipisicing elit. Earum qui atque eum doloribus aliquid eos doloremque est quae officia, repellendus dolores maxime eligendi vitae natus aut, libero, deserunt tempora expedita.</p>
                    <p class="p-modal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, expedita delectus. Et, eveniet iusto enim quidem optio voluptates est voluptas repellendus hic, quam doloribus sequi quia tempore alias. Quibusdam, nulla!</p>
                    <a href="#" class="button">Aceptar</a>
                </div>

            </div>

            <div class="submit">
                <button type="submit" class="Ingresar">Ingresar</button>
            </div>

            </div>
             </form>
    );
}

export default FormularioR;
