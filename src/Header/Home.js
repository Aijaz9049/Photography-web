import React, { useEffect } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';


const Home = () => {

    useEffect(() => {
        const showBtn = document.querySelector('.navBtn');
        const topNav = document.querySelector('.top-nav');

        // if (showBtn && topNav) {
        showBtn.addEventListener('click', function () {
            if (topNav.classList.contains('showNav')) {
                topNav.classList.remove('showNav');
                showBtn.innerHTML = '<i class= "fas fa-bars"></i>';
            } else {
                topNav.classList.add('showNav');
                showBtn.innerHTML = '<i class= "fas fa-times"></i>';
            }
        });
    });




    return (
        <div className="main-bodys">
            <header className='header'>
                <div className="nav-section">
                    <div className="brand-and-navBtn">
                        <span className='brand-name'><b>IMMORTAL WEDDINGS</b></span>
                        <span className='navBtn flex'>
                            <i className="fa-solid fa-bars"></i>
                        </span>
                    </div>
                    <nav className="top-nav">
                        <ul>
                            <li> <Link to="/" className='active'>Home</Link></li>
                            <li> <Link to="Gallery">Gallery</Link></li>
                            <li> <Link to="Blog">Blog</Link></li>
                            <li> <Link to="Contact">Contact</Link></li>
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
            <section className='section-one'>
                <div className="container">
                    <div className="sec-one-left">
                        {/* <img src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}
                        <div>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate totam quam excepturi dolorem, vero laborum! Quaerat numquam fugit incidunt consectetur!</p>
                            <a href="" className='btn'>view all</a>
                        </div>
                    </div>

                    <div className="sec-one-right">
                        <div className="work-content">
                            <h3>AMAZING TEAM WORK WITH PROFESSIONAL PHOTOGRAPHER</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis necessitatibus autem rem ullam et eos cumque repudiandae impedit harum odio, exercitationem est reiciendis. Culpa ab consequuntur obcaecati dolore ipsam mollitia ratione explicabo odio quod quo aspernatur, quia vitae fuga cum repudiandae similique possimus hic aperiam exercitationem sapiente ad optio!</p>
                            <a href="" className='btn'>view all</a>
                        </div>
                        <div className="work-imgs">
                            <div className="work-img-1">
                                {/* <img src="" alt="" /> */}
                            </div>
                            <div className="work-img-2">
                                {/* <img src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> */}
                            </div>
                        </div>

                        <h3>"Taking an image, freezing a moment , reveals how rich reality truly is."</h3>
                    </div>
                </div>
            </section>

            <section className='section-two'>
                <div className="container">
                    <h2>FOLLOW ON INSTAGRAM</h2>
                    <span>@ns1.khanaijaz</span>
                    <div className="insta-imgs">
                        <div>
                            <img src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div className="icon-overlap flex">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div className="icon-overlap flex">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div className="icon-overlap flex">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div className="icon-overlap flex">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
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

export default Home