import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlogDetails = (props) => {
    return (
        <Col className="col-12 col-lg-8 res-margin">
						
            {/* <!-- Article --> */}
            <article className="row blog-post">
                
                <Col className="col-12">								

                    <p>
                        Phasellus id magna ut lacus auctor suscipit in facilisis urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia 
                        Mauris molestie, velit in ornare sagittis, eros quam facilisis ligula, non egestas nibh justo tincidunt augue. In at leo vitae risus efficitur laoreet ut nec diam. 
                    </p>
                    
                    <blockquote>								
                        <p>Ignissimos ducimus qui blanditiis praesentium volup tatum deleniti atque corrupti quos dolores.</p>
                        <p><cite>Diana Bowman</cite></p>
                    </blockquote>
                    
                    <p>
                        <img src="/images/blog/post-slide-1.jpg" className="img-responsive img-rounded" alt="Image" />
                    </p>
                    
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    
                    <ul>
                        <li>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</li>
                        <li>Curabitur ante risus, congue ut sem quis, volutpat bibendum ante.</li>
                        <li>Quisque in tortor at diam pellentesque imperdiet quis nec nulla.</li>
                    </ul>
                    
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>								
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                
                </Col>
                
            </article>   
            
            {/* <!-- Post footer --> */}
            <div className="post-footer single-post-footer clearfix">
                
                {/* <!-- Post tags --> */}
                <div className="tags">
                    <a href="#" className="tag">sunset</a> 
                    <a href="#" className="tag">venice</a> 
                    <a href="#" className="tag">canal</a>
                    <a href="#" className="tag">sea</a>
                    <a href="#" className="tag">gondola</a>
                </div>
                        
                {/* <!-- Share --> */}
                <div className="share-panel share-btn d-none d-md-block">
                    <p><i className="fas fa-share-alt"></i>Share</p>
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* <!-- Post counters --> */}
                <ul className="post-counters d-none d-md-block">
                    <li>
                        <a href="#">
                            <i className="far fa-comment"></i> 12
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="far fa-heart"></i> 5
                        </a>					
                    </li>
                </ul>

            </div>
            
            {/* <!-- Delimiter --> */}
            <hr />
            
            {/* <!-- Author --> */}
            <div className="post-author text-center">

                <div className="avatar">
                    <a href="#">
                        <img src="/images/blog/avatar.jpg" className="avatar-100 rounded-circle" width="100" height="100" alt="" />
                    </a>
                </div>

                <div className="description">
                    <span>
                        About Author
                    </span>
                    <h4>
                        <a href="#">AthenaStudio</a>
                    </h4>
                    <p>
                        Quisque rhoncus lectus sit amet ante iaculis maximus. 
                        Vivamus eget sodales purus. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec nec odio nulla.
                    </p>
                </div>

            </div>
            
            {/* <!-- Prev/Next posts --> */}
            <div className="post-navigation-wrapper">

                <Row className="divider">
                    <Col className="col-12">

                        <nav className="navigation post-navigation">
                            <div className="nav-links">
                                <div className="nav-previous">
                                    <a href="#">
                                        <img src="/images/blog/recent-post-2.jpg" alt="" />
                                        <div>
                                            <span>Previous Article</span>
                                            Forest Highway With Green Leaves
                                        </div>
                                    </a>
                                </div>
                                <div className="nav-next">
                                    <a href="#">
                                        <img src="/images/blog/recent-post-3.jpg" alt="" />
                                        <div>
                                            <span>Next Article</span>
                                            Aerial Photography of Snowy Mountain Ranges
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </nav>

                    </Col>
                </Row>

            </div>
            
            {/* <!-- Delimiter --> */}
            <hr />
            
            {/* <!-- Comments --> */}
            <div className="comments">

                <Row>
                    <Col className="col-12">
                        <header>
                            <h3>3 Comments</h3>
                        </header>
                    </Col>
                </Row>

                <Row>
                    <Col className="col-12 clearfix">

                        {/* <!-- Comment 1 --> */}
                        <div className="user-comment">

                            <div className="user-comment-inner">
                                <div className="image">
                                    <img src="/images/blog/people-1.jpg" className="img-responsive rounded-circle" alt="Photo" />
                                </div>

                                <div className="details">
                                    <div className="info">
                                        <span className="author">Rose Johnson</span>
                                        <span className="date"><span>Posted on</span> October 30, 2020</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Quisque vulputate lorem a nisl faucibus, eu consectetur leo maximus. Nulla facilisis nisi nunc, ac tempor ipsum dapibus non. Curabitur non iaculis dui, eu tempus ipsum. Fusce ut porta urna. In sit amet pharetra ligula. Ut posuere quis elit laoreet efficitur.
                                        </p>
                                    </div>
                                    <div className="reply">
                                        <a href="#comment-form"><i className="fas fa-reply"></i> Reply</a>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Comment reply --> */}
                            <div className="user-comment bypostauthor">

                                <div className="user-comment-inner">
                                    <div className="image">
                                        <img src="/images/blog/people-2.jpg" className="img-responsive rounded-circle" alt="Photo" />
                                    </div>

                                    <div className="details">
                                        <div className="info">
                                            <span className="author">Billie James</span>
                                            <span className="date"><span>Posted on</span> November 3, 2020</span>
                                        </div>
                                        <div className="text">
                                            <p>
                                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum fermentum ligula ut nisi mattis, ac laoreet odio pulvinar. Vivamus consequat.
                                            </p>
                                        </div>
                                        <div className="reply">
                                            <a href="#comment-form"><i className="fas fa-reply"></i> Reply</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* <!-- Comment 2 --> */}
                        <div className="user-comment">

                            <div className="user-comment-inner">
                                <div className="image">
                                    <img src="/images/blog/people-no-image.jpg" className="img-responsive rounded-circle" alt="Photo" />
                                </div>

                                <div className="details">
                                    <div className="info">
                                        <span className="author">Ashley Swift</span>
                                        <span className="date"><span>Posted on</span> October 28, 2020</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Vivamus tincidunt bibendum urna eu auctor. Praesent sit amet tempor nisl. Duis eu enim eleifend, hendrerit dolor ut, tempus diam. Mauris porttitor, purus vel elementum porta, tortor diam vestibulum enim, in viverra metus libero nec mi. Etiam pretium velit.
                                        </p>
                                    </div>
                                    <div className="reply">
                                        <a href="#comment-form"><i className="fas fa-reply"></i> Reply</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </Col>
                </Row>

            </div>

            {/* <!-- Leave a comment --> */}
            <div className="comment-form" id="comment-form">

                <Row>
                    <Col className="col-12">
                        <header>
                            <h3>Leave a Comment</h3>
                            <p>Your email address will not be published or shared.</p>
                        </header>
                    </Col>
                </Row>

                <Row>

                    {/* <!-- Fields --> */}
                    <Col className="col-12 col-lg-6">
                        <div className="form-group mt-2 mb-3">
                            <input type="text" name="name" className="form-control field-name" placeholder="Name" />
                        </div>
                    </Col>

                    <Col className="col-12 col-lg-6">
                        <div className="form-group mt-2 mb-3">
                            <input type="email" name="email" className="form-control field-email" placeholder="Email" />
                        </div>
                    </Col>
                
                </Row>
                
                <Row>

                    <Col className="col-12 col-lg-12">
                        <div className="form-group mt-2 mb-3">
                            <textarea name="comment" className="form-control field-comment" rows="4" placeholder="Comment"></textarea>
                        </div>
                    </Col>

                </Row>

                <Row>
                    
                    {/* <!-- Submit button --> */}
                    <Col className="col-12 col-lg-12 mt-2">
                        <button type="submit" className="btn btn-default" id="contact-submit">Post Comment</button>
                    </Col>
                    
                </Row>

            </div>
            
        </Col>
    );
}

export default BlogDetails;