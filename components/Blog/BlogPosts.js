import React from 'react';

const BlogPosts = () => {
    return (
        <div className="col-12 col-lg-8 res-margin">
						
			{/* <!-- Blog post with image slider --> */}
			<article className="row blog-post">
				<div className="col-12">
					
					<header>
						<h3>
							<a href="blog-post">Assorted Color Buildings and Sea in Riomaggiore</a>
						</h3>
						<div className="info">
							<span>Matthew Johns</span>
							<span><a href="#">Photography</a></span>
							<span>January 14, 2023</span>
						</div>
					</header>

					<figure>
						<img src="/images/blog/post-slide-1.jpg" className="img-responsive img-rounded" alt="" />
					</figure>

					<p>
						Phasellus id magna ut lacus auctor suscipit in facilisis urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia 
						Mauris molestie, velit in ornare sagittis, eros quam facilisis ligula, non egestas nibh justo tincidunt augue. In at leo vitae risus efficitur laoreet ut nec diam. 
					</p>

					<div className="post-footer clearfix">
						
						<ul className="post-meta">
					
							<li className="post-like d-none d-md-block">
								{/* <!-- Post counters --> */}
								<ul className="post-counters">
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
							</li>

							<li className="post-read-more">
								{/* <!-- Read more --> */}
								<a href="blog-post" className="btn btn-default">Read More</a>
							</li>

							<li className="post-share d-none d-md-block">
								{/* <!-- Share --> */}
								<div className="share-panel share-btn">
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
							</li>
							
						</ul>
						
					</div>

				</div>
			</article>
			
			{/* <!-- Blog post with single image --> */}
			<article className="row blog-post">
				<div className="col-12">
					
					<header>
						<h3>
							<a href="blog-post">Aerial Photography of Snowy Mountain Ranges</a>
						</h3>
						<div className="info">
							<span>Alex Wesly</span>
							<span><a href="#">Lifestyle</a></span>
							<span>March 30, 2022</span>
						</div>
					</header>
					
					<figure>
						<img src="/images/blog/post-image.jpg" className="img-responsive img-rounded" alt="" />
					</figure>

					<p>
						Mauris maximus sem risus. Vivamus malesuada metus nec nibh ullamcorper, sit amet tempor dolor maximus. 
						Praesent eu velit mollis, mollis mauris vel, euismod mauris. Cras porttitor maximus neque nec egestas.
						Aliquam ac lectus sem. Praesent fringilla, lectus ut pretium lorem lacus consectetur ante sodales.
					</p>

					<div className="post-footer clearfix">
						
						<ul className="post-meta">
					
							<li className="post-like d-none d-md-block">
								{/* <!-- Post counters --> */}
								<ul className="post-counters">
									<li>
										<a href="#">
											<i className="far fa-comment"></i> 3
										</a>
									</li>
									<li>
										<a href="#">
											<i className="far fa-heart"></i> 7
										</a>					
									</li>
								</ul>
							</li>

							<li className="post-read-more">
								{/* <!-- Read more --> */}
								<a href="blog-post" className="btn btn-default">Read More</a>
							</li>

							<li className="post-share d-none d-md-block">
								{/* <!-- Share --> */}
								<div className="share-panel share-btn">
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
							</li>
							
						</ul>
						
					</div>

				</div>
			</article>
			
			{/* <!-- Blog post with embed video --> */}
			<article className="row blog-post">
				<div className="col-12">
					
					<header>
						<h3>
							<a href="blog-post">The Little Ghost</a>
						</h3>
						<div className="info">
							<span>Richard Jackson</span>
							<span><a href="#">Development</a></span>
							<span>November 19, 2021</span>
						</div>
					</header>
					
					<figure>
						<div className="video-responsive img-rounded">
							<iframe src="https://player.vimeo.com/video/34492064" allowFullScreen></iframe>
						</div>
					</figure>

					<p>
						Vestibulum sagittis nunc ut dictum luctus. Duis vulputate, dolor in auctor ornare, metus libero sodales eros, ut consectetur leo nunc et dolor. 
						Sed nec efficitur diam. Fusce scelerisque ultrices commodo. Vivamus ut magna in enim faucibus bibendum vel suscipit tellus felis id massa. 
					</p>

					<div className="post-footer clearfix">
						
						<ul className="post-meta">
					
							<li className="post-like d-none d-md-block">
								{/* <!-- Post counters --> */}
								<ul className="post-counters">
									<li>
										<a href="#">
											<i className="far fa-comment"></i> 28
										</a>
									</li>
									<li>
										<a href="#">
											<i className="far fa-heart"></i> 16
										</a>					
									</li>
								</ul>
							</li>

							<li className="post-read-more">
								{/* <!-- Read more --> */}
								<a href="blog-post" className="btn btn-default">Read More</a>
							</li>

							<li className="post-share d-none d-md-block">
								{/* <!-- Share --> */}
								<div className="share-panel share-btn">
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
							</li>
							
						</ul>
						
					</div>

				</div>
			</article>
			
			{/* <!-- Blog post with audio --> */}
			<article className="row blog-post">
				<div className="col-12">
					
					<header>
						<h3>
							<a href="blog-post">Royal Oats ft. Waldo</a>
						</h3>
						<div className="info">
							<span>Jack Nichol</span>
							<span><a href="#">Photography</a></span>
							<span>August 14, 2021</span>
						</div>
					</header>
					
					<figure>
						<div className="video-responsive img-rounded">
							<iframe width="750" height="400" src="https://w.soundcloud.com/player/?visual=true&#038;url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F136949481&#038;show_artwork=true&#038;maxwidth=750&#038;maxheight=1000"></iframe>
						</div>
					</figure>

					<p>
						Sed lectus erat, dignissim tristique accumsan ut, mattis ac elit. Nunc at neque non augue faucibus eleifend. Quisque sagittis nisl id consectetur rhoncus.
						Integer condimentum quam auctor dui lobortis condimentum. Nunc sit amet orci ac tortor accumsan sagittis.
					</p>

					<div className="post-footer clearfix">
						
						<ul className="post-meta">
					
							<li className="post-like d-none d-md-block">
								{/* <!-- Post counters --> */}
								<ul className="post-counters">
									<li>
										<a href="#">
											<i className="far fa-comment"></i> 9
										</a>
									</li>
									<li>
										<a href="#">
											<i className="far fa-heart"></i> 18
										</a>					
									</li>
								</ul>
							</li>

							<li className="post-read-more">
								{/* <!-- Read more --> */}
								<a href="blog-post" className="btn btn-default">Read More</a>
							</li>

							<li className="post-share d-none d-md-block">
								{/* <!-- Share --> */}
								<div className="share-panel share-btn">
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
							</li>
							
						</ul>
						
					</div>

				</div>
			</article>
			
			{/* <!-- Blog post with text only --> */}
			<article className="row blog-post">
				<div className="col-12">
					
					<header>
						<h3>
							<a href="blog-post">Forest Highway With Green Leaves</a>
						</h3>
						<div className="info">
							<span>John Orkwell</span>
							<span><a href="#">Lifestyle</a></span>
							<span>February 12, 2022</span>
						</div>
					</header>
					
					<p>
						Aliquam pulvinar hendrerit lorem sed dictum. Nullam ipsum nulla, ornare non metus nec, fermentum fermentum nisl. 
						Fusce mattis elit vestibulum nunc vehicula convallis ac elementum dolor. Etiam vitae tempor velit, bibendum quam. Aliquam eu faucibus sem. 
						Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos posuere cubilia himenaeos.
					</p>

					<div className="post-footer clearfix">
						
						<ul className="post-meta">
					
							<li className="post-like d-none d-md-block">
								{/* <!-- Post counters --> */}
								<ul className="post-counters">
									<li>
										<a href="#">
											<i className="far fa-comment"></i> 32
										</a>
									</li>
									<li>
										<a href="#">
											<i className="far fa-heart"></i> 29
										</a>					
									</li>
								</ul>
							</li>

							<li className="post-read-more">
								{/* <!-- Read more --> */}
								<a href="blog-post" className="btn btn-default">Read More</a>
							</li>

							<li className="post-share d-none d-md-block">
								{/* <!-- Share --> */}
								<div className="share-panel share-btn">
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
							</li>
							
						</ul>
						
					</div>

				</div>
			</article>
			
			{/* <!-- Pagination --> */}
			<div className="col-12 pl-0 pr-0">
				
				<ul className="pagination justify-content-center justify-content-lg-start">
					
					{/* <!-- Prev --> */}
					<li>
						<a className="d-flex" href="#">
							<i className="fas fa-chevron-left"></i> 
							<span className="text">Prev</span>
						</a>
					</li>
					
					{/* <!-- Numbers --> */}
					<li className="d-none d-md-block"><a href="#">1</a></li>
					<li className="d-none d-md-block"><a href="#">2</a></li>
					<li className="d-none d-md-block"><a className="active" href="#">3</a></li>
					<li className="d-none d-md-block"><a href="#">4</a></li>
					<li className="d-none d-md-block"><a href="#">5</a></li>
					
					{/* <!-- Next --> */}
					<li>
						<a className="d-flex" href="#"> 
							<span className="text">Next</span>
							<i className="fas fa-chevron-right"></i> 
						</a>
					</li>
				
				</ul>
				
			</div>
			
		</div>
    );
};

export default BlogPosts;
