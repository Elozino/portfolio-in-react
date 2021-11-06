import React from 'react'
import Art from './Open Peeps.png'
import './contact.css'

function Contact() {

    return (
        <div className="illustration" id="contact">
            <div className="collaboration-image">
                <img src={Art} alt="" width="500px"/>
            </div>
            <div className="collaboration">
                <h2>COLLABORATION</h2>
                {/**<p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum pellentesque eget feugiat egestas
                    sit turpis. Pulvinar arcu augue posuere semper nisl. Nunc, posuere facilisi dignissim sem erat
                    faucibus purus netus. Mi, mattis a, vitae tempus in donec nisl, tempus, nunc.
                </p> */}
                <form action="GET" className="bg">
                    <div>
                        <label>Name</label><br />
                        <input type="text" name="" id="" />
                    </div>
                    <div>
                        <label>Email</label><br />
                        <input type="email" name="" id="" />
                        
                    </div>
                    <div>
                        <label>Message</label><br />
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <a href="mailto:ovedhee@gmail.com">
                        <button className="contact-btn">Leave a message</button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
