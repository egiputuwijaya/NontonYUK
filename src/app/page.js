import Image from "next/image";
import Profile from "../../components/Profile";
import IntroBanner from "../../components/IntroBanner";
import WorldPicture from "../../components/World";
import FilmList from "../../components/FilmList";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Profile />
      <IntroBanner />
      <WorldPicture />
      <FilmList />
      <Footer />
    </div>
  );
}
