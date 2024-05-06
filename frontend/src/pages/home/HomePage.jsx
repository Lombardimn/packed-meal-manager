import { Navbar } from "../../components/Navbar"

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <a 
        href="/management"
        className="bg-sky-500 hover:bg-sky-700 rounded-full w-[200px] ml-12 py-2 mt-4 text-center text-white font-semibold"
      >Administrar Sistema</a>
    </>
  )
}