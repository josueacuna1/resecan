/* eslint-disable jsx-a11y/img-redundant-alt */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//-- Img personajes--\\
import eiran from "../assets/img/Personajes/Eiran.png";
import igniclus from "../assets/img/Personajes/igniclus.png";
import flamoseo from "../assets/img/Personajes/Flamoseo.png";
import ragFire from "../assets/img/Personajes/RagFire.png";
import perritos from "../assets/img/Personajes/perro.png";
import torspik from "../assets/img/Personajes/torSpik.png";
import lavaflares from "../assets/img/Personajes/lavaFlares.png";

export const Characters = () => {
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: {
        max: 4000,
        min: 3000,
      },
      items: 4,
    },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 800,
      },
      items: 2,
    },
    mobile: {
      breakpoint: {
        max: 800,
        min: 0,
      },
      items: 1,
    },
  };

  return (
    <section className="skill" id="personajes" style={{marginTop: "14%"}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Personajes</h2>
              <p style={{fontSize:'1.3em', color:'withe'}}>
                Los personajes forman un elenco diverso que contribuye de manera
                única a la trama épica y llena de aventuras. Eirian, el valiente
                explorador y protagonista, lidera la búsqueda para recuperar a
                los perritos robados, mostrando determinación y valentía. Los
                leales compañeros caninos añaden un toque emotivo a la historia.
                Los enemigos de cada región añaden capas de misterio y desafíos
                adicionales. Cada personaje, desde aliados hasta enemigos,
                aporta profundidad a la narrativa mientras Eirian se enfrenta a
                peligros y forja vínculos a lo largo de su inolvidable odisea.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>Eiran</h5>
                  <img src={eiran} alt="Image" />
                </div>
                <div className="item">
                  <h5>Igniclus</h5>
                  <img src={igniclus} alt="Image" />
                </div>
                <div className="item">
                  <h5>FlamOseo</h5>
                  <img src={flamoseo} alt="Image" />
                </div>
                <div className="item">
                  <h5>RagFire</h5>
                  <img src={ragFire} alt="Image" />
                </div>
                <div className="item">
                  <h5>Perritos</h5>
                  <img src={perritos} alt="Image" />
                </div>
                <div className="item">
                  <h5>TorSpike</h5>
                  <img src={torspik} alt="Image" />
                </div>
                <div className="item">
                  <h5>LavaFlares</h5>
                  <img src={lavaflares} alt="Image" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
