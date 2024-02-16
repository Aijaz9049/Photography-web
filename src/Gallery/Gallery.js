import React from 'react'
import './Gallery.css'
import SimpleLightbox from "simplelightbox";
import { Link } from 'react-router-dom';


const Gallery = () => {

    var lightbox = new SimpleLightbox('.gallery a', { /* options */ });





    return (
        <div className="main-gallery">

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
                            <li> <Link to="/Gallery" className='active'>Gallery</Link></li>
                            <li> <Link to="/Blog">Blog</Link></li>
                            <li> <Link to="/Contact">Contact</Link></li>

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


            <div className="section-three">
                <div className="container">
                    <div className='Gallery'>
                        <a href="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600">
                            <div className="single-img">
                                <img src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <div className="single-img-content">
                                    <h3>Beautyful Work</h3>
                                </div>
                            </div>
                        </a>
                        <a href="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600">
                            <div className="single-img">
                                <img src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <div className="single-img-content">
                                    <h3>Beautyful Work</h3>
                                </div>
                            </div>
                        </a>
                        <a href="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600">
                            <div className="single-img">
                                <img src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <div className="single-img-content">
                                    <h3>Beautyful Work</h3>
                                </div>
                            </div>
                        </a>
                        <a href="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600">
                            <div className="single-img">
                                <img src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <div className="single-img-content">
                                    <h3>Beautyful Work</h3>
                                </div>
                            </div>
                        </a>
                        <a href="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600">
                            <div className="single-img">
                                <img src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <div className="single-img-content">
                                    <h3>Beautyful Work</h3>
                                </div>
                            </div>
                        </a>
                        <a href="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600">
                            <div className="single-img">
                                <img src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <div className="single-img-content">
                                    <h3>Beautyful Work</h3>
                                </div>
                            </div>
                        </a>
                        <a href="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600">
                            <div className="single-img">
                                <img src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <div className="single-img-content">
                                    <h3>Beautyful Work</h3>
                                </div>
                            </div>
                        </a>
                        <a href="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600">
                            <div className="single-img">
                                <img src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <div className="single-img-content">
                                    <h3>Beautyful Work</h3>
                                </div>
                            </div>
                        </a>
                        <a href="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600">
                            <div className="single-img">
                                <img src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <div className="single-img-content">
                                    <h3>Beautyful Work</h3>
                                </div>
                            </div>
                        </a>
                        <a href="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600">
                            <div className="single-img">
                                <img src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <div className="single-img-content">
                                    <h3>Beautyful Work</h3>
                                </div>
                            </div>
                        </a>
                        <a href="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600">
                            <div className="single-img">
                                <img src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <div className="single-img-content">
                                    <h3>Beautyful Work</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

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

export default Gallery