import { ContactBar } from "@/modules/ContactBar/ContactBar";
import { Navbar } from "@/modules/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-row justify-around p-12">
        <img src="images/me_crop.jpg" className="max-w-sm" />
        <div className="max-w-lg">
          <h1 className="text-5xl">Melody Sylvestre</h1>
          <h2 className="text-4xl">Full Stack Sofware Engineer</h2>
          <p className="text-3xl">Hi and Welcome on my portfolio</p>
        </div>
      </main>
      <div className="flex flex-row justify-end p-12">
        <ContactBar />
      </div>
    </>
  );

}
// TODO: change favicon.ico 