import { useState } from "react";

export default function NationalGeographic() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  function onClickBurgerButton() {
    setBurgerOpen((prevState) => !prevState);
  }

  return (
    <div className="national-geo-page">
      <div className="container">
        <header>
          <div className="logo">
            <img src="images/national-geographic.png" decoding="async" />
          </div>

          <div className="m-nav-menu">
            <button>
              <img src="icons/search-icon.svg" decoding="async" />
            </button>
            <button onClick={onClickBurgerButton}>
              <img src="icons/bars-icon.svg" decoding="async" />
            </button>
          </div>

          <div className="nav-menu">
            <nav>
              <ul className="d-ul-menu">
                <li className="active">home</li>
                <li>gallery</li>
                <li>about</li>
                <li>subscribe</li>
              </ul>

              <ul
                className={`m-ul-menu ${
                  isBurgerOpen ? "m-menu-show" : "m-menu-close"
                }`}
              >
                <li className="active">home</li>
                <li>gallery</li>
                <li>about</li>
                <li>subscribe</li>
              </ul>
            </nav>

            <button>
              <img src="icons/search-icon.svg" decoding="async" />
            </button>
          </div>
        </header>

        <section className="main__section">
          <div className="main__section-text">
            <h3>Into the</h3>
            <h1>Wild Show</h1>
            <p>Adventure in the forest</p>
          </div>

          <div className="main__section-img">
            <img src="/images/tiger.png" decoding="async" />
          </div>
        </section>

        <div className="footer">
          <div className="footer__text">
            <div className="footer__text-left">
              <h3>Wildlife Safari</h3>
              <p>20th October 19</p>
            </div>
            <div className="footer__text-right">
              <p>
                We invest in bold people with transformative ideas that help
                millions understand, value, and protect life on our planet,
                creating and empowering.
              </p>
            </div>
          </div>

          <div className="footer__img-container">
            <div className="footer_img footer_img-1">
              <img src="/images/elephant.png" decoding="async" />
            </div>
            <div className="footer_img footer_img-2">
              <img src="/images/fox.png" decoding="async" />
            </div>
            <div className="footer_img footer_img-3">
              <img src="/images/animal.png" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
