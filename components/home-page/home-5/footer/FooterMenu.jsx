const FooterMenu = () => {
  const footerData = [
    {
      title: "Domov",
      links: [
        { title: "O nás", href: "/" },
        { title: "Portfólio", href: "/portfolio" },
        { title: "Služby", href: "/sluzby" },
        { title: "Kontaktovať", href: "/contact" },
      ],
      colClass: "col-lg-2 col-sm-4 mb-30", // Add col class for this section
    },
    {
      title: "Služby",
      links: [
        { title: "Projektové služby", href: "/sluzby/projektove-sluzby" },
        { title: "Rekonštrukcia na kľúč", href: "/sluzby/rekonstrukcia-na-kluc" },
        { title: "Stavba rodinného domu na kľúč", href: "/sluzby/stavba-rodinneho-domu-na-kluc" },
      ],
      colClass: "col-lg-2 col-sm-4 mb-30", // Add col class for this section
    },
  ];

  return (
    <>
      {footerData.map((section, index) => (
        <div className={section.colClass} key={index}>
          <h5 className="footer-title text-white fw-500">{section.title}</h5>
          <ul className="footer-nav-link style-none">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterMenu;
