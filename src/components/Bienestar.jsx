import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Bienestar.css";
import { Slider } from "../components/Slider";

export const Bienestar = () => {
 

  

  return (
    <>
      <header>
        <nav>
          <div className="navegacion-areas margen-nav">
            <Link to="/">Inicio</Link>
            <Link to="/bienestar">Bienestar</Link>
            <Link to="/biblioteca">Biblioteca</Link>
            <Link to="/directivas">Directivas</Link>
            <Link to="/areas">Áreas</Link>
          </div>
        </nav>
      </header>

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

      <section>
        <div className="contenedor-bienestar-seccion-2">
          <div className="parte-izquierda-bienestar">
            <h1 className="titulo-seccion-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              tempore deleniti maxime laborum delectus dolorem praesentium
              repellat cupiditate iure quo?
            </h1>
            <a href='#'className="lightbox-seccion-2" id="abrirLightbox">
              Ver más
            </a>
          </div>
          <div className="imagen-2-bienestar">
            <img src="/src/images/bienestar-header.png" alt="" />
          </div>
        </div>
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
            <Link to='#' className="lightbox-seccion-2" id="abrirLightbox">
              Ver más
            </Link>
          </div>

          {/* LIGHTBOX FINAL */}
            <div className="lightbox" id="miLightbox">
              <div className="lightbox-contenido">
                <h3 className="lightbox-titulo">Más Información</h3>
                <div className="lightbox-contenido-texto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus beatae cupiditate deserunt cum modi quo explicabo, pariatur corrupti provident veniam. Esse consectetur alias asperiores cum id temporibus impedit itaque sed.
                </div>
                <div className="lightbox-contenido-imagen">
                  <img src="/src/images/automatizacion.jpg" alt="Imagen" />
                </div>
                <Link to='#' className="lightbox-seccion-2-final" id="cerrarLightbox">
                  Cerrar
                </Link>
              </div>
            </div>
        </div>
      </section>

      <section>
        <div className="slider-bienestar">
          <Slider />
        </div>
      </section>
    </>
  );
};
