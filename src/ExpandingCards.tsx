/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import "./css/ExpandingCards.css";

interface Card {
  id: number;
  url: string;
  title: string;
  description?: string;

  /** Personalización opcional por tarjeta (usa CSS variables) */
  textColor?: string;     // ej. "#ffd166"
  titleSize?: string;     // ej. "28px" o "clamp(20px, 3vw, 36px)"
  descSize?: string;      // ej. "16px"
  overlayColor?: string;  // ej. "rgba(0,0,0,0.4)"
  alwaysShowText?: boolean; // si quieres que el texto siempre sea visible
}

interface Props {
  data: Array<Card>;
}

const ExpandingCards = ({ data }: Props) => {
  const [activeId, setActiveId] = React.useState<number>(data?.[0]?.id ?? 1);

  const onClick = (id: number) => setActiveId(id);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, id: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveId(id);
    }
  };

  return (
    <div className="container" role="list">
      {data.map((card) => {
        const isActive = activeId === card.id;

        // Variables CSS para personalizar por tarjeta
        const customVars: React.CSSProperties = {
          backgroundImage: `url(${card.url})`,
          // Variables opcionales:
          ...(card.textColor ? { ["--text-color" as any]: card.textColor } : {}),
          ...(card.titleSize ? { ["--title-size" as any]: card.titleSize } : {}),
          ...(card.descSize ? { ["--desc-size" as any]: card.descSize } : {}),
          ...(card.overlayColor ? { ["--overlay-color" as any]: card.overlayColor } : {}),
        };

        return (
          <div
            key={card.id}
            role="listitem"
            className={`panel ${isActive ? "active" : ""} ${card.alwaysShowText ? "panel--always-text" : ""}`}
            onClick={() => onClick(card.id)}
            onKeyDown={(e) => onKeyDown(e, card.id)}
            tabIndex={0}
            aria-selected={isActive}
            style={customVars}
          >
            <div className="panel__content">
              <h3 className="panel__title">{card.title}</h3>
              {card.description && (
                <p className="panel__desc">{card.description}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpandingCards;
