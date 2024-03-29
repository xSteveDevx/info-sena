import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Bienestar.css";
import { Slider } from "../components/Slider";

export const Bienestar = () => {
  // Creamos dos variables booleanas para utilizar de auxiliares en los botones "ver más" o lightbox, los definimos en false para que no se activen por defecto, los creamos con el hook useState()
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [lightboxVisible2, setLightboxVisible2] = useState(false);

  // Creamos las funciones para mpodificar su estado por medio de los setters y que se rendericen los lightbox
  const abrirLightbox = () => {
    setLightboxVisible(true);
  };

  const cerrarLightbox = () => {
    setLightboxVisible(false);
  };
  const abrirLightbox2 = () => {
    setLightboxVisible2(true);
  };

  const cerrarLightbox2 = () => {
    setLightboxVisible2(false);
  };

  

  return (
    <>
      {/* BARRA DE NAVEGACIÓN */}
      <header>
        <nav>
          <div className="navegacion-areas margen-nav">
            <Link to="/">Inicio</Link>
            <Link to="/bienestar">Bienestar</Link>
            <Link to="/biblioteca">Biblioteca</Link>
            <Link to="/areas">Áreas</Link>
          </div>
        </nav>
      </header>

      {/* SECCION MAIN DE LA PÁGINA (CABECERO) */}
      <section>
        <div className="contenedor-padre-bienestar">
          <div className="contenedor-bienestar">
            <div className="imagen1-bienestar">
              <img src="/src/images/bienestar-header.png" alt="" />
            </div>
            <h1>
              BIENVENID@S A <br /> BIENESTAR AL <br /> APRENDIZ
            </h1>
          </div>
        </div>
      </section>

      {/* SECCION DE ENFERMERIA */}
      <section>
        <div className="contenedor-bienestar-seccion-2">
          <div className="parte-izquierda-bienestar">
            <h1 className="titulo-seccion-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              tempore deleniti maxime laborum delectus dolorem praesentium
              repellat cupiditate iure quo?
            </h1>
            <a
              href="#"
              className="boton-lightbox-seccion-2"
              id="abrirLightbox"
              onClick={(e) => {
                // Aquí activamos la función para que se abra la franja de información adicional de enfermeria y usamos el e.preventDefault para impedir que se actualice la página de manera automática al darle click
                e.preventDefault();
                abrirLightbox();
              }}
            >
              Ver más
            </a>
          </div>
          <div className="imagen-2-bienestar">
            <img src="/src/images/bienestar-enfermeria.png" alt="" />
          </div>
        </div>

{/* Esto es lo que se va a mostrar cuando la variable auxiliar cambie a true */}
        {lightboxVisible && (
          <div className="lightbox-mostrado">
            <div className="contenido-lightbox-mostrado">
              <div className="cabecero-lightbox">
                <h2 className="titulo-lightbox">MÁS INFORMACIÓN:</h2>
                <span
                  className="material-symbols-outlined cerrar-lightbox"
                  onClick={cerrarLightbox}
                >
                  close
                </span>
              </div>
              <div className="texto-imagen-lightbox">
                <p className="texto-lightbox-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta voluptas adipisci aut id omnis nostrum, laboriosam
                  quaerat harum aspernatur nobis ipsa eveniet hic, officiis
                  fuga? Aliquid, sapiente illo beatae cum molestiae et commodi
                  aperiam. Atque magni incidunt molestiae reiciendis alias.
                </p>
                <img
                  className="imagen-lightbox-directivas"
                  src="/src/images/lightbox-enfermeria.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
      </section>

      <section>
        <div className="contenedor-padre-bienestar-seccion-3">
          <div className="circulo-container">
            <div className="circulo circulo-1">
              <img src="/src/images/integrante-1.png" alt="Image 1" />
            </div>
            <div className="circulo circulo-2">
              <img src="/src/images/integrante-2.png" alt="Image 2" />
            </div>
            <div className="circulo circulo-3">
              <img src="/src/images/integrante-3.png" alt="Image 3" />
            </div>
            <div className="circulo circulo-4">
              <img src="/src/images/integrante-4.jpg" alt="Image 4" />
            </div>
          </div>
          <div className="parte-izquierda-bienestar">
            <h1 className="titulo-seccion-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              tempore deleniti maxime laborum delectus dolorem praesentium
              repellat cupiditate iure quo?
            </h1>
            <a
              href="#"
              className="boton-lightbox-seccion-2"
              id="abrirLightbox-2"
              onClick={(e) => {
                  // Aquí activamos la función para que se abra la franja de información adicional de directivas y usamos el e.preventDefault para impedir que se actualice la página de manera automática al darle click
                e.preventDefault();
                abrirLightbox2();
              }}
            >
              Ver más
            </a>
          </div>
        </div>

        {/* LIGHTBOX DE LA PARTE DE ABAJO DE LA PARTE DE DIRECTIVAS */}
        {lightboxVisible2 && (
          <div className="lightbox-mostrado">
            <div className="contenido-lightbox-mostrado">
              <div className="cabecero-lightbox">
                <h2 className="titulo-lightbox">MÁS INFORMACIÓN:</h2>
                <span
                  className="material-symbols-outlined cerrar-lightbox"
                  onClick={cerrarLightbox2}
                >
                  close
                </span>
              </div>
              <div className="texto-imagen-lightbox">
                <p className="texto-lightbox-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta voluptas adipisci aut id omnis nostrum, laboriosam
                  quaerat harum aspernatur nobis ipsa eveniet hic, officiis
                  fuga? Aliquid, sapiente illo beatae cum molestiae et commodi
                  aperiam. Atque magni incidunt molestiae reiciendis alias.
                </p>
                <img
                  className="imagen-lightbox-directivas"
                  src="/src/images/lightbox-directivas.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
      </section>

      <section>
        <div className="slider-bienestar">
          <Slider />
        </div>
      </section>
    </>
  );
};
