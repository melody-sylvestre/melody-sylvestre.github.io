import { ContactBar } from "../ContactBar/ContactBar";

export const HomePage = (): JSX.Element => {
  return (
    <main className="flex flex-col justify-evenly items-center p-4 lg:p-12 min-h-[100vh]">
      <div className="flex flex-col justify-center items-center text-center min-w-[80vw] gap-14 p-2 md:p-4 lg:p-16 rounded-lg bg-gradient-to-r from-gray-950/10 to-gray-950/50">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif">
          Melody Sylvestre
        </h1>
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif">
          Full Stack Software Engineer
        </h2>
        <p className="text-l  sm:text-2xl lg:text-3xl font-serif">
          {" "}
          Welcome to my portfolio
        </p>
      </div>
      <div className="flex flex-row justify-end p-12">
        <ContactBar />
      </div>
    </main>
  );
};
