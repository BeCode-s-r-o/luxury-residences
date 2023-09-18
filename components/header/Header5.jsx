import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";

const Header5 = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-ten ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/">
              <img src={navbar ? "/images/logo/logo_07_dark.png" :"/images/logo/logo_07.png"} alt="" width={240} />
            </Link>
          </div>

          {/* End logo */}
          {/*<div className="right-widget d-flex align-items-center order-lg-3">*/}
          {/*  <form*/}
          {/*    action="#"*/}
          {/*    className="header-search-two position-relative me-4 me-xxl-5 d-none d-xl-block"*/}
          {/*  >*/}
          {/*    <input type="text" placeholder="Search Here..." required />*/}
          {/*    <img*/}
          {/*      src="/images/icon/icon_122.svg"*/}
          {/*      alt="icon"*/}
          {/*      className="icon position-absolute"*/}
          {/*    />*/}
          {/*  </form>*/}
          {/*  /!*<Link*!/*/}
          {/*  /!*  href="/login"*!/*/}
          {/*  /!*  className="login-btn-four rounded-circle tran3s me-3"*!/*/}
          {/*  /!*>*!/*/}
          {/*  /!*  <i className="bi bi-person" />*!/*/}
          {/*  /!*</Link>*!/*/}

          {/*</div>*/}
          {/* /.right-widget */}

          <MainMenu />
          <div className="right-widget d-md-flex align-items-center order-lg-3 d-none">
          <Link
              href="/contact"
              className="signup-btn-four fw-500 tran3s d-none d-lg-block"
          >
            Napíšte nám
          </Link>
          </div>
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default Header5;
