const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="form-style-one" data-aos="fade-up">
      <form onSubmit={handleSubmit}>
        <div className="messages" />
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                type="text"
                placeholder="Vaše meno*"
                name="name"
                required="required"
                data-error="Name is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-50">
              <input
                type="email"
                placeholder="Emaíl*"
                name="email"
                required="required"
                data-error="Valid email is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta form-group mb-50">
              <input
                  type="phone"
                  placeholder="Telefónne číslo*"
                  name="phone"
                  required="required"
                  data-error="Telefónne číslo je povinné."
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <textarea
                placeholder="Vaša otázka / správa*"
                name="message"
                required="required"
                data-error="Please,leave us a message."
                defaultValue={""}
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <button className="btn-twentyOne fw-500 tran3s d-block">
              Poslať správu
            </button>
          </div>
          {/* End .col-12 */}
        </div>
        {/* End .row */}
      </form>
    </div>
  );
};

export default ContactForm;
