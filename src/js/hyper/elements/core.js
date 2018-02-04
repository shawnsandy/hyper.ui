import { h } from "hyperapp";
import { u } from "umbrellajs";

const nested = require("hyperapp-nestable");

export const Link = ({ link, click, classes = 'button-elm' }, children) => (
  <a
    href={link}
    class={`button-elm ${classes}`}
    onclick={click}
  >
    {children}
  </a>
);

export const Button = ({ click, type = 'button', classes = null }, children) => (
  <button type={type} class={`button-elm ${classes}`} onclick={click}>
    {children}
  </button>
);
