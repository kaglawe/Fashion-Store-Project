import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import { Button } from "../../styles/Button"

const ContactUs = () => {
  const Wrapper = styled.section`
    padding: 2rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 3rem;

      .contact-form {
        max-width: 25rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (<>
    <Header />
    <h2 className='col d-flex justify-content-center mt-3'>Contact page</h2>
    <Wrapper>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.867826432266!2d73.80869341484299!3d18.534874087400745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf40bef092f1%3A0x48c508ccaa4ef9a!2z4KS44KWH4KSC4KSf4KSwIOCkq-ClieCksCDgpKHgpYfgpLXgpY3gpLngpLLgpKrgpK7gpYfgpILgpJ8g4KSR4KSrIOClsuCkoeCkteCljeCkueCkvuCkqOCljeCkuOCljeCkoSDgpJXgpK7gpY3gpKrgpY3gpK_gpYHgpJ_gpL_gpILgpJcsIOCkh-CkqOCli-CkteClh-CktuCkqCDgpKrgpL7gpLDgpY3gpJU!5e0!3m2!1smr!2sin!4v1677962105300!5m2!1smr!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>


      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xeqdgwnq" method="POST" className="contact-inputs">

            <input type="text" placeholder="Enter Your Username" name="username" required autoComplete="off" />

            <input type="email" name="Email" placeholder=" Enter Your Email" autoComplete="off" required />

            <textarea name="Message" cols="20" rows="5" required autoComplete="off" placeholder="Enter your message here"></textarea>

            <Button type='submit'>submit</Button>
          </form>
        </div>
      </div>
    </Wrapper>
  </>
  );
};

export default ContactUs;
