"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Acerca de mí</SectionHeading>
      <p className="mb-3">
        Soy un apasiado{" "}
        <span className="font-medium">desarrollador de aplicaciones y sitios web</span> con más de 2 años de experiencia
        en la creación de {" "}
        <span className="font-medium">soluciones digitales innovadoras y eficientes</span>.{" "}
        <span className="italic"> Mi enfoque se centra en combinar creatividad y tecnología</span> para desarrollar
        productos que no solo cumplan con los requisitos funcionales, sino que también ofrezcan una
        <span className="font-medium"> interfaz de usuario excepcional.</span> He trabajado en una amplia
         variedad de proyectos, desde{" "}
        <span className="font-medium">
          aplicaciones móviles para startups hasta complejos sitios web para grandes empresas
        </span>
        . Esta diversidad me ha permitido adquirir habilidades en múltiples lenguajes
        y tecnologías , incluyendo {" "}
        <span className="font-medium">React, Next.js, Node.js, Flutter, PHP, HTML, CSS, JavaScript, etc...</span>
      </p>

      <p>
        <span className="italic">Para mí, el desarrollo de software es más que solo escribir código</span>,  es una forma 
       de resolver problemas y mejorar la vida de las personas a través de la tecnología.{" "}
        <span className="font-medium">Cada proyecto es una oportunidad para aprender, crecer y aportar algo positivo al mundo digital</span>.
      </p>
    </motion.section>
  );
}
