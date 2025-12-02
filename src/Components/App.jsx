import { Routes, Route } from "react-router-dom";
import ShopByGender from "./Shopbygender";
import KidsSection from "./GenderSection/KidsSection";
import WomenSection from "./GenderSection/WomenSection";
import MenSection from "./GenderSection/MenSection";
import UnisexSection from "./GenderSection/UnisexSection";
import CustomerReviews from "./CustomerReview";
import DiscoverSection from "./discoversection";
import ExploreMore from "./ExploreMore";
import Footer from "./footer";
import MediaSection from "./MediaSection";
import SocialHandle from "./socialhandles";
import CategoryGridSection from "./CategoryGrid";
import BestSellersSection from "./BestSellerSection";
import TrendingSection from "./TrendingSection";
import CollectionsSection from "./Collections";
import HomeHighlights from "./HomeHighlights";
import HeroBanner from "./HeroBannerSection";
import GemlayHeader from "./GemlayHeader";
import { ToastContainer } from "react-toastify";
import AllProducts from "./AllProducts";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="global-container">
            <GemlayHeader />
            <HeroBanner />
            <HomeHighlights />
            <CollectionsSection />
            <TrendingSection />
            <BestSellersSection />
            <CategoryGridSection />
            <ShopByGender />
            <CustomerReviews />
            <MediaSection />
            <DiscoverSection />
            <ExploreMore />
            <SocialHandle />
            <Footer />
            <ToastContainer />
          </div>
        }
      />

      <Route path="/category/women" element={
        <div className="global-container">
          <WomenSection />
        </div>
      } />
      <Route path="/category/men" element={
        <div className="global-container">
          <MenSection />
        </div>
      } />
      <Route path="/category/kids" element={
        <div className="global-container">
          <KidsSection />
        </div>
      } />
      <Route path="/category/unisex" element={
        <div className="global-container">
          <UnisexSection />
        </div>
      } />

      <Route path="/discover-all/:category?" element={
        <div className="global-container">
          <AllProducts />
        </div>
      } />
    </Routes>
  );
}
