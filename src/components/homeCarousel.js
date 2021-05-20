import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function homeCarousel() {
  return (
    <Carousel indicators={false} interval="3000">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/home-carousel/1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/home-carousel/2.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/home-carousel/3.JPG"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/home-carousel/4.JPG"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/home-carousel/5.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/home-carousel/6.JPG"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/home-carousel/7.png"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}
