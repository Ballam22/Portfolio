import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              this is a simple about page for the portfolio website built with
              Next.js and TypeScript. This page is statically generated. This
              means that the page is generated at build time and will be reused
              for each request. This is great for SEO and performance. This page
              is also a part of the portfolio website that I built to showcase
              my projects and skills. You can check the source code on my
              GitHub.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
