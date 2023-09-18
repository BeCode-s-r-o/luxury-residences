const Social = () => {
  const socialLinks = [
    { icon: "fab fa-facebook-f", link: "https://www.facebook.com/LuxuryResidences.sk" },
    { icon: "fab fa-instagram", link: "https://www.instagram.com/luxuryresidencess/" },
  ];

  return (
    <ul className="d-flex social-icon style-none pe-4 gap-2">
      {socialLinks.map((link, i) => (
        <li key={i}>
          <a href={link.link} target="_blank" rel="noopener noreferrer">
            <i className={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
