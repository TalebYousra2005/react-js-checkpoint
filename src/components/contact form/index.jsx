export const ContactForm = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center text-success m-3">Contact</h1>
        <div className="row b-bottom">
          <div className="col-md-10 offset-md-1">
            <form>
              <div className="form-group m-3">
                <label className="form-label">Full name</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group m-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group m-3">
                <label className="form-label">Message</label>
                <textarea type="text" className="form-control" />
              </div>
            </form>
            <button className="btn btn-success m-3 ">SEND</button>
          </div>
        </div>
      </div>
    </>
  );
};
