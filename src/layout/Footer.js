import Link from "next/link";

const Footer = () => (
  <footer className="footer-three text-white p-r z-1">
    <div className="container">
      {/*=== Footer Widget ===*/}
      <div className="footer-widget-wrapper pt-80 pb-35">
        <div className="row">
          <div className="col-12">
            <div className="footer-widget mb-40 wow fadeInUp text-center">
              <div className="footer-content">
                <div className="footer-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img
                      width={250}
                        src="/ds/assets/images/logo_branca.png"
                        alt="Footer Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer-widget contact-info-widget-two mb-40 wow fadeInUp">
              <div className="footer-content">
                <div className="contact-info-box d-flex justify-content-center align-items-center mb-10 text-center">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="text">
                    <p>Rua Batista Santiago, 81 - Liberdade, Belo Horizonte - MG</p>
                  </div>
                </div>
                <div className="contact-info-box d-flex justify-content-center align-items-center mb-10">
                  <div className="icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="text">
                    <p>
                      <a href="mailto:contato@brasilatuarial.com.br">contato@brasilatuarial.com.br</a>
                    </p>
                  </div>
                </div>
                <div className="contact-info-box d-flex justify-content-center align-items-center mb-10">
                  <div className="icon">
                    <i className="far fa-phone" />
                  </div>
                  <div className="text">
                    <p>
                      <a href="tel:+553125108536">(31) 2510 - 8536</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Footer Copyright ===*/}
      <div className="footer-copyright border-top-white-op-1">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="footer-text">
              <p>Copy@ 2024 Data Science. Todos os direitos reservados | Desenvolvido por <a href="https://devandrew.com.br" target="_blank" rel="noreferrer" >DevAndrew</a></p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-social-box text-center float-lg-right">
              <ul className="social-link">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
