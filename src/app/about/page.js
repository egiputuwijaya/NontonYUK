import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import AboutSections from "./components/aboutSections";
import ContactSections from "./components/contactSections";

export default function About() {
  return (
    <div>
      <Navbar />
      <AboutSections />
      <ContactSections />
      <Footer />
    </div>
  );
}
