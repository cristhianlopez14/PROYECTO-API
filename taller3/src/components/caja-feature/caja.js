import "./caja.css";
function CajaFeature({text,background, icon}) {
    return(
        <article className={background? "feature feature-blue":"feature feature-black"}>
            <i className={icon}></i>
            <p>{text}</p>
        </article>
    )
}
export default CajaFeature;
 