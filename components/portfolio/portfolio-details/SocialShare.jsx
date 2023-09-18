const SocialShare = () => {
  const socialMedia = [
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      url: "https://www.facebook.com/LuxuryResidences.sk",
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/luxuryresidencess/",
    },
  ];

  return (
    <ul className="style-none social-icon circle-shape d-flex pt-10">
      {socialMedia.map((platform) => (
        <li
          key={platform.name}
          className="rounded-circle d-flex align-items-center justify-content-center"
        >
          <a href={platform.url}>
            <i className={platform.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialShare;
