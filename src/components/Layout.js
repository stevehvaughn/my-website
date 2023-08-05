import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, criteria }) {
  return (
    <>
      {criteria !== "home" && <Navbar criteria={criteria} />}
      <main>{children}</main>
      <Footer />
    </>
  )
}
