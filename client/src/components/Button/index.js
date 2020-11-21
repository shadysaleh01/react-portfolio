import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";


const STYLES = ["btn--primary", "btn--outline"];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
   const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];



}