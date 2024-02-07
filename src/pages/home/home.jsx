import React from 'react';
import '../../assets/css/home_style.css';

function Home() {
  return (
    <div id="page" className="bg-cover bg-center h-screen">
      <nav className="flex justify-between items-center">
        <div id="logo" className="element w-1/6">
          <img src="assets/images/formekou.png" alt="" className="w-full" />
        </div>
        <ul className="element flex justify-around font-montserrat text-white">
          <li>ACCUEIL</li>
          <li>SONDAGES RECENTS</li>
          <li>NOUS CONTACTER</li>
          <li>A PROPOS</li>
          <li>Se déconnecter</li>
        </ul>
        <div id="profile" className="element w-1/6">
          <img src="assets/images/josia andriamaherilala cutted.png" alt="" className="w-full" />
        </div>
      </nav>
      <section className="flex flex-col items-center">
        <h1 className="text-white font-montserrat text-3xl mt-10">
          Créer, partagez, influencer!<br />
          Rejoignez le mouvement des idées, <br />
          <span className="text-yellow-300">Formekou, </span> votre voix façonne le futur!
        </h1>
        <button name="create_sondage" className="mt-4">
          <img src="assets/images/create new sondage.png" alt="" />
        </button>
      </section>
    </div>
  );
}

export default Home;
