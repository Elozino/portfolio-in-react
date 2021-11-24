import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Art from './Open Peeps.png'
import './contact.css'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hudxwwl', 'template_9e15z5a', form.current, 'user_3V2hD8k43lyi0qVmsxaxz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };






    return (
        <div className="illustration" id="contact">
            <div className="collaboration-image">
                <img src={Art} alt="" width="500px" />
            </div>


            <div className="collaboration">
                <h2>COLLABORATION</h2>
                {/**<p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum pellentesque eget feugiat egestas
                    sit turpis. Pulvinar arcu augue posuere semper nisl. Nunc, posuere facilisi dignissim sem erat
                    faucibus purus netus. Mi, mattis a, vitae tempus in donec nisl, tempus, nunc.
                </p> */}


                <form ref={form} className="bg" onSubmit={sendEmail}>
                    <div>
                        <label>Name</label><br />
                        <input type="text" name="user_name" id="" />
                    </div>
                    <div>
                        <label>Email</label><br />
                        <input type="email" name="user_email" id="" />
                    </div>
                    <div>
                        <label>Message</label><br />
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>

                        <button className="contact-btn">Leave a message</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact























// const [email, setEmail] = useState();
//     init("user_3V2hD8k43lyi0qVmsxaxz");

//     function handleClick() {
//         console.log(email)
//         var data = {
//             to_email: email,
//         };

//         emailjs.send("service_hudxwwl", "template_9e15z5a", data, "user_3V2hD8k43lyi0qVmsxaxz")
//             .then(
//                 function (response) {
//                     console.log(response.status, response.text);
//                 },
//                 function (err) {
//                     console.log(err);
//                 }
//             );
//     }
