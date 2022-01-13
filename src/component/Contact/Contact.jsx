import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Art from "./Open Peeps.png";
import "./contact.css";

function Contact() {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // var data = {
    //   from_name: nameRef.current.value,
    //   to_name: "Elozino",
    //   message: messageRef.current.value,
    //   email: emailRef.current.value,
    // };

    emailjs
      .sendForm(
        "service_hudxwwl",
        "template_9e15z5a",
        form.current,
        "user_3V2hD8k43lyi0qVmsxaxz"
      )
      .then(
        (result) => {
          console.log("Email sent");
        },
        (error) => {
          console.log("There was an error");
        }
      );

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div className="illustration" id="contact">
      <div className="collaboration-image">
        <img src={Art} alt="" width="500px" />
      </div>

      <div className="collaboration">
        <h2>COLLABORATION</h2>

        <form ref={form} className="bg" onSubmit={sendEmail}>
          <div>
            <label>Name</label>
            <br />
            <input type="text" name="from_name" id="from_name" ref={nameRef} />
          </div>
          <div>
            <label>Email</label>
            <br />
            <input type="email" name="email" id="email" ref={emailRef} />
          </div>
          <div>
            <label>Message</label>
            <br />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              ref={messageRef}
            ></textarea>
          </div>
          <div>
            <button type="submit" className="contact-btn">
              Leave a message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
