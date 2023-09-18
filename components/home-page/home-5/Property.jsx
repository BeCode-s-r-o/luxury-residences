import Link from "next/link";

const Property = () => {
  const properties = [
    {
      image: "/images/media/img_73.png",
      title: "Projektové služby",
      delay: "100",
      link: "/sluzby/projektove-sluzby"
    },
    {
      image: "/images/media/about_1.png",
      title: "Rekonštrukcie na kľúč",
      delay: "200",
      link: "/sluzby/rekonstrukcia-na-kluc"
    },
    {
      image: "/images/media/about_2.png",
      title: "Stavba rodinného domu na kľuč",
      delay: "300",
      link: "/sluzby/stavba-rodinneho-domu-na-kluc"
    },
  ];

  return (
    <>
      {properties.map((property, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={property.delay}
        >
          <div className="card-style-twentyOne position-relative mt-35">
            <img
              src={property.image}
              alt={property.title}
              height={361}
              width={424}
              className="lazy-img object-cover"
            />
            <div className="hover-overlay d-flex flex-column align-items-center position-absolute tran3s px-4">
              <h3 className="tx-dark px-4 bg-white py-2">{property.title}</h3>
              <Link
                href={property.link}
                className="btn-four fw-500 mt-auto"
              >
                Zistiť viac
              </Link>
            </div>
            {/* /.hover-overlay */}
          </div>
          {/* /.card-style-twentyOne */}
        </div>
      ))}
    </>
  );
};

export default Property;
