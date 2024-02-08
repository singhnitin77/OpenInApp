import Image from "next/image";
import SignIn from "@/components/SignIn";
import HeroLeft from "@/components/HeroLeft";
//import Login from "./signin/page";

export default function Home() {
  return (
    <div className="flex flex-row h-screen w-full">
      <div className="h-full w-1/2 bg-[#605BFF]">
        <HeroLeft/>
      </div>
      <div className="h-full flex items-center justify-center w-1/2 bg-[#F8FAFF]">
        <SignIn/>
      </div>
    </div>
  );
}
