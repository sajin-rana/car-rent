import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../styles/about-section.scss'
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png"

const AboutSection = ({aboutClass}) => {
  return (
    <section 
        className='about__section'  
        style={aboutClass === 'aboutPage' 
            ? {marginTop: '0px'} 
            : {marginTop: '280px'} 
        }
    >
        <Container >
            <Row>
                <Col lg='6' md='6' >
                    <div className='about__section-content'>
                        <h4 className='section__subtitle'>About Us</h4>
                        <h2 className='section__title'>Welcome to car rent service</h2>
                        <p className='section__description'>
                            Lorem Ipsum is simply dummy text of the 
                            printing and typesetting industry. Lorem Ipsum 
                            has been the industry's standard dummy text ever 
                            since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a 
                            type specimen book. It has survived not only 
                            five centuries.
                        </p>
                        <div className='about__section-item d-flex align-items-center'>
                            <p className='section__description d-flex align-items-center gap-2'>
                                <i class="ri-checkbox-circle-line"></i> Lorem Ipsum is simply dummy text
                            </p>

                            <p className='section__description d-flex align-items-center gap-2'>
                                <i class="ri-checkbox-circle-line"></i> Lorem Ipsum is simply dummy text
                            </p>
                        </div>

                        <div className='about__section-item d-flex align-items-center'>
                            <p className='section__description d-flex align-items-center gap-2'>
                                <i class="ri-checkbox-circle-line"></i> Lorem Ipsum is simply dummy text
                            </p>

                            <p className='section__description d-flex align-items-center gap-2'>
                                <i class="ri-checkbox-circle-line"></i> Lorem Ipsum is simply dummy text
                            </p>
                        </div>
                    </div>
                </Col>
                    

                <Col lg='6' md='6' >
                    <div className='about__img'>
                        <img src={aboutImg} alt='car'
                            className='w-100'
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AboutSection