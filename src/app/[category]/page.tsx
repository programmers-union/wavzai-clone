import HeroSection from "@/components/HeroSection";
import InstaGallerySection from "@/components/InstaGallerySection";
import LogoCarousel from "@/components/LogoCarousel ";
import MissionSection from "@/components/MissionSection";
import ReservationSection from "@/components/ReservationSection";
import RestaurantSection from "@/components/RestaurantSection";
import SeafoodRestaurant from "@/components/SeafoodRestaurant";
import TeamSection from "@/components/TeamSection";

const chefs1 = [
  {
    name: "Marvin McKinney",
    role: "SOUS CHEF",
    image:
      "https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c924a90b257dd9decdcd8b_passion-img-1.png",
    alt: "Marvin McKinney cooking",
  },
  {
    name: "Virgil Van Dijk",
    role: "HEAD CHEF",
    image:
      "https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c9255f9a8781c685b94bb4_passion-img-2.png",
    alt: "Virgil Van Dijk preparing food",
  },
];

const chefs2=[
  {
    name:"Dianne Russell",
    role:"Sommelier",
    image:"https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c92588090cc4df138a59f7_passion-img-3.png",
    alt:"Dianne Russel"

  },
  {
    name:"Darrell Steward",
    role:"Founder",
    image:"https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c925a4e846f9413f96243f_passion-img-4.png",
    alt:"Darrell Steward-founder"
  }
]

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function Category({ params }: PageProps) {
  const category = (await params).category;
  return (
    <div>
      <HeroSection />
      <RestaurantSection />
      <LogoCarousel />
      <SeafoodRestaurant />
      <div style={{ width: "100%" }} className="row">
        <div className="col-lg-6 border-end">
          <MissionSection
            title="Our Mission"
            description="Our mission is to create innovative architectural solutions that seamlessly merge functionality and sustainability.an emblem of French culinary finesse, marries tradition with modernity. Inspired by the rhythm of the seasons"
            image="https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c921cfda404952e66c3f0c_our-mission-vision-img-1.png"
          />
        </div>
        <div className="col-lg-6">
          <MissionSection
            title="Our Vision"
            description="Our vision is to be a global leader in thinking architecture, shaping the future through cutting design and responsible building practices. you’re here for a solo creative escape, a fun group activity,  we invite you to become part of our growing community."
            image="https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c922761f63dfd61d15e8a1_our-mission-vision-img-2.png"
          />
        </div>
      </div>
      <div className="menu-section-header d-flex justify-content-between align-items-center px-5 py-4">
        <div>
          <h1 className="menu-section-title display-4 fw-bold">
            Passion On Every Plate:
            <br />
            Meet Our Dream Chefs.
          </h1>
        </div>
        <div>
          <button className="btn btn-info rounded-pill px-4 py-2 text-white fw-bold">
            EXPLORE ALL MENU
          </button>
        </div>
      </div>
      <div className="">
        <TeamSection members={chefs1} />
      </div>
      <div className="">
        <TeamSection members={chefs2} />
      </div>
      <ReservationSection/>
      <InstaGallerySection/>
    </div>
  );
}
