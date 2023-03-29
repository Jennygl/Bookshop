// rfce

import React, {useState, useEffect} from 'react'

function HeaderComp() {
    // Ändrar bakgrundsfärgen för navbaren när man scrollar.
const [backgroundColor, setBackgroundColor] = useState("rgba(255, 255, 255, 0)");
useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const newBackgroundColor = scrollY > 10 ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0)';
      setBackgroundColor(newBackgroundColor);
      const anotherBackgroundColor = scrollY > 600 ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.8)';
      setBackgroundColor(anotherBackgroundColor);
    }

    window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);


    return (
  <>
  <nav style={{backgroundColor: backgroundColor}} className="navbar">

  {/* <div className="nav-container"> */}
    <a className="navbar-brand" href="#">Roslagens Bokhandel</a>

    <button className="navbar-toggler" onClick=""><ion-icon name="menu-outline"></ion-icon></button>
    {/* <span class="fa-solid fa-books fa-rotate-270" style="color: #000000;"></span> */}
      <div id="navbar-nav">
        <a className="nav-link" href="#">Bloggen</a>
        <a className="nav-link" href="#">Öppettider</a>
        <a className="nav-link" href="#">Hitta hit</a>
        <a className="nav-link" href="#">Kontakt</a>
      </div>
</nav></>

    )
}

export default HeaderComp
