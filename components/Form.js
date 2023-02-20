import React from "react";
import style from "../styles/Form.module.css";
class Forem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  handleOnChange(value) {
    console.log("Captcha value:", value);
  }

  render() {
    return (
      <>
        <form
          className="container"
          style={{ maxWidth: "960px", padding: "40px" }}
          onSubmit={this.handleSubmit}
        >
          <h3 className={style.formheading}>Submit Your Application</h3>
          
          <div
            className="btn-group mb-5 mt-4 "
            role="group"
            aria-label="Basic checkbox"
          >
            <input
              type="file"
              className="uploadfile"
              id="formFile"
              style={{ display: "none" }}
            />
            <label
              for="formFile"
              type="file"
              id="formFile"
              className=" btn btn-outline-primary w-25 rounded"
            >
              Apply With Resume <span className="fst-normal text-danger">*</span>
            </label>
          </div>
          <div className={style.form1}>
            <div className={style.form}>
              <div className="form-floating mb-3">
                <input
                  type="Name"
                  className={style.formcontrol}
                  id="floatingInput"
                  placeholder=""
                  style={{}}
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <span className={style.label}>
                  <label for="floatingInput">First Name <span className="fst-normal text-danger">*</span></label>
                </span>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="Name"
                  className={style.formcontrol}
                  id="floatingInput"
                  placeholder=""
                  style={{ maxWidth: "250px", maxHeight: "35px" }}
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <span className={style.label}>
                  <label for="floatingInput">Middle Name</label>
                </span>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="Name"
                  className={style.formcontrol}
                  id="floatingInput"
                  placeholder=""
                  style={{ maxWidth: "250px", maxHeight: "35px" }}
                />
                <span className={style.label}>
                  <label for="floatingInput">Last Name <span className="fst-normal text-danger">*</span></label>
                </span>
              </div>
            </div>
            <div className="form-floating">
              <input
                type="Name"
                className={style.formcontrol}
                id="floatingInput"
                placeholder=""
              />
              <span className={style.label}>
                <label for="floatingInput">Email <span className="fst-normal text-danger">*</span></label>
              </span>
            </div>

            <div className="form-floating mt-3">
              <input
                type="Name"
                className={style.formcontrol}
                id="floatingInput"
                placeholder=""
              />
              <span className={style.label}>
                <label for="floatingInput">Mobile</label>
              </span>
            </div>

            <div className={style.div}>
              <p className="" style={{ fontSize: "13px" }}>
                Will you be willing to work from Office
              </p>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label
                  className="form-check-label"
                  for="inlineRadio1"
                  style={{ fontSize: "13px" }}
                >
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label
                  className="form-check-label"
                  for="inlineRadio2"
                  style={{ fontSize: "13px" }}
                >
                  No
                </label>
              </div>
            </div>

            <div className="form-floating mt-3">
              <input
                type="Name"
                className={style.formcontrol}
                id="floatingInput"
                placeholder=""
              />
              <span className={style.label}>
                <label for="floatingInput">Years of Experience</label>
              </span>
            </div>

            <div className="form-floating mt-3">
              <input
                type="Name"
                className={style.formcontrol}
                id="floatingInput"
                placeholder=""
              />
              <span className={style.label}>
                <label for="floatingInput">
                  Please mention your expected CTC
                </label>
              </span>
            </div>

            <div className="form-floating mt-3">
              <input
                type="Name"
                className={style.formcontrol}
                id="floatingInput"
                placeholder=""
              />
              <span className={style.label}>
                <label for="floatingInput">
                  Please mention your Notice period *
                </label>
              </span>
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" className={style.label1}>
                Describe any design projects you've previously handled.
              </label>
              <textarea
                className={style.formcontrol}
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" className={style.label1}>
                What would be the one design change you would want to bring to
                Finshots? *{" "}
              </label>
              <textarea
                className={style.formcontrol}
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div class="col-auto">
            <button
              type="submit"
              className="btn btn-primary mb-3 mt-4"
              style={{ height: "50px", minWidth: "200px" }}
            >
              Submit Application
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Forem;