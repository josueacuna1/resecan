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
import {ItemsCharacters} from './ItemsCharacters'

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
            <div className={"skill-bx animate__animated animate__slideInUp"}>
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
                  <h5>FlamOseo</h5>
                  <ItemsCharacters title = 'FlamOseo' description= "Son esqueletos con ojos de fuego que atacan a los que osen entrar a la isla misteriosa, atacan en grupo y son pequeños, pero mortales si alguien se cruza en su camino, este enemigo posé un gran ataque debido a que hace 35 puntos de daño y tiene 300 puntos de vida, lo que lo convierte en un enemigo formidable." imgUrl={flamoseo} />
                </div>
                <div className="item">
                  <h5>Eirian</h5>
                  <ItemsCharacters title = 'Eirian 'description= "Eirian es el avatar masculino y principal en el juego. Suele llevar una camiseta amarilla con verde, así como una capa roja y pantalones verdes, su piel es de tono claro, además siempre lleva consigo su escudo y su espada que lo ayuda en cada una de sus misiones, adicional, la espada de Eirian tiene un ataque de 30 puntos hacia los enemigos y el una puntuación de vida de 100 puntos." imgUrl={eiran} />

                </div>
                <div className="item">
                  <h5>Igniclus</h5>
                  <ItemsCharacters title = 'Igniclus'  description= "Imponente criatura de color rojo con negro con escamas anaranjadas que reside en volcanes. Durante los enfrentamientos se dice puede lanzar fuego con su boca y destruir a cualquiera que se le ponga enfrente con un solo golpe, este malvado enemigo y jefe final tiene 50 puntos de daño y representa un reto constante, pues posee 1000 puntos de vida." imgUrl={igniclus} />

                </div>
                <div className="item">
                  <h5>RagFire</h5>
                  <ItemsCharacters title = 'RagFire' description= "Es un vikingo que fue exiliado por su pueblo, furioso en busca de venganza, deambula por la isla del misterio, esperando vengarse de su tripulación y de cualquier criatura que se le acerque, este enemigo poderoso de la isla, tiene un daño de ataque de 30 puntos y una vida de 100 puntos." imgUrl={ragFire} />
                </div>
                <div className="item">
                  <h5>Perritos</h5>
                  <ItemsCharacters title = 'Perritos' description= "Son los habitantes más queridos de la aldea, los cuales fueron raptados por el Igniclus." imgUrl={perritos} />
                </div>
                <div className="item">
                  <h5>TorSpike</h5>
                  <ItemsCharacters title = 'TorSpike' description= "Es una criatura de color naranja y azul la cual deambula por los frondosos bosques de Althoria, donde le gusta dañar a todas las criaturas que estén en su camino, adicional pose una puntuación de vida de 100 puntos y su ataque es uno de los más bajos con tan solo 10 puntos de daño." imgUrl={torspik} />
                </div>
                <div className="item">
                  <h5>LavaFlares</h5>
                  <ItemsCharacters title = 'LavaFlares'  description= "Es una criatura de lava de color rojizo que nace en la tierra de Volcania, es un mensajero, ya que deambula por muchos lados, pero le encanta estar en el bosque generando estragos a su paso, adicional pose una puntuación de vida de 100 puntos y su ataque junto con los TorSpike´s es de tan solo 10 puntos de daño (pero no te confíes, es letal)." imgUrl={lavaflares} />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
