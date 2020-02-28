import Link from 'next/link'
import Layout from '../components/layout'

const Index = () => (
	<Layout>
		<div className="hero is-fullheight">
			<div className="hero-head">
				<section className="logo-box">
					<img src="assets/accepted-logo-dark.svg" />
				</section>
			</div>
			<div className="hero-body">
				<section className="section">
					<h1 className="header-text">
						Stressed about<br />college applications?<br />We can help.
					</h1>
					<p className="cta-description">Accepted pairs you up with real college students who can guide you through the entire process&mdash;from application to acceptance.</p>
					<div className="signup-cta">
						<p className="has-text-gray">Coming soon</p>
					</div>
				</section>
			</div>
		</div>

		<section className="section is-footer">
			<a href="https://instagram.com/acceptedapp" style={{color: 'inherit'}}>
				<div className="socials-ig">
					<img src="/assets/logo-instagram.svg" className="logo-ig" alt="follow us on instagram" />
					<small>&emsp;follow us for updates</small>
				</div>
			</a>
			<p className="has-text-centered imprint">
				<small>&copy; 2020 Accepted Labs. All rights reserved.</small>
			</p>


		</section>

		<style jsx>{`
			.logo-box {
				width: 100%;
				height: 4.8rem;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 1.3rem 1rem;
			}
			.logo-box > img {
				height: 100%;
			}
			.hero-body > .section {
				margin: 0 auto;
				max-width: 70%;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			.header-text {
				font-family: 'Source Serif Pro';
				font-weight: 900;
				color: #2B3548;
				font-size: 5rem;
				text-align: center;
				line-height: 5.5rem;
			}
			.cta-description {
				font-family: 'Red Hat Display';
				font-size: 1.5rem;
				text-align: center;
				margin-top: 20px;
				max-width: 80%;
			}
			button.is-aubergine {
				background: #3F3D56;
				font-family: 'Red Hat Display';
				font-weight: 500;
				font-size: 1rem;
				
			}
			.signup-cta {
				margin-top: 20px;
			}
			.imprint {
				margin-top: 5px;
			}
			.imprint > small {
				font-size: .75rem;
				color: #555555;
			}
			.socials-ig {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				cursor: pointer;
			}
			.socials-ig:hover {
				color: #008ECC;
			}
			.logo-ig {
				width: 1rem;
				color: #555555;
			}
		`}</style>
	</Layout>
)

export default Index