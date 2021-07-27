import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import '../styles/footer.css';

const Footer = () => {
  return (
    <Container className='footer' fluid>
      <Row className='columns d-flex align-items-start justify-content-sm-evenly'>
        <Col sm={true} className='py-2'>
          <ul className='footer-list text-center p-0 m-0'>
            <li className='fw-bold text-uppercase text-secondary'>
              Ressources
            </li>
            <li class='fw-light'>
              <a
                href='https://react-bootstrap.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                Bootstrap
              </a>
            </li>
            <li class='fw-light'>
              <a
                href='https://stackoverflow.com/'
                target='_blank'
                rel='noreferrer'
              >
                Stackoverflow
              </a>
            </li>
          </ul>
        </Col>
        <Col sm={true} className='py-2'>
          <ul className='footer-list text-center p-0 m-0'>
            <li className='fw-bold text-uppercase text-secondary '>
              Quick Links{' '}
            </li>
            <li class='fw-light'>
              <a
                href='https://github.com/jeromeBor?tab=repositories'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
            <li class='fw-light'>
              <a
                href='https://www.behance.net/nuzzler'
                target='_blank'
                rel='noreferrer'
              >
                Behance
              </a>
            </li>
            <li class='fw-light'>
              <a
                href='mailto:jerome.borga@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                Contact me{' '}
              </a>
            </li>
          </ul>
        </Col>
        <Col sm={true} className='py-2'>
          <ul className='footer-list text-center p-0 my-0'>
            <li className='fw-bold text-uppercase text-secondary'>
              Wild Code School{' '}
            </li>
            <li class='fw-light'>
              <a
                href='https://www.wildcodeschool.com/fr-FR'
                target='_blank'
                rel='noreferrer'
              >
                Website
              </a>
            </li>
            <li class='fw-light'>
              <a
                href=' https://www.wildcodeschool.com/fr-FR/blog/go-wilders
                '
                target='_blank'
                rel='noreferrer'
              >
                Slack
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
