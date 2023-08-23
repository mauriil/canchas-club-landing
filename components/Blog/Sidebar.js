import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper col-12 col-lg-4">
						
			{/* <!-- Search --> */}
			<Row className="sidebar">
				<Col className="col-12">
					
					<div className="search-form">
						<input type="text" name="search" className="search-field" placeholder="Search..." />
						<button className="search-submit" type="submit"><i className="fas fa-search"></i></button>
					</div>

				</Col>
			</Row>
			
			{/* <!-- Author --> */}
			<Row className="sidebar">
				<Col className="col-12">
					
					<div className="author-content">
						<img src="/images/blog/author.jpg" alt="" />
						<h5>Frances Lawrence</h5>
						<p className="position">Photographer &amp; Blogger</p>
						<p>
							Vestibulum vel est vel lorem porta accumsan eu non ligula. 
							Maecenas id felis semper.
						</p>
					</div>
					
					<div className="author-social">
						<div className="social">
							<a href="#"><i className="fab fa-twitter"></i></a>
							<a href="#"><i className="fab fa-facebook-f"></i></a>
							<a href="#"><i className="fab fa-linkedin-in"></i></a>
							<a href="#"><i className="fab fa-instagram"></i></a>
							<a href="#"><i className="fab fa-pinterest-p"></i></a>								
						</div>
					</div>

				</Col>
			</Row>
			
			{/* <!-- Instagram feed --> */}
			<Row className="sidebar">
				<Col className="col-12">

					<header>
						<h4>Instagram</h4>
					</header>

					<Row className="instagram-feed">
					
						<Col className="col-4">
							<a href="#">
								<img src="/images/blog/instagram-1.jpg" alt="" />
							</a>
						</Col>

						<Col className="col-4">
							<a href="#">
								<img src="/images/blog/instagram-2.jpg" alt="" />
							</a>
						</Col>

						<Col className="col-4">
							<a href="#">
								<img src="/images/blog/instagram-3.jpg" alt="" />
							</a>
						</Col>

						<Col className="col-4">
							<a href="#">
								<img src="/images/blog/instagram-4.jpg" alt="" />
							</a>
						</Col>

						<Col className="col-4">
							<a href="#">
								<img src="/images/blog/instagram-5.jpg" alt="" />
							</a>
						</Col>

						<Col className="col-4">
							<a href="#">
								<img src="/images/blog/instagram-6.jpg" alt="" />
							</a>
						</Col>
						
						<Col className="col-4">
							<a href="#">
								<img src="/images/blog/instagram-7.jpg" alt="" />
							</a>
						</Col>

						<Col className="col-4">
							<a href="#">
								<img src="/images/blog/instagram-8.jpg" alt="" />
							</a>
						</Col>

						<Col className="col-4">
							<a href="#">
								<img src="/images/blog/instagram-9.jpg" alt="" />
							</a>
						</Col>

					</Row>

				</Col>
			</Row>
			
			{/* <!-- Recent posts --> */}
			<Row className="sidebar">
				<Col className="col-12">

					<header>
						<h4>Recent Posts</h4>
					</header>

					{/* <!-- Post 1 --> */}
					<div className="recent-post">
						<div className="recent-post-image" data-count="1">
							<a href="blog-post">
								<img src="/images/blog/recent-post-1.jpg" alt="" />
							</a>
						</div>
						
						<div className="recent-post-info">
							
							<h6>
								<a href="blog-post">Assorted Color Buildings and Sea in Riomaggiore</a>
							</h6>
							
							<p>January 14, 2023</p>
							
						</div>
					</div>
					
					{/* <!-- Post 2 --> */}
					<div className="recent-post">
						<div className="recent-post-image" data-count="2">
							<a href="blog-post">
								<img src="/images/blog/recent-post-2.jpg" alt="" />
							</a>
						</div>
						
						<div className="recent-post-info">
							
							<h6>
								<a href="blog-post">Aerial Photography of Snowy Mountain Ranges</a>
							</h6>
							
							<p>March 30, 2022</p>
							
						</div>

					</div>
					
					{/* <!-- Post 3 --> */}
					<div className="recent-post">
						<div className="recent-post-image" data-count="3">
							<a href="blog-post">
								<img src="/images/blog/recent-post-3.jpg" alt="" />
							</a>
						</div>
						
						<div className="recent-post-info">
							
							<h6>
								<a href="blog-post">Forest Highway With Green Leaves</a>
							</h6>
							
							<p>February 12, 2022</p>
							
						</div>
					</div>

				</Col>
			</Row>

			{/* <!-- Categories --> */}
			<Row className="sidebar">
				<Col className="col-12">

					<header>
						<h4>Categories</h4>
					</header>

					<ul className="menu">
						<li><a href="blog">Photography</a> <span>17</span></li>
						<li><a href="blog">Lifestyle</a> <span>9</span></li>
						<li><a href="blog">Development</a> <span>2</span></li>
					</ul>

				</Col>
			</Row>
			
			{/* <!-- Tag cloud --> */}
			<Row className="sidebar">
				<Col className="col-12">

					<header>
						<h4>Tag Cloud</h4>
					</header>

					<div className="tags clearfix">
						<a href="#" className="tag">HTML5</a>
						<a href="#" className="tag">CSS3</a>
						<a href="#" className="tag">jQuery</a>
						<a href="#" className="tag">UX / UI</a>                                
						<a href="#" className="tag">Web</a>
						<a href="#" className="tag">Graphic</a>
						<a href="#" className="tag">Design</a>
						<a href="#" className="tag">Development</a>
					</div>

				</Col>
			</Row>
			
		</div>
    );
};

export default Sidebar;
