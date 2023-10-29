import React from 'react';
import './App.css';
import './AppComponents.css'
import expandmore from "./expand_more.svg"
function App() {
  return (
    <div className="app">
      <section className='head'>
        <header>
          <h3>Istituto Volta</h3>
          <h1>Corso di Informatica</h1>
          <p className="subtitle">Sviluppo di applicazioni complesse in <span className="language-tile">Java</span>, siti web con <span className="language-tile">HTML, PHP</span>, algoritmi con <span className="language-tile">C e C++</span></p>
          <a className='abs' href="#slide1"><img src={expandmore} alt="" /></a>
        </header>
      </section>
      <section className="slide-1" id="slide1">
        <main>
          <h1>Materie trattate</h1>
          <div className="subjects">
            <div className="column">
              <div className="card">
                <h2>Informatica</h2>
                <p>Applicazioni <b>Java</b><br />e <b>siti web</b></p>
              </div>
              <div className="card">
                <h2>Sistemi e reti</h2>
                <p>Studio dei <b>PC</b><br />e <b>network</b></p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <h2>TPSIT</h2>
                <p>Tecnologie dell'<b>informazione</b></p>
              </div>
              <div className="card">
                <h2>Telecomunicazioni</h2>
                <p>Sviluppo di <b>circuiti</b> semplici</p>
              </div>
            </div>
            <div className="extra">
              <p>Materie dal biennio: </p>
              <ul>
                <li>Lingua e letteratura italiana</li>
                <li>Matematica</li>
                <li>Religione</li>
                <li>Inglese</li>
              </ul>
              <a className='abs' href="#slide2"><img src={expandmore} alt="" /></a>
            </div>
          </div>
        </main>
      </section>
      <section id="slide2">
        <main>
          <h1>Cosa si impara</h1>
          <div className="vflex">
            <div className="colum">
              <div className="mini-card">
                <h2>Lavorare in team e gestire progetti</h2>
              </div>
              <div className="mini-card">
                <h2>Gestione delle reti e sicurezza</h2>
              </div>
              <div className="mini-card">
                <h2>Analisi e manipolazione dei dati</h2>
              </div>
              <a className='abs' href="#slide3"><img src={expandmore} alt="" /></a>
            </div>
          </div>
        </main>
      </section>
      <section id="slide3">
        <main>
          <h1>Progetti recenti</h1>
          <div className="vflex">
            <div className="colum progetti">
              <div className="mini-card">
                <h2>Generatore di reti locali</h2>
                <p>Dato un <b>indirizzo IP</b> creerà tutti i dati necessari <br /> per generare una rete aziendale</p>
                <h4 style={{borderTop:"1px solid #000",width:"fit-content",paddingRight:"20px",marginTop:"10px"}}>Sistemi e reti</h4>
              </div>
              <div className="mini-card">
                <h2>Controllo di un indirizzo IP</h2>
                <p>Dato un indirizzo <b>IP</b> restituire all'utente se <br />l'indirizzo è valido oppure no</p>
                <h4 style={{ borderTop: "1px solid #000", width: "fit-content", paddingRight: "20px", marginTop: "10px" }}>Informatica</h4>
              </div>
              <div className="mini-card">
                <h2>Studio delle codifiche e degli standard</h2>
                <p>Progetto a gruppi destinato allo studio di <br /> <b>correzione dei dati</b>, ma anche <b>codici QR</b></p>
                <h4 style={{ borderTop: "1px solid #000", width: "fit-content", paddingRight: "20px", marginTop: "10px" }}>TPSIT</h4>
              </div>
              <a className='abs' href="#slide4"><img src={expandmore} alt="" /></a>
            </div>
          </div>
        </main>
      </section>
      <section id="slide4">
        <main>
          <h1>Grazie!</h1>
          <p style={{fontSize:"15px"}}>Pintescul, Turati, Chirdo, Orciuolo, El Mouket, Maggiani, <br />Ponzano, Santamaria, Zummo</p>
        </main>
      </section>
    </div>
  );
}

export default App;
