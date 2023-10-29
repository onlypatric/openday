import React from 'react';
import './App.css';
import './AppComponents.css'
function App() {
  return (
    <div className="app">
      <section className='head'>
        <header>
          <h3>Istituto Volta</h3>
          <h1>Corso di Informatica</h1>
          <p className="subtitle">Sviluppo di applicazioni complesse in <span className="language-tile">Java</span>, siti web con <span className="language-tile">HTML, PHP</span>, algoritmi con <span className="language-tile">C e C++</span></p>
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
                <p>Sviluppo di <b>circuiti</b> a</p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;
