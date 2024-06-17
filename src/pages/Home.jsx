import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/homeimg.jpg'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'



const Home = () => {
  return (
    <>
    <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center rounded shadow w-100'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h1 style={{fontSize:'80px'}}><i class="fa-brands fa-docker me-1"></i>Project Fair</h1>
                    <p style={{textAlign:'justify'}}>
                        One stop Destination for all software Development Projects. where User can add and manage their projects.As well as access all projects availabe in our website... What are you waiting for!!!
                    </p>
                    { 
                    sessionStorage.getItem("token")?
                     <Link to="/dashboard" className="btn btn-warning" >MANAGE YOUR PROJECTS</Link>
                   : <Link to="/login" className="btn btn-warning" >START TO EXPLORE</Link>
                   }
                </div>
                <div className="col-lg-6">
                    <img className='img-fluid ms-5' src={landingImg} alt="" />
                </div>
            </div>
        </div>
        
    </div>
    
    <div className='mb-5 text-center'>
          <h1 className='mb-5'>Explore Our Projects</h1>
          <marquee behavior="" direction="">
            <div className='d-flex'>
              <div className='me-5'>
                <ProjectCard/>
              </div>

            </div>
          </marquee>
          <button className='btn btn-link mt-3'> Click here to view more projects..</button>

    </div>

    <div className='d-flex align-items-center mt-5 flex-column'>
      <h1>Our Testimonials</h1>
      <div className='d-flex align-items-center justify-content-evenly mt-5 w-100'>
      <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid'
          src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png' />
          <span>Max miller</span>
          </Card.Title>
        <Card.Text>
          <div className='d-flex justify-content-center'>
            <div className='fa-solid fa-star text-warning'></div>
            <div className='fa-solid fa-star text-warning'></div>
            <div className='fa-solid fa-star text-warning'></div>
            <div className='fa-solid fa-star text-warning'></div>
          </div>
          <p>
            some quick example text to build on the card title and make up the bulk of the cards content
          </p>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw2D5o-RdPUnjNjc55Te5h7z7mavGQGHKzXb7mqDLjGA&s' />
          <span>Max miller</span>
          </Card.Title>
        <Card.Text>
          <div className='d-flex justify-content-center'>
            <div className='fa-solid fa-star text-warning'></div>
            <div className='fa-solid fa-star text-warning'></div>
            <div className='fa-solid fa-star text-warning'></div>
            <div className='fa-solid fa-star text-warning'></div>
          </div>
          <p>
            some quick example text to build on the card title and make up the bulk of the cards content
          </p>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid'
          src='https://i.pinimg.com/736x/49/3f/a0/493fa0f13970ab3ef29375669f670451.jpg' />
          <span>Max miller</span>
          </Card.Title>
        <Card.Text>
          <div className='d-flex justify-content-center'>
            <div className='fa-solid fa-star text-warning'></div>
            <div className='fa-solid fa-star text-warning'></div>
            <div className='fa-solid fa-star text-warning'></div>
            <div className='fa-solid fa-star text-warning'></div>
          </div>
          <p>
            some quick example text to build on the card title and make up the bulk of the cards content
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      
    </div>









    </>

  )
}

export default Home




