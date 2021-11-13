import React from "react";
import { useCookies } from "react-cookie";

export default function CookieBanner() {
  const [cookies, setCookie] = useCookies(["cookie"]);

  function handleCookie() {
    setCookie("cookie", 'ok', {
      path: "/"
    });
  }
  return (
    <div id="cookie-banner" className={`card rounded ${cookies.cookie === 'ok' ? 'd-none' :''}`}>
      <h6>🍪Questo sito usa i Cookie</h6>
      <p>Utiliziamo i cookie necessari per migliorare l'esperienza utente</p>
      <button onClick={handleCookie}>Ho capito</button>
    </div>
  );
}