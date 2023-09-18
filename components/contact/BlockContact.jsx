import Image from "next/image";

const BlockContact = () => {
  const addressBlocks = [
    {
      icon: "/images/icon/icon_147.svg",
      title: "Naša adresa",
      content: "Pekná 3300/19 900 28 Ivanka pri Dunaji",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_148.svg",
      title: "Kontakt",
      content: "Zavolajte alebo nám napíšte",
      link: "tel:+421908937207",
      delay: "200",
    },
    {
      icon: "/images/icon/icon_149.svg",
      title: "Email",
      content: "Samuel Škurňa",
      link: " skurna@luxuryresidences.sk",
      delay: "300",
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div
          className="col-md-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
              <Image width={30} height={30} src={block.icon} alt="icon" />
            </div>
            <h5 className="title">{block.title}</h5>
            <p>
              {block.content} <br />
              {block.link && (
                <a
                  href={block.link}
                  className={
                    block.link.includes("tel:") ? "call" : "webaddress"
                  }
                >
                  {block.link.replace("tel:", "")}
                </a>
              )}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact;