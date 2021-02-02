import logo from './logo.svg'
import './App.css'
import social from '../src/images/social.svg'

function Contact() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6" col-10 mx-auto>
            <img
              src={social}
              className="img-fluid contact-img"
              alt="contact img"
              height="350"
              width="350"
            />
          </div>
          <div className="col-md-6" col-10 mx-auto>
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  <strong>Full Name</strong>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  <strong>Email Address</strong>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  <strong>Contact Number</strong>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Contact Number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  <strong>Message For Us</strong>
                </label>
                <textarea
                  class="form-control textarea"
                  id="exampleFormControlTextarea1"
                  rows="3"></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
