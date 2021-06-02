import Image from "next/image";
import app from "../assets/app.png";

function Section2() {
  return (
    <section class="text-gray-600 body-font bg-[#E5E7EB]">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image alt="hero" src={app} width={700} height={600}></Image>
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-[#2C5282]">Talk To Trained</h1>
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-[#2C5282]">Empathetic Listeners</h1>
          <p class="mb-8 leading-relaxed text-xl text-[#2C5282]">Hear Us is a group of trained empathetic listeners who decided to
          use their skills for a good cause. No matter who you are or where do
          you live or what you’re going through, we are here to listen to you
          and care for you. We might be strangers on the surface, but
          underneath we're just the friends you haven't met yet. Hear Us
          provides you free of cost sessions with empathetic listeners.</p>
          <div class="flex justify-center">
            <button class=" text-white hover:bg-[#0B5351] border-0 py-2 px-6 focus:outline-none bg-[#062e2d] rounded text-lg">Download the App Now!</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
