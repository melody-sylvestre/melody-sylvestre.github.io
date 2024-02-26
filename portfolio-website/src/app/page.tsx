import { ContactBar } from "@/modules/ContactBar/ContactBar";
import { Navbar } from "@/modules/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center items-center p-12 min-h-[90vh] bg-cover  bg-center bg-[url('../../public/images/horse_head_nebula.jpg')]">
        <div className="flex flex-col justify-center items-center text-center min-w-[80vw] gap-14 p-2 md:p-4 lg:p-16 rounded-lg bg-gradient-to-r from-gray-950/10 to-gray-950/50">

          <h1 className="text-3xl sm:text-6xl lg:text-8xl font-serif">Melody Sylvestre</h1>
          <h2 className="text-xl sm:text-3xl lg:text-4xl">Full Stack Software Engineer</h2>
          <p className="text-l  sm:text-2xl lg:text-3xl">Hi and welcome on my portfolio</p>
        </div>

      </main >
      <div className="flex flex-row justify-end p-12">
        <ContactBar />
      </div>
    </>
  );

}
// TODO: change favicon.ico 