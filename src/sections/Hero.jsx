import React , {useState} from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import {shoes} from '../constants'
import { bigShoe1 } from "../assets/images";
import ShoeCard from '../components/ShoeCard'

function Hero() {
const [bigShoeImg , setBigShoeImg ] = useState(bigShoe1)


  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  p-2"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 ">Converse</span> 
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Converse arrivals,quality comfort,and innovation for your
          active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold ">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <section className="relative flex-1 flex flex-col justify-center items-center xl:min-h-screen max-xl:py-40 ">
  <div className="relative">
    <img src={bigShoeImg} alt="shoe collection" width={610} height={500} className="object-contain z-10"/>

    <div className="flex flex-row sm:flex-row sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 z-20">
      {shoes.map((shoe, index) => (
        <div key={index}>
          <ShoeCard
            imgURL={shoe}
            changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
            bigShoeImg={bigShoeImg}
          />
        </div>
      ))}
    </div>
  </div>
</section>

    </section>
  );
}

export default Hero;
