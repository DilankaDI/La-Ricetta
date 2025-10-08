import React from 'react';
import './About.css';
import Logo from '../assets/Logo.png';

export default function About(){
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__inner">
          <img src={Logo} alt="La Ricetta" className="about-logo"/>
          <h1>About La Ricetta</h1>
          <p className="lead">Handpicked recipes, honest stories, and the flavors that make home feel like a celebration.</p>
          <a className="btn-cta" href="#recipes">Explore recipes</a>
        </div>
      </section>

      <section className="about-cards">
        <article className="card">
          <h3>Our Mission</h3>
          <p>We celebrate approachable cooking — seasonal ingredients, simple techniques, and honest flavors to make every meal meaningful.</p>
        </article>

        <article className="card">
          <h3>Our Team</h3>
          <p>Small team, big taste. From writers to home cooks, we test every recipe to make sure it works for your table.</p>
        </article>

        <article className="card">
          <h3>Our Values</h3>
          <p>Community, sustainability, and joy — we source responsibly and write with care.</p>
        </article>
      </section>

      <section className="about-cta">
        <div className="about-cta__inner">
          <h3>Want to contribute?</h3>
          <p>Share a recipe or a story — we love featuring community voices.</p>
          <a className="btn-outline" href="#contribute">Get involved</a>
        </div>
      </section>
    </main>
  )
}
