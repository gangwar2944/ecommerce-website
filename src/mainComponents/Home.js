import Header from '../components/Homepage/Alljs/Header';
import Subheader from '../components/Homepage/Alljs/Subheader';
import FeatureSection from '../components/Homepage/Alljs/FeatureSection';
import FeatureProduct from '../components/Homepage/Alljs/FeatureProduct';
import BannerBox from '../components/Homepage/Alljs/BannerBox';
import NewsLetter from '../components/Homepage/Alljs/NewsLetter';
import Footer from '../components/Homepage/Alljs/Footer';
import "../components/Homepage/Allcss/Footer.css";
import "../components/Homepage/Allcss/NewsLetter.css";
import "../components/Homepage/Allcss/BannerBox.css";
import "../components/Homepage/Allcss/FeatureProduct.css";
import "../components/Homepage/Allcss/FeatureSection.css";
import "../components/Homepage/Allcss/Subheader.css";
function Home(){
    return (
        <>
        <Header/>
        <Subheader/>
        <FeatureSection/>
        <FeatureProduct/>
        <BannerBox/>
        <NewsLetter/>
        <Footer/>
        </>
    )
}
export default Home;