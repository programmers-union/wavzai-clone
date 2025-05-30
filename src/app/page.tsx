import HomeSection1 from "@/components/HomeSection1";
import ScrollZoomImage from "@/components/ScrollZoomImage";
import SeafoodFeature from "@/components/SeafoodFeature";
import SeafoodHero from  '@/components/SeafoodRestaurant';

import Image from "next/image";

import LuxurySeafoodSection from "@/components/SeafoodRestaurant";
import RestaurantSection from "@/components/SeafoodRestaurant";
import SeafoodRestaurant from "@/components/SeafoodRestaurant";
import MenuShowcaseSection from "@/components/MenuSection";
import SeafoodServices from "@/components/SeafoodServices";
import AppetizersSection from "@/components/AppetizersSection";
import SeafoodMenu from "@/components/SeafoodMenu";
import ArticlesTestimonials from "@/components/ArticlesTestimonials";
import ArticleBannerSection from "@/components/ArticleBannerSection";
import BlogCarousel from "@/components/BlogCarousel";





export default function Home() {
  return (
<div className="">
<HomeSection1/>
<ScrollZoomImage />
<SeafoodFeature/>
 <SeafoodRestaurant />
 <MenuShowcaseSection/>
 <SeafoodServices/>
 <div className="container">
  <AppetizersSection/>
 <SeafoodMenu/>
 </div>
 <ArticlesTestimonials/>
 <ArticleBannerSection/>
 <BlogCarousel/>
  <BlogCarousel/>
 
 
 
 








</div>
 
  );
}


