import Seo from "../../components/common/Seo";
import Faq from "../../components/home-page/home-5/Faq";
import Social from "./service-details/Social";
import Link from "next/link";
import Header6 from "../../components/header/Header6";
import CallToActions from "../../components/home-page/home-5/CallToActions";
import Footer from "../../components/home-page/home-5/footer";


const ProjektoveSluzby = () => {
    return (
        <>
            <Seo pageTitle="Luxury residences - Stavba rodinného domu na kĺúč"/>
            {/* <!--
      =============================================
      Theme Default Menu
      ==============================================
      --> */}
            <Header6/>
            {/*
        =============================================
        Feature Section Fifty One
        ==============================================
        */}
            <div className="fancy-feature-fiftyOne position-relative mt-200">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7" data-aos="fade-right">
                            <div className="title-style-five mb-65 lg-mb-40">
                                <div className="sc-title-two fst-italic position-relative">
                                    Naše služby
                                </div>
                                <h2 className="main-title fw-500 tx-dark">
                                    Od projektu až po realizáciu
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.container */}
                <img
                    src="/images/shape/shape_172.svg"
                    alt="shap"
                    className="lazy-img shapes shape-two"
                />
                <img
                    src="/images/shape/shape_175.svg"
                    alt="shap"
                    className="lazy-img shapes shape-three"
                />
            </div>
            {/*
			=============================================
				Service Details
			==============================================
			*/}
            <div className="service-details position-relative mt-100 mb-170 md-mt-50 lg-mb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8 order-lg-1">
                            <div className="service-details-meta ps-lg-5">
                                <h2 className="main-title tx-dark mb-30">Stavba rodinného domu na kľúč</h2>
                                <p className="text-lg tx-dark">
                                    Hľadáte spoľahlivého partnera, ktorý Vám pomôže s výstavbou Vašho rodinného domu na
                                    kľúč? Naša stavebná firma Vám ponúka komplexné riešenie od návrhu až po dokončenie
                                    stavby a kompletné zariadenie.
                                    Sme tu pre Vás, aby sme Vám pomohli s Vašim domovom snov.
                                </p>
                                <img
                                    src="/images/media/stavba-rodinneho-domu.jpg"
                                    alt="media"
                                    className="main-img-meta"
                                />
                                <p>
                                    Sme tu pre Vás, aby sme Vám pomohli pri výbere vhodnej lokality a typu domu podľa
                                    Vašich potrieb a preferencií. Naši odborníci Vám poradia aj pri výbere vhodných
                                    materiálov a technológií, aby bola stavba efektívna a energeticky úsporná.

                                </p>
                                <p>
                                    Vďaka našej dlhoročnej praxi vieme, že každý zákazník má iné požiadavky a predstavy
                                    o svojom domove. Preto sa snažíme počúvať Vaše potreby a prispôsobujeme sa
                                    individuálnym požiadavkám každého klienta.
                                </p>
                                <p>
                                    V našej stavebnej firme sa zameriavame na kvalitu práce a používanie overených
                                    materiálov. Pri výstavbe rodinného domu na kľúč dbáme na každý detail, aby bol váš
                                    domov krásny a útulný.

                                    V prípade, že hľadáte spoľahlivého partnera na výstavbu rodinného domu na kľúč,
                                    neváhajte nás kontaktovať.</p>
                                <div className="mt-50 lg-mt-30">
                                    <div className="row gx-xxl-5">
                                        <div className="col-lg-6">
                                            <h4 className="sub-title mb-20 tx-dark">Náš postup</h4>
                                            <ul className="style-none list-item md-mb-40">
                                                <li>Kontakt.
                                                </li>
                                                <li>Príprava projektu.</li>
                                                <li>Realizácia.</li>
                                                <li>Starostlivosť.</li>
                                            </ul>
                                        </div>
                                        {/*<div className="col-lg-6">*/}
                                        {/*    <h4 className="sub-title mb-20 tx-dark">The Challange</h4>*/}
                                        {/*    <p className="pe-xxl-5">*/}
                                        {/*        Evernote Web offers a complete lineup of features from*/}
                                        {/*        any major Maecena quis interdum, orci at euis dapibus,*/}
                                        {/*        mass ante pharetra tellus done.*/}
                                        {/*    </p>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                {/*<div className="mt-60 mb-20 lg-mt-30 lg-mb-10">*/}
                                {/*    <div className="row gx-xxl-5">*/}
                                {/*        <ProgressBar />*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <p>
                                    Tešíme sa na vašu spoluprácu a dôveru v realizáciu vášho bývacieho projektu. V
                                    každom našom oddelení sa stretávate s priateľskými a skúsenými špecialistami, ktorí
                                    vám budú s plným odhodlaním slúžiť.
                                </p>
                                <h3 className="tx-dark mt-100 mb-50 lg-mt-50">
                                    Toto sú naše najčastejšie otázky
                                </h3>
                                <Faq/>
                            </div>
                            {/* /.service-details-meta */}
                        </div>
                        {/* End .col-xl-9 */}

                        <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
                            <div className="service-sidebar pe-xxl-5 md-mt-60">
                                <div className="service-category mb-40">
                                    <h4 className="tx-dark mb-15">Naše služby</h4>
                                    <ul className="style-none">
                                        <li>
                                            <Link href="/sluzby/projektove-sluzby">Projektové služby</Link>
                                        </li>
                                        <li>
                                            <Link href="/sluzby/rekonstrukcie-na-kluc">Rekonštrukcie na kľuč
                                            </Link>
                                        </li>
                                        <li className="current-page">
                                            <Link href="/sluzby/stavba-rodinneho-domu-na-kluc">Stavba rodinného domu na
                                                kľúč</Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* /.service-category */}

                                <div className="sidebar-quote mb-50">
                                    <img
                                        src="/images/icon/icon_150.svg"
                                        alt="icon"
                                        className="m-auto"
                                    />
                                    <p className="fw-500">
                                        Z kresby na papieri až po siluetu na obzore, tvarujeme budúcnosť.
                                    </p>
                                    {/*<div className="name">- Rashed Kabir</div>*/}
                                </div>
                                {/* /.sidebar-quote */}
                                <h4 className="tx-dark mb-15">Spojte sa s nami.</h4>
                                <Social/>
                            </div>
                            {/* /.service-sidebar */}
                        </div>
                    </div>
                </div>
            </div>
            {/* /.service-details */}
            {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			*/}
            <div className="fancy-short-banner-fifteen pt-150 lg-pt-80 pb-30 position-relative zn2 mt-200 lg-mt-100">
                <CallToActions/>
            </div>
            {/* /.fancy-short-banner-sixteen */}
            {/*
        =============================================
        Contact Section One
        ==============================================
        */}
            <Footer/>
        </>
    );
};

export default ProjektoveSluzby;
