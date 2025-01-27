import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              If you want to get in touch with me, you can reach me through the
              following channels.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: Ballam93@gmail.com</li>
              <li className="contact-item">Phone: +4367761464939</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
