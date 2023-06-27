import React, {useEffect} from 'react'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import { Link, useParams } from 'react-router-dom'
import blogData from '../assets/data/blogData'
import Helmet from '../components/Helmet/Helmet'
import commentImg from '../assets/all-images/ava-1.jpg'
import '../styles/blog-details.scss'

const BlogDetails = () => {

  const {slug} = useParams()

  const blog = blogData.find(blog => blog.title === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [blog])


  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg='8' md='8'>
              <div className='blog__details'>
                <img src={blog.imgUrl} alt='blog' className='w-100'/>
                <h2 className='section__title mt-4'>{blog.title}</h2>
                
                <div className='blog__publisher d-flex align-items-center
                  gap-4 mb-4'>
                  <span className='blog__author '>
                    <i class='ri-user-line'></i> {blog.author}
                  </span>

                  <span className='d-flex align-items-center gap-1
                    section__description'>
                    <i class='ri-calendar-line'></i> {blog.date}
                  </span>

                  <span className='d-flex align-items-center gap-1
                    section__description'>
                    <i class='ri-time-line'></i> {blog.time}
                  </span>
                </div>

                <p className='section__description'>{blog.description}</p>
                <h6 className='ps-5 fw-normal fs-4'> <blockquote>{blog.quote}</blockquote> </h6>
                <p className='section__description'>{blog.description}</p>
              </div>

              <div className='comment__list mt-5'>
                <h4 className='mb-5'>3 comments</h4>

                <div className='single__comment d-flex gap-3'>
                <img src={commentImg} alt='' />
                  <div className='comment__content'>
                    <h6 className='fw-bold'>James Bond</h6>
                    <p className='section__description mb-0'>13 June, 2022</p>
                    <p className='section__description'>
                      Lorem Ipsum is simply dummy text of the printing and 
                      typesetting industry. Lorem Ipsum has been the industry's 
                      standard dummy text ever since the 1500s, when an unknown 
                      printer took a galley of type and scrambled it to make a 
                      type specimen book. It has survived not only five centuries
                    </p>

                    <span className='replay d-flex align-items-center gap-1'>
                      <i class="ri-reply-line"></i> Replay
                    </span>

                  </div>
                </div>


                {/* =============== comment form ========== */}

                  <div className='leave__comment-form mt-5'>
                    <h4>Leave a Comment</h4>
                    <p className='section__description'>
                      You must sign-in to make or comment a post
                    </p>

                    <Form>
                      <FormGroup className='d-flex gap-3'>
                        <Input type='text' placeholder='Full Name' />
                        <Input type='email' placeholder='Email' />
                      </FormGroup>

                      <FormGroup>
                        <textarea 
                          rows='5' 
                          className='w-100 py-2 px-3' 
                          placeholder='Comment...'
                        ></textarea>
                      </FormGroup>

                      <button className='btn comment__btn mt-3'>Post a Comment</button>
                    </Form>
                  </div>
               
              </div>
            </Col>

            <Col lg='4' md='4'>
              <div className='recent__post mb-4'>
                <h5 className='fw-bold'>Recent Posts</h5>
              </div>
              {
                blogData.map(item => (
                  <div className='recent__blog-post mb-4' key={item.id}>
                    <div className='recent__blog-item d-flex gap-3'>
                      <img src={item.imgUrl} alt='blog' className='w-25 rounded-2' />
                      <h6><Link to={`/blogs/${item.title}`}>{blog.title}</Link></h6>
                    </div>
                  </div>
                ))
              }
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default BlogDetails