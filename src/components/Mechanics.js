import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

//--Controls--\\
import flechas from "../assets/img/Controles/botones.png";
import raton_mov from "../assets/img/Controles/raton.png";
import ranton_clic from "../assets/img/Controles/boton-derecho-del-raton.png";

//--Img Items--\\
import Filete from "../assets/img/Items/carne.png";
import Pierna from "../assets/img/Items/filete.png";
import Botella from "../assets/img/Items/botella.png";

export const Mechanics = () => {

  const controls= [
    {
      title: "Flechas del teclado",
      description: "La función de las teclas de fecha en el teclado se diseñaría para proporcionar a los jugadores un control intuitivo y fluido sobre el desplazamiento de Eirian en el escenario.",
      imgUrl: flechas,
    },
    {
      title: "Movimiento del ratón",
      description: "Con el moviendo del ratón hacia distintas partes de la pantalla, los jugadores podrían hacer que la cámara gire y explore diferentes áreas del entorno, ademas durante el combate, el movimiento del ratón podría utilizarse para apuntar a los enemigos.",
      imgUrl: ranton_clic,
    },
    {
      title: "Clic derecho",
      description: "Si se utiliza la tecla de tecla derecha del raton, es un mecanismo para que Eirian pueda derrotar a los enemigos, disparando rayos de energia.",
      imgUrl: raton_mov,
    },
    
  ];

  const items = [
    {
      title: "Filete",
      description: "Este ítem representa una ración sustanciosa y nutritiva que se puede utilizar para alimentar a los perros rescatados.",
      imgUrl: Filete,
    },
    {
      title: "Pierna de res",
      description: "Un pedazo de pierna, que es una delicia para los perros. Al darles un pedazo de pierna, los jugadores pueden fortalecer el vínculo con sus amigos caninos y mejorar su relación.",
      imgUrl: Pierna,
    },
    {
      title: "Botella de Agua",
      description: "La botella de agua es esencial para mantener a los perros hidratados, especialmente en Volcania, ya que el agua es escasa y los jugadores deben asegurarse de que sus leales compañeros tengan suficiente agua para mantenerse enérgicos y saludables.",
      imgUrl: Botella,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container style={{marginTop:"5%"}}>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Mecánica del juego</h2>
                <p>Estas mecánicas de juego se combinan para proporcionar una experiencia rica y variada a medida que los jugadores se embarcan en la emocionante búsqueda de Eirian para recuperar a los perros robados y derrotar de una vez por todas al temible Igniclus el Monstruo de Lava.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Controles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Items</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Clasificación</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>
                        {
                          controls.map((controls, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...controls}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          items.map((items, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...items}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Eirian: En Busca de los Ladridos Perdidos", en esta aventura llena de magia y misterio, te unirás a Eirian, el valiente explorador, en su misión para recuperar a los perros robados por el enigmático Igniclus 'El Monstruo de Lava'. Armado con una espada mágica y habilidades únicas, te enfrentarás a desafíos emocionantes y explorarás tres regiones fascinantes. La perspectiva en primera persona te sumergirá en un mundo cautivador lleno de criaturas asombrosas y paisajes pintorescos.</p>
                      <p style={{
                        fontWeight: "bold",
                        fontSize: 25
                      }}>Clasificación</p>
                      <p>"Eirian: En Busca de los Ladridos Perdidos" ha sido clasificado como apto para todo público mayor a los 10 años de edad <span style={{fontWeight: "bold"}}>(E 10+)</span>.  Este juego ofrece una experiencia de First Person Shooter que equilibra la emoción del combate con una narrativa cautivadora, sin contenido que pueda resultar inapropiado para la audiencia mayor a los 10 años. Prepárate para disfrutar de una aventura épica, donde la diversión, la exploración y la amistad canina se entrelazan en un universo lleno de maravillas y desafíos.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
