import Seo from "../components/common/Seo";
import BlockContact from "../components/contact/BlockContact";
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import DefaultFooter from "../components/footer/DefaultFooter";
import DefaulHeader from "../components/header/DefaulHeader";
import Header6 from "../components/header/Header6";
import Footer from "../components/home-page/home-5/footer";
import CallToActions from "../components/home-page/home-5/CallToActions";

const contact = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header6 />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto wow fadeInUp">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  Kontaktné údaje
                </div>
                <h2 className="main-title fw-500 tx-dark">Spojme sa a vytvorme krajší domov.</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <div className="contact-section-one mt-60 lg-mt-30">
        <div className="container">
          <div className="row">
            <BlockContact />
          </div>
        </div>
        {/* End .container */}

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9 m-auto">
              <h2 className="tx-dark text-center mt-100 mb-80 lg-mt-40 lg-mb-40 wow fadeInUp">
                Máte otázky ? Pošlite nám správu.
              </h2>
            </div>
            <div className="col-xl-11 m-auto">
              <ContactForm />
              {/* /.form-style-one */}
            </div>
          </div>
        </div>
        {/* End .container */}
        {/*<Map />*/}
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}

      <div className="fancy-short-banner-fifteen pt-150 lg-pt-80 pb-30 position-relative zn2 mt-200 lg-mt-100">
        <CallToActions />
      </div>

      <Footer />
    </>
  );
};

export default contact;
