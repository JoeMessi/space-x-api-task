import React, { FC } from "react";
import "./Card.css";

interface CardProps {
  imgUrl: string;
  rocketName: string;
  description: string;
  wikipedia: string;
}

const truncate = (str: string) =>
  str.length > 150 ? str.substring(0, 147) + "..." : str;

export const Card: FC<CardProps> = ({
  imgUrl,
  rocketName,
  description,
  wikipedia,
}) => {
  return (
    <article className="article-card">
      <div className="card-hero">
        <img src={imgUrl} alt={rocketName} />
      </div>

      <header className="card-header">
        <h2>{rocketName}</h2>
        <p>{truncate(description)}</p>
      </header>

      <a href={wikipedia} target="_blank" rel="external">
        <footer className="card-footer">Check it out</footer>
      </a>
    </article>
  );
};
