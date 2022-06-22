import React, { FC } from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);
