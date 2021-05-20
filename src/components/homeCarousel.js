import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function homeCarousel() {
  return (
    <Carousel indicators={false} interval="3000">
      <Carousel.Item className="text-center">
        <img
          className="carousel-image"
          src="/images/home-carousel/1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img
          className="carousel-image"
          src="/images/home-carousel/2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img
          className="carousel-image"
          src="/images/home-carousel/3.JPG"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img
          className="carousel-image"
          src="/images/home-carousel/4.JPG"
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img
          className="carousel-image"
          src="/images/home-carousel/5.jpg"
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img
          className="carousel-image"
          src="/images/home-carousel/6.JPG"
          alt="Sixth slide"
        />
      </Carousel.Item>
      <Carousel.Item className="text-center">
        <img
          className="carousel-image"
          src="/images/home-carousel/7.jpg"
          alt="Seventh slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}
