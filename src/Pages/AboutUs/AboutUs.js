import React from "react";
import banner from "../../assets/images/about.jpg";
import img1 from "../../assets/images/about2.jpg";
import img2 from "../../assets/images/about3.jpg";
import img3 from "../../assets/images/about4.jpg";
import img4 from "../../assets/images/about5.jpg";
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
              "At Kesef Business Solutions Ltd, our vision is to revolutionize
              the outsourcing industry by becoming the go-to partner for
              businesses worldwide seeking seamless, innovative, and
              value-driven solutions. We envision a future where our
              cutting-edge technology, skilled workforce, and unwavering
              commitment to excellence empower businesses to thrive in an
              increasingly competitive global landscape. We aim to be at the
              forefront of digital transformation, embracing emerging
              technologies to provide our clients with the most efficient and
              customized outsourcing services available. Our vision encompasses
              creating a positive impact on businesses by enabling them to focus
              on their core competencies while we take care of their non-core
              but crucial operational functions.
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

      <BottomBanner></BottomBanner>
    </div>
  );
};

export default AboutUs;
