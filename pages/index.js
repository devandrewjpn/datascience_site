import Link from "next/link";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Layout from "../src/layout/Layout";
import { testimonialSliderThree } from "../src/sliderProps";

const Home = () => {
  const singleMenus = [
    { name: "Home", href: "hero" },
    { name: "Sobre", href: "about" },
    { name: "Serviços", href: "services" },
    { name: "Time", href: "team" },
  ];
  return (
    <Layout
      extraBodyCls="home-three-dark"
      singleMenus={singleMenus}
    >
      <section className="banner-three p-r z-1" id="hero">
        <div className="shape shape-one animate-float-x">
          <span>
            <img src="assets/images/shape/shape-5.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-two animate-float-y">
          <span>
            <img src="assets/images/shape/shape-6.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-three animate-float-y">
          <span>
            <img src="assets/images/shape/shape-7.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-four animate-float-y">
          <span>
            <img src="assets/images/shape/shape-8.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-five">
          <span />
        </div>
        <div className="shape shape-six">
          <span>
            <img src="assets/images/shape/shape-9.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="wow fadeInUp" data-wow-delay=".5s">
                  Tecnologia &amp; inovação para seu negócio
                </h1>
                <p className="wow fadeInDown" data-wow-delay=".7s">Dê um passo a mais para o futuro</p>
                <div className="hero-button wow fadeInUp" data-wow-delay=".9s">
                  <a href="https://app.brasilatuarialds.com.br/campanhaCadastrar" target="_blank" className="main-btn btn-blue" rel="noreferrer">
                    Experimentar Dashboard
                  </a>
                  <a href="#about" className="main-btn filled-btn filled-white">
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="hero-img-box wow fadeInRight"
                data-wow-delay=".10s"
              >
                <img
                  src="assets/images/hero_img.png"
                  className="hero-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fact-section-three p-r z-1 pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="author-rating-box-two mb-40 wow fadeInUp">
                <ul className="rating">
                  <li>
                    <span>Qualidade</span>
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                </ul>
                <h5>Único dashboard especializado do mercado</h5>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="fact-wrapper ml-lg-55">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-counter-item-three text-center mb-40 wow fadeInDown">
                      <div className="text">
                        <h2 className="number">
                          <span className="currency"></span>
                          <Counter end={180} />
                        </h2>
                        <h5>Clientes ativos</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-counter-item-three text-center mb-40 wow fadeInUp">
                      <div className="text">
                        <h2 className="number">
                          <span className="currency"></span>
                          <Counter end={63} />
                        </h2>
                        <h5>Associações parceiras</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="single-counter-item-three text-center mb-40 wow fadeInDown">
                      <div className="text">
                        <h2 className="number">
                          <Counter end={1963} />+
                        </h2>
                        <h5>Acessos em dashboards</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section pt-90 pb-80" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-six_image-box p-r z-1 mb-50 wow fadeInLeft">
                <div className="shape shape-one">
                  <span />
                </div>
                <img
                  src="assets/images/carros.png"
                  className="about-img-one"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-box content-box-gap mb-50 wow fadeInRight">
                <div className="section-title text-white wow fadeInDown">
                  <h2>Especializada em Tecnologias para o mercado de proteção veicular.</h2>
                </div>
                <p>Com mais de 8 anos de experiência, tem o propósito bem definido de oferecer soluções tecnológicas em Business Intelligence customizadas à necessidade de cada um dos nossos clientes, bem como de suprir a necessidade de suporte técnico-atuarial para o entendimento de cenários e indicadores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section pb-50" id="services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title text-white text-center mb-110 wow fadeInDown">
                <span className="sub-title">Serviços</span>
                <h2>Nossas soluções</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-three animate-hover-icon text-center mb-80 wow fadeInUp">
                <div className="icon">
                  <img width={40} src="/ds/assets/images/dashboard.svg" />
                </div>
                <div className="text">
                  <h3 className="title">
                      <a>Dashboard Atuarial para Associações</a>
                  </h3>
                  <p>Através dele é possível acompanhar a evolução e característica da sua base de veículos associados, o faturamento da carteira, a inadimplência, os eventos e a performance comercial.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-three animate-hover-icon text-center mb-80 wow fadeInDown">
                <div className="icon">
                  <img width={50} src="/ds/assets/images/24horas.svg" />
                </div>
                <div className="text">
                  <h3 className="title">
                      <a>Dashboard para Empresas de Assistência 24 Horas</a>
                  </h3>
                  <p>Através dele é possível acompanhar a evolução da sua base clientes, o faturamento da carteira, a inadimplência e controlar todos as informações referentes a atendimentos.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="service-item-three animate-hover-icon text-center mb-80 wow fadeInUp">
                <div className="icon">
                  <img width={40} src="/ds/assets/images/location.svg" />
                </div>
                <div className="text">
                  <h3 className="title">
                      <a>Dashboard para Centrais de Rastreamento</a>
                  </h3>
                  <p>Com integração direta aos principais sistemas gerenciais do mercado o Dashboard para Centrais de Rastreamento oferece acesso facilitado e dinâmico às informações importantes para a gestão das empresas do setor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section-two">
        <div className="container">
          <div className="features-wrapper wow fadeInDown">
            <div className="row">
              <div className="col-lg-5">
                <div className="features-two_img-box p-r z-1 mb-50">
                  <div className="shape shape-one">
                    <span />
                  </div>
                  <img
                    className="rounded"
                    src="assets/images/dashboard.jpeg"
                    alt="Mobile Mockup"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="features-content-box content-box-gap mb-20">
                  <div className="section-title text-white wow fadeInDown">
                    <a target="_blank" href="https://app.brasilatuarialds.com.br/campanhaCadastrar" rel="noreferrer" className="h1 hover_text">Clique aqui e tenha acesso gratuito ao dashboards com dados do mercado segurador.</a>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusanlorem que laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="testimonial-section pt-130 pb-80"
        id="onepage-testimonial"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial-wrapper-three mr-lg-70 mb-50 wow fadeInLeft">
                <div className="section-title text-white">
                  <h2>O que nossos clientes dizem</h2>
                </div>
                <Slider
                  {...testimonialSliderThree}
                  className="testimonial-slider-three mb-60"
                >
                  <div className="testimonial-item-three">
                    <div className="testimonial-content">
                      <p>
                        On the other hand we denounce with righteous indignation
                        and dislike men who are so beguiledc and demoralized by
                        the charms of pleasure of the moment so blinded by
                        desire foresee
                      </p>
                      <div className="author-rating-box d-flex align-items-center justify-content-between flex-wrap">
                        <div className="author-thumb-title d-flex align-items-center">
                          <div className="author-title">
                            <h4>Ronald B. Griffin</h4>
                            <p className="position">Business Manager</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item-three">
                    <div className="testimonial-content">
                      <p>
                        On the other hand we denounce with righteous indignation
                        and dislike men who are so beguiledc and demoralized by
                        the charms of pleasure of the moment so blinded by
                        desire foresee
                      </p>
                      <div className="author-rating-box d-flex align-items-center justify-content-between flex-wrap">
                        <div className="author-thumb-title d-flex align-items-center">
                          <div className="author-title">
                            <h4>Ronald B. Griffin</h4>
                            <p className="position">Business Manager</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item-three">
                    <div className="testimonial-content">
                      <p>
                        On the other hand we denounce with righteous indignation
                        and dislike men who are so beguiledc and demoralized by
                        the charms of pleasure of the moment so blinded by
                        desire foresee
                      </p>
                      <div className="author-rating-box d-flex align-items-center justify-content-between flex-wrap">
                        <div className="author-thumb-title d-flex align-items-center">
                          <div className="author-title">
                            <h4>Ronald B. Griffin</h4>
                            <p className="position">Business Manager</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
                <div className="testimonial-dots" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="map-img-box p-r z-1 mb-50 wow fadeInRight">
                <img src="assets/images/gallery/map-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-12 section-title text-white text-center mb-5">
              <h2>Diretores</h2>
            </div>
            <div className="col-lg-4 d-flex flex-column justify-content-around align-items-center gap-2">
              <img src="assets/images/felipe.png" />
              <strong className="h5 text-center text-white">Felipe Reis/ Sócio-Diretor</strong>
              <p className="text-justify">Técnico em Administração pela Escola Técnica de Formação Gerencial de Contagem SEBRAE e graduado em Ciências Atuariais pela UFMG, é Membro do Instituto Brasileiro de Atuária – MIBA 3281. </p>
              <p className="text-justify">Como sócio-diretor da Brasil Atuarial Data Science, realiza trabalhos de assessoria empresarial no que tange a desenvolvimento de projetos de Business Intelligence, revisão atuarial de metodologias estatísticas de provisões técnicas e rateio, elaboração de laudos atuariais de DUE DILIGENCE para associações de proteção veicular, dentre outros. </p>
            </div>
            <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center gap-2">
              <img src="assets/images/enrico.png" />
              <strong className="h5 text-center text-white">Enrico Neto / Sócio-Diretor</strong>
              <p className="text-justify">Graduado em Ciências Atuariais com Especialização em Estatística pela UFMG, é Membro do Instituto Brasileiro de Atuária – MIBA 1771.</p>
              <p className="text-justify">Como sócio-diretor da Brasil Atuarial, realiza trabalhos de assessoria empresarial no que tange a desenvolvimento de produtos de F&I, revisão atuarial de metodologias estatísticas de provisões técnicas, revisão de contratos de instrumentos financeiros para endividamento de empresas, elaboração de laudos atuariais de DUE DILIGENCE para associações de proteção veicular, dentre outros.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
