import Navbar from './navbar';
import Footer from './footer';

export default function layout({ children, criteria }) {
  return (
    <>
      {criteria !== "home" && <Navbar criteria={criteria} />}
      <main>{children}</main>
      <Footer />
    </>
  )
}