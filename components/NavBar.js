
import logo from "../assets/logo.png";
import Link from "next/link"
import Image from "next/image"
// import { FaHeart } from "react-icons/fa";

function NavBar() {
  return (
    <header className="text-[#2C5282] body-font bg-[#E5E7EB] h-100  ">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            className="m-3"
            src={logo}
            // objectFit="cover"
            alt="HearUs"
            // boxSize="30px"
            // ml={5}
            // mt={2}

            width={100}
            height={100} />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/"><a className="mr-5 text-[#2C5282] text-2xl cursor-pointer hover:text-gray-900">Home</a></Link>
          <Link href="/about"><a className="mr-5 text-[#2C5282] text-2xl cursor-pointer hover:text-gray-900">About</a></Link>
          <Link href="/blog"><a className="mr-5 text-[#2C5282] text-2xl cursor-pointer hover:text-gray-900">Blog</a></Link>
          <Link href="/contact"><a className="mr-5 text-[#2C5282] text-2xl cursor-pointer hover:text-gray-900">Contact</a></Link>
          <Link href="/FAQ"><a className="mr-5 text-[#2C5282] text-2xl cursor-pointer hover:text-gray-900">FAQ</a></Link>
        </nav>
      </div>


      {/* <Box
        mr={10}
        d="flex"
        alignItems="center"
        color="red.500"
        fontWeight="bold"
        fontSize="lg"
        border="1px"
        borderColor="gray.500"
        p={2}
        borderRadius="xl"
      >
        <Text>Call Listener</Text>
        <Box ml={2}>
          <FaPhone />
        </Box>
      </Box> */}
    </header >
  );
}

export default NavBar;
