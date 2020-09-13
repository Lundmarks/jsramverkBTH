import React from 'react';
// import React, { useEffect, useState } from 'react';

const Me = () => {

  // const [message, setMessage] = useState('');
  //
  // useEffect(() => {
  //   fetch('https://me-api.jsramverk.se')
  //     .then(res => res.json())
  //     .then(res => setMessage(res.description));
  // });

  return (
    <main>
      <h1>Hallå där!</h1>
      <p>Mitt namn är Olle, och jag kommer från Linköping, Sverige. Jag är född år 1997, vilket betyder att jag är 22 år gammal.
      Ursprungligen född i Motala, men flyttade när jag var runt 10 år gammal. Nuförtiden strosar jag runt på gatorna i Linköping,
      min hemstad den senaste tiden.</p>

      <p>Under hela mitt liv har jag varit intresserad av teknologi. Vare sig det är kopplat till bilar, datorer, TV, HiFi eller
      vardagselektronik, så har det en plats i mitt hjärta.</p>

      <p>Under mina tidigare erfarenheter har jag inte använt linux under någon större utsträckning, och kan därför inte så mycket
      om operativsystemet i sin helhet. Det ska bli intressant att få lära sig mer om det, och det är därför jag tycker denna kurs,
      vlinux, kommer bli mycket intressant!</p>
    </main>
  );
};

export default Me;
