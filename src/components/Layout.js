import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

export default function Layout({ children, criteria }) {
  return (
    <>
      {criteria !== "home" && <Navbar criteria={criteria} />}
      <main>{children}</main>
      <Footer />
    </>
  )
}
