import { Link } from 'react-router-dom';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import { useState } from 'react';

import mandelaArt from '../assets/main.png';
import logo from '../assets/logo.png';
import arrow from '../assets/arrow.png';
import paperclip from '../assets/paperclip.png';
import sunrise from '../assets/sunrise.png';
import mandala from '../assets/Frame 33.svg';
import stroke from '../assets/Vector 5.svg';
import taped from '../assets/taped.png';
import curator from '../assets/curator.jpg';
import branding from '../assets/branding.jpg';
import filming from '../assets/filming.jpg';
import reel from '../assets/Group 11.png';
import oldcam from '../assets/oldcam.png';
import vectorOne from '../assets/Footer Vector-1.png';
import vectorTwo from '../assets/Footer Vector-2.png';
import vectorThree from '../assets/Footer Vector..png';
import indiaGate from '../assets/indiagate.png';
import persons from '../assets/persons.png';
import artcon from '../assets/artcon.png';
import cocacola from '../assets/cocacola.png';
import ted from '../assets/ted.png';

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const onFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://vernanbackend.ezlab.in/api/contact-us/',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            toast.success('Form submitted successfully!');
            console.log(response.data);

            setFormData({
                name: '',
                email: '',
                number: '',
                message: '',
            });
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong! Please try again later.');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: "column", justifyContent: "center" }}>
            <Toaster visibleToasts={1} />
            <div id='varnan' className="page-one">
                <div className="img-container">
                    <img id="mandela" src={mandelaArt} alt="Mandela art" />
                    <img id="logo" src={logo} alt="Varnan logo" />
                </div>
                <div className="page-one-title">
                    <h2>Varnan is where stories find their voice and form</h2>
                    <h4>Films · Brands · Art</h4>
                    <p>
                        Since 2009, V’ve been telling stories - stories of people, their
                        journeys, and the places that shape them. Some begin in polished
                        boardrooms, others in humble village squares. But every story starts
                        the same way - by listening with intention. V believes it takes
                        trust, patience, and an eye for the unseen to capture what truly
                        matters. V doesn’t just tell stories - V honors them.
                    </p>
                </div>
            </div>

            <div id='our-story' className="page-two">
                <div className="page-two-flex-one">
                    <div className="img-container-2">
                        <img id="paperclip" src={paperclip} alt="paperclip" />
                        <p>
                            Some craft films. Some build brands. Some curate art. We bring it
                            all together - a collective of storytellers driven by one belief:
                            every project deserves to be more than just a message; it should
                            become a masterpiece. From first spark to final frame, from raw
                            ideas to timeless visuals - we shape stories that stay with you.
                        </p>
                    </div>
                    <img id="indiaGate" src={indiaGate} alt="India Gate" />
                </div>

                <div className="page-two-flex-two">
                    <h2>Filmmakers. Art Curators. Branding Experts</h2>
                    <img id="arrow" src={arrow} alt="arrow" height={20} />
                    <img id="persons" src={persons} alt="persons" />
                    <h2>Take a closer look at the stories V bring to life.</h2>
                    <button>View Portfolio</button>
                </div>
            </div>

            <div className="page-three">
                <div className="page-three-flex-one">
                    <h4>A montage of familiar faces and names.</h4>
                    <p>
                        Some stories come from the biggest names. Others begin with bold,
                        rising voices. We’ve been fortunate to walk alongside both -
                        listening, creating, and building stories that matter.
                    </p>
                    <div className="note-container">
                        <div className="img-container-3">
                            <h2>85+</h2>
                            <p>Projects</p>
                        </div>
                        <div className="img-container-3">
                            <h2>50+</h2>
                            <p>Happy Clients</p>
                        </div>
                        <div className="img-container-3">
                            <h2>10+</h2>
                            <p>Experts Team</p>
                        </div>
                    </div>
                </div>
                <div className="page-three-flex-two">
                    <h2>
                        Every project is more than just a brief - it’s a new chapter waiting
                        to be written. Together, we've crafted tales that inspire, connect,
                        and endure.
                    </h2>
                    <br />
                    <img id="sunrise" src={sunrise} alt="sunrise" />
                    <div className="companies">
                        {[ted, cocacola, artcon, ted, cocacola, artcon].map((logo, i) => (
                            <img key={i} id="logos" src={logo} alt="partner logo" />
                        ))}
                    </div>
                </div>
            </div>

            <div id='services'  className="page-four">
                <div className="stroked-title">
                    <h2>The storyboard reveals the breadth of our craft.</h2>
                    <img id="stroke" src={stroke} alt="stroke" />
                </div>

                <div className="carousel">
                    <Link to="/ArtCuration" style={{ color: 'black' }}>
                        <div id="art" className="frame">
                            <img id="tape" src={taped} alt="tape" />
                            <img className="image-carousel" src={curator} alt="Art Curation" />
                            <h4>Art Curation</h4>
                        </div>
                    </Link>

                    <Link to="/Branding" style={{ color: 'black' }}>
                        <div id="branding" className="frame">
                            <img id="tape" src={taped} alt="tape" />
                            <img className="image-carousel" src={branding} alt="Branding" />
                            <h4>Branding</h4>
                        </div>
                    </Link>

                    <Link to="/FilmProduction" style={{ color: 'black' }}>
                        <div id="filming" className="frame">
                            <img id="tape" src={taped} alt="tape" />
                            <img className="image-carousel" src={filming} alt="Film Production" />
                            <h4>Film Production</h4>
                        </div>
                    </Link>
                </div>

                <img id="mandala-border" src={mandala} alt="mandala art" />
            </div>

            <div className="page-five">
                <div className="main-title">
                    <h3>The Highlight Reel</h3>
                    <p>Watch the magic we’ve captured.</p>
                </div>
                <div id="reel">
                    <img id="oldcam" src={oldcam} alt="Old camera" />
                    <img id="reel-image" src={reel} alt="Reel" />
                </div>
                <img id="mandala-footer" src={vectorThree} alt="Mandala art footer" />
            </div>

            <div id='contact'  className="page-six">
                <p>
                    Whether you have an idea, a question, or simply want to explore how V
                    can work together, V’re just a message away. Let’s catch up over
                    coffee. Great stories always begin with a good conversation.
                </p>

                <div className="contact-us">
                    <h3>Join the Story</h3>
                    <p>Ready to bring your vision to life? Let’s talk.</p>

                    <form onSubmit={onFormSubmit} className="contact-us-form">
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your Name"
                            type="text"
                        />
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your Email Address"
                            type="email"
                        />
                        <input
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            required
                            placeholder="Enter your Mobile Number"
                            type="tel"
                            pattern="[0-9]{10}"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter Your Message..."
                            rows={4}
                        ></textarea>
                        <button type="submit">Submit</button>
                    </form>

                    <div id="our-details">
                        <p>vernita@varnanfilms.co.in | +91 98736 84567</p>
                    </div>
                </div>

                <img id="mandala-footer-2" src={vectorOne} alt="Mandala art" />
                <img id="mandala-footer-3" src={vectorTwo} alt="Mandala art" />
            </div>
        </div>
    );
}
