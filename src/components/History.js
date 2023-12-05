import { Container, Row, Col } from "react-bootstrap";
import libro_vsl from "../assets/img/Visuales/libro-png.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const History = () => {
  return (
    <section className="contact" id="historia">
      <Container style={{marginTop:"5%"}}>
        <Row className="align-items-center">
        <h2 style={{textAlign:"center"}} >Historia</h2>
          <Col size={8} md={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={libro_vsl}
                  alt="El valle de los ladridos"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={8}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                  style={{
                    fontSize:'1.4em'
                  }}
                >
                  <p>
                    Había una vez un hombre valiente llamado Eirian, un
                    intrépido explorador que se embarcó en una aventura épica a
                    través de tres distintas regiones en busca de losladridos
                    perdidos, ya que un ser malévolo conocido como Igniclus, el
                    monstruo de lava, los había robado a todos de la apacible
                    aldea del Valle de los Ladridos.
                  </p>
                  <p>
                    El juego comenzaba en la región de Althoria, una tierra de
                    vastos bosques, montañas y ríos, donde los aldeanos de la
                    villa “Valle de los Ladridos” vivían tranquilos. Eirian
                    partió desde su pequeña cabaña en el bosque con una mochila
                    llena de provisiones y su espada mágica. A lo largo de
                    Althoria, enfrentó a las peligrosas criaturas conocidas como
                    TorSpikes, creaturas puntiagudas escondidas en los bosques,
                    y a los imponentes LavaFlares gotas de lava muy letales que
                    protegían el camino hacia la siguiente región,
                    obstaculizando cada intento de rescate.
                  </p>
                  <p>
                    La segunda región era la Isla del Misterio, un terreno lleno
                    de cactus y palmeras, donde la temperatura alcanzaba
                    extremos durante el día. Durante su recorrido, Eirian tuvo
                    que lidiar con los esqueletos de fuego y el vikingo RagFire,
                    quienes intentaron impedir su paso. Además, enfrentó la
                    difícil tarea de recolectar agua esencial para sobrevivir,
                    resistiendo la tentación de desviarse por los tesoros que
                    corrompen.
                  </p>
                  <p>
                    La tercera región, ahora llamada Volcania, estaba dominada
                    por volcanes en erupción y desiertos de lava. El calor era
                    sofocante, pero Eirian pudo avanzar gracias a la protección
                    de su espada. En este nuevo escenario, se topó con un grupo
                    de dragones y criaturas poderosas que bloquearon su camino.
                    Después de superar todos los desafíos en estas tres
                    regiones, Eirian llegó al lugar donde los perritos estaban
                    cautivos, enfrentándose cara a cara con el malvado Igniclus.
                  </p>
                  <p>
                    En una lucha épica y desafiante, Eirian logró derrotar a
                    Igniclus, liberando a los perritos y devolviendo la paz al
                    Valle de los Ladridos. La aldea celebró la valentía de
                    Eirian, y los perros regresaron a sus dueños agradecidos. La
                    historia de Eirian se convirtió en leyenda, recordando la
                    importancia del coraje y la determinación para superar los
                    desafíos más difíciles.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
