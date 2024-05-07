import { CallToActions } from "../../components/CallToActions"
import { Navbar } from "../../components/Navbar"

export const HomePage = () => {
  return (
    <>
      <Navbar />

      <CallToActions href="/management" >Administrar Sistema</CallToActions>
    </>
  )
}