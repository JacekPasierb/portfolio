import React from "react";
import css from "./IconCard.module.css"

interface IconCardProps {
    path: React.ReactNode; // Typ dla ścieżki SVG
    title: string;        // Typ dla tytułu
    color:string;
  }

const IconCard: React.FC<IconCardProps> = ({path, title,color}) => {
  return (
    <div className={css.iconCard}>
      <svg  fill={color} viewBox="0 0 32 32" className={css.icon}>
        {path}
      </svg>
      <p className={css.titleIcon}>{title}</p>
    </div>
  );
};

export default IconCard;
