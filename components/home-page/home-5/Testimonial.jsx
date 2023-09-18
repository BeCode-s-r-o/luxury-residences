import Slider from "react-slick";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      icon: "/images/icon/icon_42.svg",
      feedback:
        "<p>Keď sme sa rozhodli pre kompletnú rekonštrukciu nášho starého domu, hľadali sme firmu, ktorá by nám ponúkla komplexné služby na klúč. " +
          "</p>" +
          "<p>S firmou LR development sme narazili na skutočný zlatý poklad. Od prvého kontaktu sme cítili profesionálny prístup a ochotu počúvať naše predstavy.\n" +

          "</p>" +
          "<p>S firmou LR development sme mali skutočne pozitívnu skúsenosť a vrelo ju odporúčame každému, kto si praje kvalitnú a bezproblémovú rekonštrukciu svojho domova na klúč.</p>",
      name: "Petra a Lukáš",
    },
    // {
    //   id: 2,
    //   icon: "/images/icon/icon_42.svg",
    //   feedback:
    //     "We’v 9,000 agents around the country, Find agents near your neighborhood.",
    //   name: "Jane Doe",
    // },
    // {
    //   id: 3,
    //   icon: "/images/icon/icon_42.svg",
    //   feedback:
    //     "We’v 9,000 agents around the country, Find agents near your neighborhood.",
    //   name: "Bob Smith",
    // },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div className="item" key={testimonial.id}>
            <div className="feedback-block-twelve">
              <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                <img src={testimonial.icon} alt="icon" />
              </div>
              <div className="tx-dark mt-35 lg-mt-20" dangerouslySetInnerHTML={{ __html: testimonial.feedback }}></div>
              <p className="tx-dark fs-4 fw-500">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
