import Banner from "@/components/HomePage/Banner";
import TopGeneration from "@/components/HomePage/TopGeneration";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center
     justify-center bg-zinc-50 font-sans dark:bg-black">



      <Banner />
      <TopGeneration />

    </div>
  );
}
