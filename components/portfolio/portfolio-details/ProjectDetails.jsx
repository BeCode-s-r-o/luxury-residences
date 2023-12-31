const ProjectDetails = ({ details }) => {
  if (!details || !details.projectInfo) {
    return null; // or a message indicating that there are no project details
  }

  return (
    <>
      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">Dátum</div>
        <div className="pt-text">{details.projectInfo.date}</div>
      </div>
      {/* End .col-12 */}

      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">
          Miesto projektu
        </div>
        <div className="pt-text">{details.projectInfo.clientName}</div>
      </div>
      {/* End .col-12 */}

      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">
          Typ projektu
        </div>
        <div className="pt-text">{details.projectInfo.projectType}</div>
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default ProjectDetails;
