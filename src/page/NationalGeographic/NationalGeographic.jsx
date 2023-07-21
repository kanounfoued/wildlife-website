export default function NationalGeographic() {
  return (
    <div className="national-geo-page">
      <div className="container">
        <header>
          <div className="logo">
            <img src="images/national-geographic.png" decoding="async" />
          </div>

          <div className="nav-menu">
            <nav>
              <ul>
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
