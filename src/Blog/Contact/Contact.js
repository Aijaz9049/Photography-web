import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className="main-contact">

            <header className='header'>
                <div className=" nav-section">
                    <div className="brand-and-navBtn">
                        <span className='brand-name'><b>IMMORTAL WEDDINGS</b></span>
                        <span className='navBtn flex'>
                            <i className="fa-solid fa-bars"></i>
                        </span>
                    </div>
                    <nav className="top-nav">
                        <ul>
                            <li> <Link to="/">Home</Link></li>
                            <li> <Link to="/Gallery">Gallery</Link></li>
                            <li> <Link to="/Blog">Blog</Link></li>
                            <li> <Link to="/Contact" className='active'>Contact</Link></li>
                        </ul>
                    </nav>
                    <span className='search-icon'><i class="fa-solid fa-magnifying-glass"></i></span>
                </div>
                <div className="container about">
                    <div className="about-container">
                        <div className="about-img flex">
                            <img src="https://images.pexels.com/photos/381843/pexels-photo-381843.jpeg?auto=compress&cs=tinysrgb&w=600" alt="photographer image" />

                        </div>
                        <h2>I'm Osama Danish</h2>
                        <h3>Photographer | Traveller</h3>
                        <blockquote>
                            "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever ... It remembers little things , long after you have forgotten everything."
                            <span>Aaron siskind</span>
                        </blockquote>
                    </div>
                    <div className="social-icon">
                        <ul>
                            <li> <a href=""><i class="fa-brands fa-facebook"></i></a></li>
                            <li> <a href=""><i class="fa-brands fa-twitter"></i></a></li>
                            <li> <a href=""><i class="fa-brands fa-instagram"></i></a></li>
                            <li> <a href=""><i class="fa-brands fa-pinterest"></i></a></li>

                        </ul>
                    </div>

                </div>
            </header>


            {/* // Main Section */}
            <section className="section-five">
                <div className="container">
                    <div className="contact-top">
                        <h3>CONTACT ME</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, itaque!</p>
                    </div>
                    <div className="contact-middle">
                        <div>
                            <span className="contact-icon"><i className='fas fa-map-signs'></i></span>
                            <span>Address</span>
                            <p> Kausa Mumbra Thane Mumnbai Maharashtra 400612</p>
                        </div>
                        <div>
                            <span className="contact-icon"><i className='fas fa-phone'></i></span>
                            <span>Contact Number</span>
                            <p> +91 0000000000</p>
                        </div>

                        <div>
                            <span className="contact-icon"><i className='fas fa-paper-plane'></i></span>
                            <span>Email Address</span>
                            <p>info@immortalweddings.com</p>
                        </div>
                        <div>
                            <span className="contact-icon"><i className='fas fa-globe'></i></span>
                            <span>Website</span>
                            <p> www.immortal-weddings.com</p>
                        </div>
                    </div>
                    <div className="contact-bottom">
                        <form className="form">
                            <input type="text" placeholder='Your Name' />
                            <input type="email" placeholder='Your Email' />
                            <input type="text" placeholder='Subject' />
                            <textarea rows="9" placeholder='Message'></textarea>
                            <input type="submit" className='btn' value="Send Message" />
                        </form>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60293.12660593372!2d72.98085976386533!3d19.181202721593543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf117349510b%3A0xc8148b8a43075d71!2sMumbra%2C%20Thane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707993727417!5m2!1sen!2sin"
                                width="100%"
                                height="600"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>


            <footer className='footer'>
                <div className="footer-container container">
                    <div>
                        <h2> Aijaz Khan</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam saepe sunt sit et, explicabo vel! Unde porro, inventore alias odit architecto eum excepturi beatae dicta fugit nobis doloribus iusto. Sed facere veritatis aliquam? Eveniet id et ab soluta, voluptatum libero, non atque architecto vitae adipisci maiores doloremque tempora, voluptate aperiam.</p>

                    </div>
                    <div>
                        <h3>Free subscription</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga animi earum alias numquam ad praesentium quis tempore aliquam et corporis!</p>

                        <div className="subs">
                            <i className='fas fa-envelope'></i>
                            <input type="email" id='email' placeholder='Email Address' />
                            <button type='submit'> SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                {/* <p></p> */}
            </footer>

        </div>

    )
}

export default Contact