import React from "react";
import I1 from "../assets/shamala.jpg";
import I2 from "../assets/vasudevan.png";
import I3 from "../assets/sumitra.png";
import I4 from "../assets/sudarsun.png";
import I5 from "../assets/bhavani.jpg";

const SpeakerCard = ({ image, name, details }) => {
  return (
    <div className="bg-purple-100 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start gap-4">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover"
      />
      <div className="text-center md:text-left">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm">{details}</p>
      </div>
    </div>
  );
};

const Speakers = () => {
  return (
    <section
      id="speakers"
      class="flex justify-center items-center px-16 py-20 max-md:px-5"
    >
      <div class="flex flex-col  w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
        <h1 className="text-xl sm:text-2xl text-purple-800 font-bold">
          Keynote Speakers
        </h1>
        <div className=" flex justify-center items-center">
          <div className="grid gap-4">
            <SpeakerCard
              image={I1}
              name={"Prof. Dato' Dr. Shamala K. Subramaniam, "}
              details={
                <p>
                  Professor & Dean
                  <br /> Department of Communication Technology and Network,
                  <br /> Faculty of Computer Science and Information Technology,
                  <br /> Universiti Putra Malaysia, Malaysia{" "}
                </p>
              }
            />
            <SpeakerCard
              image={I5}
              name={"Mrs. Bhavani G, "}
              details={
                <p>
                  Scientist-F/Senior Director & Head
                  <br /> Chennai Branch Office
                  <br />
                  BIS{" "}
                </p>
              }
            />
            <SpeakerCard
              image={I2}
              name={"Dr. Shriram K Vasudevan, "}
              details={
                <p>
                  FIE, FIETE, SMIEEE
                  <br />
                  Intel Certified Instructor
                  <br />
                  NASSCOM External Maker Expert (XME)
                  <br />
                  Former ACM Distinguished Speaker
                  <br />
                  Intel Champion IoT Innovator
                  <br />
                  NVIDIA DLI Instructor
                  <br />
                  <br />
                  <b>Title:</b> The AI PC - let's unleash the complete AI
                  Potential
                </p>
              }
            />
            <SpeakerCard
              image={I3}
              name={"Dr. Sumitra.S "}
              details={
                <p>
                  Associate Professor
                  <br />
                  Department of Mathematics
                  <br />
                  Indian Institute of Space Science and Technology
                  <br />
                  Thiruvanandhapuram
                  <br />
                  Kerala
                  <br />
                  <br />
                  <b>Title: </b>Brain-Computer Interfaces and Beyond: Machine
                  Learning Applications
                  <br /> for Sustainable Development
                </p>
              }
            />
            <SpeakerCard
              image={I4}
              name={"Dr. Sudarsun Santhiappan"}
              details={
                <p>
                  Chief Scientific Officer and Co-Founder
                  <br /> of Buddi.AI, Chennai, Tamilnadu
                  <br />
                  <br />
                  <b>Title:</b> AI for Healthcare - Opportunities with Clinical
                  Language Understanding
                </p>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
