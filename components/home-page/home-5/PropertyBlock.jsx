import Image from "next/image";

// const properties = [
//   {
//     imgSrc: "/images/media/show_case_1_1.png",
//     name: "Obývacia časť",
//     address: "Bratislava",
//     // price: "$34,900",
//   },
//   {
//     imgSrc: "/images/media/show_case_2_2.png",
//     name: "Kuchyňa",
//     address: "Bratislava",
//     // price: "$28,100",
//   },
//   {
//     imgSrc: "/images/media/show_case_3_1.png",
//     name: "Obývacia izba",
//     address: "Bratislava",
//     // price: "$42,500",
//   },
// ];


import portfolio from "../../../data/portfolio";

const Property = () => {
  return (
    <>
      {portfolio.map((property, index) => (
        <div key={index} className="col-lg-4 col-sm-6">
          <div className="card-style-twentyTwo mt-35">
            <Image
              width={424}
              height={361}
              src={property.image}
              alt="media"
              style={{objectFit: "cover"}}
              className="lazy-img w-100"
            />
            <div className="text-meta">
              <h4>
                <a href={"/portfolio/" + property.id } className="property-name">
                  {property.name}
                </a>
              </h4>
              <p className="fs-18">{property.projectInfo.clientName}</p>
              <div className="d-flex align-items-center justify-content-between">
                <strong className="price fw-500 tx-dark">
                  {property.price}
                </strong>
                <a href={"/portfolio/" + property.id } className="read-more tran3s">
                  <i className="bi bi-arrow-up-right" />
                </a>
              </div>
            </div>
            {/* /.text-meta */}
          </div>
          {/* /.card-style-twentyTwo */}
        </div>
      ))}
    </>
  );
};

export default Property;
