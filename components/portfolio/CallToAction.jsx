import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <div className="fancy-short-banner-twelve position-relative zn2 pt-160 lg-pt-80">
      <div className="container">
        <div className="border-bottom pb-140 lg-pb-80">
          <div className="row">
            <div className="col-xxl-9 col-xl-10 m-auto text-center">
              <div
                className="title-style-ten wow fadeInUp"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="main-title fw-500 tx-dark">
                  Túžite po vysnívanom bývaní ? <br />
                  <span className="position-relative">
                    Poďme sa o tom porozprávať{" "}
                    <img src="/images/shape/shape_132.svg" alt="shape" />
                  </span>
                </h2>
              </div>
              {/* /.title-style-ten */}
              <p
                className="text-lg mt-45 mb-55 lg-mb-30 lg-mt-40"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Sme tu pre Vás, aby sme Vám pomohli s Vašim bývaním.
              </p>
              <Link
                href="/contact"
                className="btn-twenty fw-500 tran3s"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Pošlite nám správu
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="shapes shape-one" />
    </div>
  );
};

export default CallToAction;
