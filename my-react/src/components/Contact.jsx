const Contact = () => {
    return (
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2>Contact</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button className="btn btn-primary">Send</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  