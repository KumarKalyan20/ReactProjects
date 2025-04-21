const Projects = () => {
    return (
      <section id="projects" className="py-5 bg-light">
        <div className="container">
          <h2>Projects</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Project One</h5>
                  <p className="card-text">Description of project one.</p>
                </div>
              </div>
            </div>
            {/* Add more projects as needed */}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  