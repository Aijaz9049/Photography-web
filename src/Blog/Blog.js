import React from 'react'
import './Blog.css'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
    <div className="main__div">
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
                        <li> <Link to="/Blog" className='active'>Blog</Link></li>
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

        <section className="section-four">
            <div className="container">
                <div className="blogs">
                    <div className="blog-wrapper-lg">
                        {/* single blog post */}
                        <div className="blog">
                            <img src="https://images.pexels.com/photos/2883160/pexels-photo-2883160.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div className="blog-content"> <br />
                                <span className="badge">Photography</span>
                                <span className="misc-info"> Published: 1 week a ago | 25 comments</span>
                                <h3 className="blog-title">Best Photography tips for Beginners</h3>
                                <p className="blog-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, repellendus?</p>
                                <a href="#" className='btn'>Read More</a>
                            </div>
                        </div>
                        {/* end of single post */}

                        <div className="blog">
                            <img src="https://images.pexels.com/photos/2883160/pexels-photo-2883160.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div className="blog-content"> <br />
                                <span className="badge">Photography</span>
                                <span className="misc-info"> Published: 1 week a ago | 25 comments</span>
                                <h3 className="blog-titl">Best Photography tips for Beginners</h3>
                                <p className="blog-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, repellendus?</p>
                                <a href="#" className='btn'>Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="blog-wrapper-sm">
                        <div className="blog">
                            <img src="https://images.pexels.com/photos/2883160/pexels-photo-2883160.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div className="blog-content"> <br />
                                <span className="badge">Photography</span>
                                <span className="misc-info"> Published: 1 week a ago | 25 comments</span>
                                <h3 className="blog-titl">Best Photography tips for Beginners</h3>
                                <p className="blog-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, repellendus?</p>
                                <a href="#" className='btn'>Read More</a>
                            </div>
                        </div>

                        <div className="blog">
                            <img src="https://images.pexels.com/photos/3062540/pexels-photo-3062540.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                            <div className="blog-content"> <br />
                                <span className="badge">Photography</span>
                                <span className="misc-info"> Published: 1 week a ago | 25 comments</span>
                                <h3 className="blog-titl">Best Photography tips for Beginners</h3>
                                <p className="blog-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, repellendus?</p>
                                <a href="#" className='btn'>Read More</a>
                            </div>
                        </div>

                        <div className="blog">
                            <img src="https://images.pexels.com/photos/2883160/pexels-photo-2883160.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div className="blog-content"> <br />
                                <span className="badge">Photography</span>
                                <span className="misc-info"> Published: 1 week a ago | 25 comments</span>
                                <h3 className="blog-titl">Best Photography tips for Beginners</h3>
                                <p className="blog-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, repellendus?</p>
                                <a href="#" className='btn'>Read More</a>
                            </div>
                        </div>

                        <div className="blog">
                            <img src="https://images.pexels.com/photos/3062539/pexels-photo-3062539.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                            <div className="blog-content"> <br />
                                <span className="badge">Photography</span>
                                <span className="misc-info"> Published: 1 week a ago | 25 comments</span>
                                <h3 className="blog-titl">Best Photography tips for Beginners</h3>
                                <p className="blog-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, repellendus?</p>
                                <a href="#" className='btn'>Read More</a>
                            </div>
                        </div>

                        <div className="blog">
                            <img src="https://images.pexels.com/photos/2883160/pexels-photo-2883160.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div className="blog-content"> <br />
                                <span className="badge">Photography</span>
                                <span className="misc-info"> Published: 1 week a ago | 25 comments</span>
                                <h3 className="blog-titl">Best Photography tips for Beginners</h3>
                                <p className="blog-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, repellendus?</p>
                                <a href="#" className='btn'>Read More</a>
                            </div>
                        </div>

                        <div className="blog">
                            <img src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <div className="blog-content"> <br />
                                <span className="badge">Photography</span>
                                <span className="misc-info"> Published: 1 week a ago | 25 comments</span>
                                <h3 className="blog-titl">Best Photography tips for Beginners</h3>
                                <p className="blog-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, repellendus?</p>
                                <a href="#" className='btn'>Read More</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >



        <footer className='footer'>
            <div className="footer-container container">
                <div>
                    <h2>Aijaz Khan</h2>
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
    </div >
    )
}

export default Blog