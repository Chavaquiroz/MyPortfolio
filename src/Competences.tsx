import React from "react";
import "./css/competences.css";

export type CompetenceItem = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

type CompetencesProps = {
  items: CompetenceItem[];
  className?: string; // por si quieres añadir clases extra desde fuera
};

const Competences: React.FC<CompetencesProps> = ({ items, className }) => {
  return (
    <div className={["competences", className].filter(Boolean).join(" ")}>
      {items.map((item, idx) => (
        <article className="card" key={idx}>
          <div className="face face1">
            <div className="content" >
              <img src={item.image} alt={item.title}/>
              <h3>{item.title}</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>{item.description}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Competences;
