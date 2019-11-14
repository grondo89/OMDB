import React from "react";

const SignUp = ({handleEmailInput, handlePassInput, handleSubmit}) => {
  return (
    <div>
      <div
        className="modal fade"
        id="modalSignupForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Sign Up</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form >
              <div className="modal-body mx-3">
                <div className="md-form mb-5">
                  <i className="fas fa-envelope prefix grey-text" />
                  <input
                    type="email"
                    id="defaultForm-email"
                    placeholder="Your email"
                    className="form-control validate"
                    onChange={handleEmailInput}
                  />
                </div>

                <div className="md-form mb-4">
                  <i className="fas fa-lock prefix grey-text" />
                  <input
                    type="password"
                    id="defaultForm-pass"
                    placeholder="Your password"
                    className="form-control validate"
                    onChange={handlePassInput}
                  />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-default"
                  data-toggle="modal"
                  data-target="#modalSignupForm"
                  style={{ backgroundColor: "#113692" }}
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
