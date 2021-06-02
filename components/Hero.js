import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import img from "next/image";
import Background from "../assets/bg.png";

function Hero() {
  return (

    < section className="text-gray-600 body-font bg-[#E5E7EB] " >
      <div className="container mx-auto flex px-5 py-24 w-full items-center  justify-center flex-col" >

        <div className="text-center lg:w-2/3 w-full py-10">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-[#2C5282]"> Welcome To Hear Us</h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#2C5282]">Here To Hear You</h1>
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMnvB0eVuRvI63OGZvOCH8oiuY6UgQp4mHit0HnNkw8s4X8w/viewform">
          <button className="inline-flex text-white text-bold hover:bg-[#0B5351] border-0 py-2 px-6 focus:outline-none bg-[#062e2d] rounded text-lg">Volunteer as Listener</button>
        </a>



      </div>
    </section >
  );
}

export default Hero;
// <Box
//   w="100vw"
//   h="100vh"
//   backgroundImage={`url(${Background})`}
//   backgroundPosition="center"
//   backgroundRepeat="no-repeat"
//   d="flex"
//   flexDirection="column"
//   alignItems="center"
//   justifyContent="center"
// >

//   <Heading size="3xl" color="blue.800">
//     Welcome To Hear Us
//   </Heading>
//   <Heading size="3xl" color="#39FFF8" mt={10}>
//     Here To Hear You
//   </Heading>
// </Box>