import Image from "next/image";
import Link from "next/link";


const menuItems = [
  { id: 1, image: "/price-1.png" },
  { id: 2, image: "https://cdn.prod.website-files.com/67c2f70c3803e214c0134bfa/67c7dc445eb03bb224ff0ac4_products-scroll-img-2.png" },
  { id: 3, image:  "https://cdn.prod.website-files.com/67c2f70c3803e214c0134bfa/67c7dcb21d6bab08bf7f46d0_products-scroll-img-4.png" },
  { id: 4, image: "/price-1.png"},
  { id: 5, image: "/price-1.png" },
  { id: 6, image: "https://cdn.prod.website-files.com/67c2f70c3803e214c0134bfa/67c7dc89f921c60d8708b903_products-scroll-img-3.png" },
  { id: 7, image: "https://cdn.prod.website-files.com/67c2f70c3803e214c0134bfa/67c7dcb21d6bab08bf7f46d0_products-scroll-img-4.png" },
  { id: 8, image: "/price-1.png" },
  { id: 9, image: "/price-1.png" },
  { id: 10, image: "https://cdn.prod.website-files.com/67c2f70c3803e214c0134bfa/67c7dcc7bd4b8853a7ccfece_products-scroll-img-5.png" },
  { id: 11, image: "https://cdn.prod.website-files.com/67c2f70c3803e214c0134bfa/67c7dce719ac10cb271f50a7_products-scroll-img-6.png" },
  { id: 12, image: "/price-1.png" }
];

const MenuSection = () => {
  return (
    <section className="menu-section">
      {/* Header Section */}
      <div className="menu-section-header d-flex justify-content-between align-items-center px-5 py-4">
        <div>
          <h1 className="menu-section-title display-4 fw-bold">
            A Journey Of Taste,<br />
            Decades In The Making.
          </h1>
        </div>
        <div>
          <button className="btn btn-info rounded-pill px-4 py-2 text-white fw-bold">
            EXPLORE ALL MENU
          </button>
        </div>
      </div>

      {/* Sticky Image + Scrollable Grid Section */}
      <div className="menu-section-content d-flex">
        {/* Sticky Image */}
        <div className="menu-section-left position-sticky top-0 h-100">
          <Image
            src="https://cdn.prod.website-files.com/67c0036d59183921f0311a84/67c66fe57854ed0846aa61cd_menu-big-img.png"
            alt="Lobster Mac & Cheese"
            width={500}
            height={500}
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </div>

         {/* Scrollable Grid */}
  <div className="menu-section-right overflow-auto">
    <div className="menu-section-grid d-flex flex-wrap">
      {menuItems.map((item) => (
        <div key={item.id} className="menu-section-card col-6 p-0">
          <Link href={`/menu/item-${item.id}`}>
            
              <Image
                src={item.image}
                alt={`Menu item ${item.id}`}
                width={250}
                height={250}
                className="img-fluid w-100 object-fit-cover"
              />
            
          </Link>
        </div>
      ))}
    </div>
  </div>
</div>
    </section>
  );
};

export default MenuSection;
