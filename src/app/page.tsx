import TrustBanner from "@/components/TrustBanner";
import ActivitiesNav from "../components/ActivitiesNav";
import ChooseCard from "../components/ChooseCard";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Search from "../components/Search";
import SecuritySection from "@/components/SecuritySection";

export default function HomePage() {
  return (
    <div>
      <Nav />
      <Search />
      <ActivitiesNav />
      <TrustBanner />
      <ChooseCard />
      <SecuritySection />
      <Footer />
    </div>
  );
}
