import React from 'react';
import './Footer.css';
import LogoImg from '../assets/Logo.png';

export default function Footer() {
	return (
		<footer className="lr-footer">
			<div className="wave" aria-hidden="true">
				<svg viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M0,0V46.29c47.57,22,103.24,29.68,158,24,70.74-7.48,136.13-36.71,206-45.34C455,13,520,28,588,43.09c72.57,15.83,144.25,31.23,216,20.09,59.76-9.35,113.1-36.37,171-49.34,47.7-10,94.66-6.19,141,9.91V0Z" className="shape-fill"></path>
				</svg>
			</div>

			<div className="lr-footer__inner">
				<div className="lr-footer__brand">
					<img src={LogoImg} alt="La Ricetta" className="lr-footer__logo" />
					<p className="lr-footer__tag">Taste the joy — recipes & stories</p>
				</div>

				<div className="lr-footer__links">
					<div className="lr-footer__col">
						<h4>Explore</h4>
						<ul>
							<li><a href="#home">Home</a></li>
							<li><a href="#recipes">Recipes</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
					</div>

					<div className="lr-footer__col">
						<h4>Community</h4>
						<ul>
							<li><a href="#blog">Blog</a></li>
							<li><a href="#events">Events</a></li>
							<li><a href="#contributors">Contribute</a></li>
						</ul>
					</div>

					<div className="lr-footer__col lr-footer__newsletter">
						<h4>Stay in the loop</h4>
						<p className="muted">Subscribe for new recipes, tips and seasonal guides.</p>
						<form className="newsletter" onSubmit={(e) => e.preventDefault()}>
							<label className="sr-only" htmlFor="footer-email">Email address</label>
							<input id="footer-email" type="email" placeholder="you@domain.com" />
							<button type="submit" className="btn">Subscribe</button>
						</form>
					</div>
				</div>
			</div>

			<div className="lr-footer__bottom">
				<div className="lr-footer__socials">
					  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="4" ry="4"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><path d="M17.5 6.5h.01"></path></svg>
					</a>
					  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"></path></svg>
					</a>
					  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12.07 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
					</a>
				</div>

				<p className="lr-footer__copy">© {new Date().getFullYear()} La Ricetta • Crafted with care</p>
			</div>
		</footer>
	);
}
