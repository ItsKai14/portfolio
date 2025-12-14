import { useState } from "react";
import "./styles/Profile.css";

function Profile() {
  const [showBioModal, setShowBioModal] = useState(false);

  const bioText = `
    I like Building Web Pages and Websites using Frameworks like Node and React.
    Currently learning Discord.js to build Discord Admin & Chat Bots.
  `;

  return (
    <>
      <div className="container profile mt-4 mb-5 pb-5">
        {/* PROFILE CARD */}
        <div className="container profile-page bg-dark text-light py-4 mb-2 rounded">
          <h1 className="mx-4 pb-4">
            <i className="fa-regular fa-user me-2"></i> Profile
          </h1>

          <div className="profile-details d-flex gap-4 mt-5 mx-5">
            <div className="position-relative d-inline-block profile-pic-container">
              <img
                src="/My_PFP.jpg"
                alt="Profile"
                className="profile-pic rounded-circle border-4 bg-dark p-1"
              />
            </div>

            <div className="profile-info position-relative m-auto">
              <h3 className="align-items-center">
                Hemant Dabhade
              </h3>

              <pre className="profile-tagline">
                "Full Stack Developer (MERN) - Open to Internships"
              </pre>

              {/* Desktop / tablet bio (hidden on small screens via CSS) */}
              <div className="bio-desktop">
                <p className="mb-2">
                  <strong>Bio:</strong>
                </p>
                <p className="lh-lg">
                  I like Building Web Pages and Websites using Frameworks like Node and React.
                  Currently learning Discord.js to build Discord Admin & Chat Bots.
                </p>
              </div>

              {/* Mobile-only button to open bio prompt */}
              <div className="bio-mobile">
                <button
                  className="btn btn-outline-info btn-sm mt-2"
                  onClick={() => setShowBioModal(true)}
                >
                  View Bio
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="profile-page bg-dark text-light py-4 mb-2 rounded">
          <div className="glass">
            <h1 className="mx-4 pb-4">
              <i className="fas fa-code me-1"></i> Skills
            </h1>
            <div className="row text-center mt-4 px-1 skills">
              <div className="col"><h1><i className="fab fa-html5 text-danger"></i></h1>
                <p>HTML5</p>
              </div>
              <div className="col"><h1><i className="fab fa-css3-alt text-primary"></i></h1>
                <p>CSS3</p>
              </div>
              <div className="col"><h1><i className="fab fa-js text-warning"></i></h1>
                <p>JavaScript</p>
              </div>
              <div className="col"><h1><i className="fab fa-react text-info"></i></h1>
                <p>ReactJs</p>
              </div>
              <div className="col"><h1><i className="fab fa-node text-success"></i></h1>
                <p>NodeJs</p>
              </div>
              <div className="col"><h1><i className="fab fa-node text-success"></i></h1>
                <p>ExpressJs</p>
              </div>
              <div className="col"><h1><i className="fab fa-bootstrap" style={{ color: "rgb(168, 5, 255)" }}></i></h1>
                <p>Bootstrap</p>
              </div>
              <div className="col"><h1><i className="fa fa-database text-success"></i></h1>
                <p>MongoDB</p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT CARD */}
        <div className="profile-page bg-dark text-light py-4 mb-2 rounded">
          <h1 className="mx-4 mb-2 pb-4">
            <i className="fa-solid fa-phone me-2"></i> Contact Me
          </h1>
          <div className="profile-info px-5">
            <div className="row text-center mt-4 px-1 skills">
              <div className="col"><h1><i className="fa-brands fa-linkedin" style={{ color: "#0077B5" }}></i></h1>
                <p>LinkedIn</p>
              </div>
              <div className="col"><h1><i className="fa-regular fa-envelope" style={{ color: "#d15656ff" }}></i></h1>
                <p>Mail</p>
              </div>
              <div className="col"><h1><i className="fa-brands fa-discord" style={{ color: "#7289da" }}></i></h1>
                <p>Discord</p>
              </div>
              <div className="col"><h1><i className="fa-brands fa-instagram instagram-icon"></i></h1>
                <p>Instagram</p>
              </div>
              <div className="col"><h1><i className="fa-brands fa-youtube" style={{ color: "#f31212ff" }}></i></h1>
                <p>YouTube</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small-screen Bio Prompt / Modal */}
      {showBioModal && (
        <div className="bio-modal-backdrop" onClick={() => setShowBioModal(false)}>
          <div
            className="bio-modal bg-dark text-light rounded"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">
                <i className="fa-solid fa-user me-2"></i> Bio
              </h5>
              <button
                className="btn-close btn-close-white"
                onClick={() => setShowBioModal(false)}
              ></button>
            </div>
            <p className="mb-0">{bioText}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
