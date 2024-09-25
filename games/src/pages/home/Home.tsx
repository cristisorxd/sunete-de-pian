import { Button } from "@/components/ui/button";
import kidsSinging from "../../assets/kids-singing.jpg";
import decorator1 from "../../assets/decorator-1.webp";
import decorator3 from "../../assets/decorator-3.webp";

function Home() {
  return (
      <div className="flex flex-col gap-6 mt-10 justify-between items-center md:mt-2 lg:flex-row">
        <div>
          <div className="relative">
            <h1 className="text-4xl z-10 md:text-6xl font-bold text-gray-800">
              <span className="text-green">Testeaza-ti</span> cunostintele!
            </h1>
            <img src={decorator3} className="z-0 w-16 -top-12 absolute" />
          </div>
          <div className="relative">
            <p className="text-lg z-10 md:text-xl text-gray-600 mt-2 md:mt-4">
              Sunete de pian iti propune o serie de activitati interactive si{" "}
              <span className="text-orange">jocuri</span> care te vor ajuta sa
              inveti muzica intr-un mod distractiv.
            </p>
            <img
              src={decorator1}
              className="z-0 w-16 absolute right-0 bottom-0 md:w-24 md:-bottom-5 lg:right-20 xl:right-48"
            />
          </div>
          <p className="text-lg md:text-xl text-gray-600 mt-2 z-10 md:mt-4">
            <span className="text-green-500">Primul joc</span> este chiar aici!
            Incearca-l acum si vezi cat de bine te descurci.
          </p>
          <Button
            onClick={() => console.log("Start")}
            size="lg"
            className="mt-4"
          >
            Incepe
          </Button>
        </div>
        <img
          src={kidsSinging}
          alt="Kids Singing"
          className="rounded-3xl self-center md:h-96 md:w-2/3"
        />
      </div>
  );
}

export default Home;