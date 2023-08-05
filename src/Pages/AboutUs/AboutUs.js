import React from "react";
import banner from "../../assets/images/about.jpg";
import img1 from "../../assets/images/about2.jpg";
import img2 from "../../assets/images/about3.jpg";
import img3 from "../../assets/images/about4.jpg";
import img4 from "../../assets/images/about5.jpg";
import AssociatesCarousel from "../Home/AssociatesCarousel/AssociatesCarousel";
import BottomBanner from "../Home/BottomBanner/BottomBanner";

const AboutUs = () => {
  return (
    <div>
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay bg-blue-400 bg-opacity-30"></div>
        <div className="hero-content text-center text-white">
          <div>
            <h1 className="mb-5 text-5xl font-bold">
              YOUR IMAGINATION IS OUR PREVIEW
            </h1>
            <h2 className="mb-5 text-2xl font-bold">
              A brief summarization of our company profile and how we serve our
              clients.
            </h2>
          </div>
        </div>
      </div>

      <div className="hero mt-16 mb-16">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img1}
            className="lg:max-w-lg rounded-lg shadow-2xl"
            alt="office"
          />
          <div className="ml-0 lg:ml-10">
            <h1 className="text-4xl font-bold">OUR EVALUATION</h1>
            <p className="py-6">
              Kesef Business Solutions was founded in September 2019, believing
              that a flawless customer experience is the most critical factor in
              the success of any brand. We believe that outsourcing and
              globalization of manufacturing allow companies to reduce costs,
              benefit consumers with lower-cost goods and services, cause
              economic expansion that reduces unemployment, and increase
              productivity and job creation. If you want a quick, hassle-free,
              and cost-efficient technique to identify and contact potential
              clients, our company can significantly help you. It is better
              compared to other different ways to be in contact with consumers.
              We provide outsourcing services from our delivery centre in
              Bangladesh. We have an on-site management team working
              interminable with fully disposable voice data links to the global,
              enterprise-grade network infrastructure.
            </p>
          </div>
        </div>
      </div>

      <div className="hero mt-16 mb-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img2}
            className="lg:max-w-lg rounded-lg shadow-2xl"
            alt="office"
          />
          <div className="ml-0 lg:ml-10">
            <h1 className="text-4xl font-bold">OUR MISSION</h1>
            <p className="py-6">
              To enhance the lives of our customers by providing quality
              products at market-leading value whilst ensuring customer
              satisfaction is at the heart of everything we do. Our vision is to
              maximize the sale with complete customer satisfaction with
              impartiality and compassion.
            </p>
          </div>
        </div>
      </div>

      <div className="hero mt-16 mb-16">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img3}
            className="lg:max-w-lg rounded-lg shadow-2xl"
            alt="office"
          />
          <div className="ml-0 lg:ml-10">
            <h1 className="text-4xl font-bold">OUR VISION</h1>
            <p className="py-6">
              Our telemarketing warriors are always coming up with new
              innovative ideas to provide the best service from their end and
              deliver maximum customer satisfaction. In the upcoming years, our
              primary goal is to expand our services category to reach more
              people. We are already magnifying our office into a bigger modern
              workspace and providing work for 1000+ employees of all genders.
              We are already providing a great working environment for our
              employees, and we are focusing on making it even better in the
              upcoming days to deliver the best output possible from our
              employees. We are on our journey to make Kesef Business Solutions
              one of Bangladesh’s top three telemarketing companies within the
              next few years.
            </p>
          </div>
        </div>
      </div>

      <div className="hero mt-16 mb-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img4}
            className="lg:max-w-lg rounded-lg shadow-2xl"
            alt="office"
          />
          <div className="ml-0 lg:ml-10">
            <h1 className="text-4xl font-bold">CORE VALUES</h1>
            <p className="py-6">
              We believe great teamwork depends on a positive attitude and a
              strong belief that you have something that benefits whoever you
              call. Good relevant product knowledge but not a features-heavy
              sales pitch is considerable for us. Understanding benefits is much
              more compelling. Our people have a broad knowledge of the target
              marketplace, aptitude and confidence to converse with senior/key
              decision-makers without worry. Good pace, pitch and tone and the
              ability to be natural and conversational, not scripted and
              stilted. Our expert telemarketers have the ability and knowledge
              to pose insightful and engaging questions, excellent listening
              skills, excellent communication and rapport-building skills and
              the ability to handle and deflect objections that will inevitably
              come up from budget holders / decision-makers and gatekeepers.
              They are well-taught in time management skills to ensure calls are
              carried out on time and without becoming distracted; they have the
              willingness and dogged determination to have a go and to keep
              going in the face of rejection. People saying “no” doesn’t matter
              as long as a given percentage says “yes.”
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-24">
        <h1 className="text-3xl mt-11 font-bold mb-9">
          Ultimately, communication and rapport skills mixed with a good measure
          of passion and determination hold together good telemarketing.
        </h1>
        <hr className="bg-slate-800 h-[2px] mb-16" />
        <AssociatesCarousel />
      </div>
      <BottomBanner></BottomBanner>
    </div>
  );
};

export default AboutUs;
