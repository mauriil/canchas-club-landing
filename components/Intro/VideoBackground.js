import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import YouTube from 'react-youtube';

class VideoBG extends React.Component {
	render() {
		const opts = {
			height: '100%',
			width: '100%',
			playerVars: {
				autoplay: 1,
				mute: 1,
				loop: 1,
				controls: 0,
				showinfo: 0,
				start: 2	// Video start second  
			},
		};

		return <YouTube 
					videoId='Q8JskeW8phE' 
					className="video-bg" 
					containerClassName="video-bg-wrapper" 
					opts = {opts} 
				/>
	}

	_onReady(event) {
		event.target.playVideo();
	}
}

const VideoBackground = () => {
    return (
        <section id="home" className="banner video-bg bottom-oval">

			<VideoBG />

			{/* <!-- Container --> */}
			<Container>

				<Row className="align-items-center">

					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 offset-lg-3">

						{/* <!-- Banner text --> */}
						<div className="banner-text text-center">

							<h1 className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0s">
								Reservas deportivas en un solo lugar
							</h1>
							
							<p className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
								¿Sos dueño de un club? o ¿Buscas canchas para jugar?
							</p>

							<div className="button-store wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">

								<button type="submit" id="contact-submit" name="send" className="btn d-inline-flex align-items-center m-2 m-sm-0 me-sm-3" > Soy dueño de un club</button>

								<button type="submit" id="contact-submit" name="send" className="btn d-inline-flex align-items-center m-2 m-sm-0" >Busco canchas para jugar</button>
			
								
							
							</div>

						</div>
						
						<div className="empty-30"></div>
						
					</Col>  
					
				</Row>
				
			</Container>
			
			{/* <!-- Image --> */}
			<div className="banner-image-center w-100 wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
				<img src="/images/banner/video-welcome.png" alt="" />
			</div>
			
		</section>
    );
}

export default VideoBackground;