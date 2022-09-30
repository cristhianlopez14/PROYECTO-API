import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Info from "../../components/informacion/info";
import Feature from "../../components/features/features";
import Ubicacion from "../../components/ubicanos/ubicanos";
import Calificacion from "../../components/calificacion/calificacion";
import Footer from "../../components/footer/footer";

function Home () {
  return (
    <>
      <Navbar/>
      <Header/>
      <Info/>
      <Feature/>
      <Ubicacion/>
      <Calificacion />
      <Footer/>
    </>

    
  );
}
export default Home;

