import Navbar from './Organisims/Navbar/Navbar';
import Footer from './Organisims/Footer/Footer';

export default function Layout({ children, criteria }) {
  return (
    <>
      {criteria !== "home" && <Navbar criteria={criteria} />}
      <main>{children}</main>
      <Footer />
    </>
  )
}
