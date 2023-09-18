import Link from "next/link";
import Seo from "../components/common/Seo";
import DefaulHeader from "../components/header/DefaulHeader";
import Header6 from "../components/header/Header6";

const Pricing = () => {
  return (
    <>
      <Seo pageTitle="404" />

      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header6 />

      {/* 
			=============================================
			Error Page
			============================================== 
			*/}
      <div className="error-page-content d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 m-auto">
              <h3>Opps, ocitli ste sa na stránke ktorá neexistuje. Ak si myslíte, že je to chyba, tak kontaktujete info@becode.sk</h3>
              <p className="me-xxl-5 ms-xxl-5 pt-15 pb-20">
                Nenašli ste to čo ste hladali ? Skúste začať na hlavnej stránke.
              </p>
              <Link href="/" className="btn-twentyOne fw-500 tran3s">
                Hlavná stránka
              </Link>
            </div>
          </div>
          <img src="/images/assets/ils_06.svg" alt="" className="m-auto" />
        </div>
        {/* End .container */}

        <img
          src="/images/shape/shape_178.svg"
          alt="shape"
          className="shapes shape-one w-100"
        />
      </div>
      {/* /.error-page-content */}
    </>
  );
};

export default Pricing;
