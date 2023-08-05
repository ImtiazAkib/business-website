import React from "react";
import Carousel from "better-react-carousel";
import avatar from "../../../assets/images/avatar.jpg";
import ceo from "../../../assets/images/ceo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const AssociatesCarousel = () => {
  return (
    <>
      {/*---------------------------------------------- Hero -------------------------------------------*/}
      <div className="hero my-10">
        <div className="hero-content text-center">
          <div>
            <div className="avatar mb-10">
              <div className="w-64 rounded-full border-2">
                <img src={ceo} alt="avatar" />
              </div>
            </div>
            <h1 className="text-5xl font-bold">CEO & FOUNDER</h1>
            <p className="py-6">
              Meet Mohammad Mosharaf Hossain, a dynamic and ambitious young
              entrepreneur hailing from Bangladesh. With over 8 years of
              invaluable experience in the BPO (Business Process Outsourcing)
              industry, he has emerged as a trailblazer in the business world.
              His relentless dedication and visionary approach have led him to
              create successful ventures that have not only thrived but also
              made a positive impact on the lives of many. Mosharaf's
              exceptional leadership skills and innovative strategies have
              earned him widespread recognition in the entrepreneurial
              community. With a passion for empowering others and a deep
              understanding of the industry, he continues to inspire aspiring
              entrepreneurs, fostering a new wave of talent in Bangladesh and
              beyond.
            </p>
          </div>
        </div>
      </div>
      {/*---------------------------------------------- Hero -------------------------------------------*/}
      {/*---------------------------------------------- Carousel -------------------------------------------*/}
      <div className="flex flex-col justify-center items-center bg-base-200 py-10 my-10">
        <h2 className="text-2xl lg:text-5xl mb-24 font-bold">Our Team</h2>
        <div className="w-[80%]">
          <Carousel
            cols={3}
            rows={1}
            gap={10}
            showDots={true}
            autoplay={5000}
            loop
          >
            <Carousel.Item>
              <div className="card m-6 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={avatar} alt="avatar" />
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Member</h2>
                  <p>Alex Brooks</p>
                  <div>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-2xl pr-2"
                    />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-2xl pr-2"
                    />
                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card m-6 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={avatar} alt="avatar" />
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Member</h2>
                  <p>Alex Brooks</p>
                  <div>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-2xl pr-2"
                    />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-2xl pr-2"
                    />
                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card m-6 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={avatar} alt="avatar" />
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Member</h2>
                  <p>Alex Brooks</p>
                  <div>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-2xl pr-2"
                    />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-2xl pr-2"
                    />
                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card m-6 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={avatar} alt="avatar" />
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Member</h2>
                  <p>Alex Brooks</p>
                  <div>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-2xl pr-2"
                    />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-2xl pr-2"
                    />
                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card m-6 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={avatar} alt="avatar" />
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Member</h2>
                  <p>Alex Brooks</p>
                  <div>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-2xl pr-2"
                    />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-2xl pr-2"
                    />
                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card m-6 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={avatar} alt="avatar" />
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Member</h2>
                  <p>Alex Brooks</p>
                  <div>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-2xl pr-2"
                    />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-2xl pr-2"
                    />
                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      {/*---------------------------------------------- Carousel -------------------------------------------*/}
    </>
  );
};

export default AssociatesCarousel;
