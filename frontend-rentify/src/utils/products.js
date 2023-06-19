import productImg01 from "../Images/technology1.jpg";
import productImg02 from "../Images/technology2.jpg";
import productImg03 from "../Images/technology3.jpg";

import productImg04 from "../Images/technology4.jpg";
import productImg05 from "../Images/technology5.jpg";
import productImg06 from "../Images/technology6.png";
import productImg007 from "../Images/single-sofa-04.png";

import productImg07 from "../Images/snowboard1.jpg";
import productImg08 from "../Images/snowboard2.jpg";
import productImg09 from "../Images/snowboard3.jpg";
import productImg10 from "../Images/rollerskate1.jpg";

import phone01 from "../Images/rollerskate2.jpg";
import phone02 from "../Images/kayak.jpg";
import phone03 from "../Images/kayak2.jpg";
import phone04 from "../Images/volleyball-net.jpg";
import phone06 from "../Images/phone-06.jpg";
import phone08 from "../Images/phone-08.png";

import watch01 from "../Images/tool1-tlb-micro.jpg";
import watch02 from "../Images/tool1-tlb-mini.png";
import watch03 from "../Images/tool3-mini-skid.jpg";
import watch04 from "../Images/sentra.png";

import wireless01 from "../Images/vehicle-copy.png";
import wireless02 from "../Images/nintendo switch.jpg";
import wireless03 from "../Images/png-transparent-jet-black-sony-ps4-pro-console-sony-playstation-4.png";
import wireless04 from "../Images/xbox-series-x.jpg";

import sofaSlide from "../Images/hero-img.png";
import watchSlide from "../Images/watch-07.png";

export const SliderData = [
  {
    id: 1,
    title: "50% Off For Your First Rent",
    desc: "Find all you need in just one place.",
    cover: sofaSlide,
  },
  {
    id: 2,
    title: "50% Off For Your First Rent",
    desc: "Find all you need in just one place.",
    cover: phone08,
  },
  {
    id: 3,
    title: "50% Off For Your First Rent",
    desc: "Find all you need in just one place.",
    cover: wireless01,
  },
  {
    id: 4,
    title: "50% Off For Your First Rent",
    desc: "Find all you need in just one place.",
    cover: watchSlide,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="close-circle-outline"></ion-icon>,
    title: "No cancel fee",
    subtitle: "Feel free to cancel at any time.",
    bg: "#FFE4B5",
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Safe Payment",
    subtitle: "Using Stripe for your safety.",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "Secure Payment",
    subtitle: "Rent without constrains.",
    bg: "#FFE4E1",
  },
  {
    icon: <ion-icon name="headset"></ion-icon>,
    title: " Tons of different products",
    subtitle: "Search through our categories.",
    bg: "#87CEEB",
  },
];

export const discoutProducts = [
  {
    id: "01",
    productName: "Epson Home Cinema Projector ",
    imgUrl: productImg01,
    category: "technology",
    price: 193,
    discount: 30,
    shortDesc:
      "Enjoy a cinematic experience with the Epson Home Cinema Projector.",
    description:
      "The Epson Home Cinema Projector delivers stunning, high-definition visuals that bring your movies, games, and presentations to life. With advanced projection technology and vibrant color reproduction, this projector offers an immersive viewing experience. It features easy setup and versatile connectivity options, allowing you to enjoy your favorite content on the big screen. Whether you're hosting a movie night or giving a professional presentation, the Epson Home Cinema Projector is the perfect choice.",
    reviews: [
      {
        rating: 4.7,
        text: "The picture quality of this projector is outstanding!",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Creality Ender 3 Pro 3D Printer ",
    imgUrl: productImg02,
    category: "technology",
    price: 253,
    discount: 20,
    shortDesc:
      "Unlock your creativity with the Creality Ender 3 Pro 3D Printer.",
    description:
      "The Creality Ender 3 Pro 3D Printer is a versatile and reliable 3D printing machine that allows you to bring your ideas to life. With its sturdy construction and precise printing capabilities, it delivers high-quality prints with ease. The printer features a large build volume, heated bed, and a user-friendly interface, making it suitable for both beginners and experienced users. Whether you're a hobbyist, artist, or engineer, the Creality Ender 3 Pro 3D Printer is the perfect tool to explore the world of 3D printing.",
    reviews: [
      {
        rating: 4.8,
        text: "This printer exceeded my expectations. It's easy to assemble and produces excellent prints.",
      },
      {
        rating: 4.8,
        text: "I've been using this printer for a while now, and it hasn't let me down. Highly recommended!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Burton Custom Flying V Snowboard",
    imgUrl: productImg08,
    category: "sports",
    price: 89,
    discount: 15,
    shortDesc:
      "Unleash your creativity and conquer the mountain with the Burton Custom Flying V Snowboard.",
    description:
      "The Burton Custom Flying V Snowboard is a versatile all-mountain board that excels in any terrain. Its Flying V profile combines the best of both camber and rocker, providing a playful and forgiving ride without sacrificing control and stability. The medium flex offers a perfect balance between responsiveness and flexibility, allowing you to effortlessly navigate through powder, carve on groomers, and hit the park. With its durable construction and legendary performance, the Burton Custom Flying V Snowboard is the go-to choice for riders of all levels. Take your riding to new heights with this exceptional snowboard.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Ride Warpig Snowboard",
    imgUrl: productImg09,
    category: "sports",
    price: 112,
    discount: 35,
    shortDesc:
      "Dominate the mountain with the Ride Warpig Snowboard, a versatile and aggressive board designed for all conditions.",
    description:
      "The Ride Warpig Snowboard is a true beast on the slopes. With its unique shape and aggressive profile, it offers unmatched control and power. The Tapered Directional Rocker provides excellent float in powder and effortless turn initiation, while the Carbon Array™ 3 Laminates deliver lightning-fast response and stability at high speeds. The Hybrid Glass construction ensures durability and lively performance, making this board suitable for aggressive riders who want to push their limits. Whether you're charging down steep lines, hitting big jumps, or carving up groomers, the Ride Warpig Snowboard will take your riding to the next level.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "Adventurer Kayak",
    imgUrl: phone03,
    category: "sports",
    price: 599,
    discount: 10,
    shortDesc:
      "Experience thrilling water adventures with the Adventurer Kayak.",
    description:
      "The Adventurer Kayak is designed for those who seek thrilling water adventures. Its sleek and durable construction ensures excellent performance and stability on the water. With its spacious cockpit and comfortable seating, you can paddle for hours without any discomfort. Whether you're exploring calm lakes, navigating through river rapids, or embarking on coastal adventures, the Adventurer Kayak is your reliable companion. It offers easy maneuverability, exceptional tracking, and ample storage space for your gear. Get ready to conquer the waterways with this high-quality kayak.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "Pro Volleyball Net",
    imgUrl: phone04,
    category: "sports",
    price: 799,
    discount: 5,
    shortDesc: "Enjoy competitive volleyball games with the Pro Volleyball Net",
    description:
      "The Pro Volleyball Net is designed for professional-level gameplay. It is made from high-quality materials to withstand intense matches and outdoor conditions. The net features sturdy construction with reinforced edges and durable netting that ensures optimal tension and prevents sagging. With its regulation size and height, it provides an authentic playing experience. The Pro Volleyball Net is easy to set up and compatible with standard volleyball poles. Whether you're playing in your backyard, at the beach, or in a tournament, this net will elevate your volleyball game to new heights.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
];

export const products = [
  {
    id: "01",
    productName: "Stone and Beam Westview ",
    imgUrl: productImg01,
    category: "technology",
    price: 193,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg02,
    category: "technology",
    price: 253,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Prusa i3 MK3S+ 3D Printer",
    imgUrl: productImg03,
    category: "technology",
    price: 173,
    shortDesc:
      "Experience precision and reliability with the Prusa i3 MK3S+ 3D Printer.",
    description:
      "The Prusa i3 MK3S+ 3D Printer is a professional-grade 3D printing machine known for its exceptional print quality and advanced features. Equipped with an auto-leveling bed, filament sensor, and a removable magnetic heatbed, it offers a seamless printing experience. The printer utilizes high-quality components and a robust frame to ensure precise and reliable prints. Whether you're a hobbyist, designer, or engineer, the Prusa i3 MK3S+ 3D Printer is a top choice for achieving outstanding results in your 3D printing projects.",
    reviews: [
      {
        rating: 4.6,
        text: "The Prusa i3 MK3S+ is hands down the best 3D printer I've ever used. The print quality is superb",
      },
      {
        rating: 4.9,
        text: "I've had this printer for a few months now, and it's been flawless. It's definitely worth the investment..",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Canon XA50 Professional Video Camera",
    imgUrl: productImg04,
    category: "technology",
    price: 163,
    shortDesc:
      "Capture professional-quality videos with the Canon XA50 Video Camera.",
    description:
      "The Canon XA50 Professional Video Camera is a high-performance camcorder designed for professional videographers and filmmakers. It features a 1.0-inch CMOS sensor and a powerful DIGIC DV 6 image processor, delivering stunning 4K UHD videos with exceptional clarity and detail. The camera offers a versatile 15x optical zoom lens with advanced image stabilization, allowing you to capture smooth and steady footage even in challenging shooting conditions. With a range of professional features, including dual SD card slots, XLR inputs, and manual controls, the Canon XA50 is a reliable and capable tool for capturing your creative vision.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "Canon VIXIA HF G50 4K Video Camera",
    imgUrl: productImg05,
    category: "technology",
    price: 163,
    shortDesc:
      "Capture stunning 4K videos with the Canon VIXIA HF G50 Video Camera",
    description:
      "The Canon VIXIA HF G50 4K Video Camera is a versatile camcorder designed for professional videography and enthusiast filmmaking. It features a 1/2.3-inch CMOS sensor and Canon's advanced DIGIC DV 6 image processor, delivering exceptional image quality and dynamic range. With its 4K UHD recording capability, you can capture stunning videos with incredible detail and clarity. The camera offers a 20x optical zoom lens with image stabilization, allowing you to get close to the action while maintaining steady footage. It also includes professional features like dual SD card slots, manual controls, and XLR inputs for external microphones. Whether you're shooting documentaries, events, or creative projects, the Canon VIXIA HF G50 empowers you to unleash your creativity and capture professional-grade videos.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Oculus Quest 2 VR Headset",
    imgUrl: productImg06,
    category: "technology",
    price: 163,
    shortDesc:
      "Immerse yourself in the world of virtual reality with the Oculus Quest 2 VR Headset.",
    description:
      "Experience virtual reality like never before with the Oculus Quest 2 VR Headset. This all-in-one VR system offers wireless freedom, powerful performance, and stunning visuals. With its high-resolution display and fast refresh rate, you'll enjoy crisp and smooth graphics in your favorite VR games and experiences. The Oculus Quest 2 features built-in sensors for accurate tracking and intuitive hand controls for natural interaction. It also offers room-scale VR, allowing you to move freely in your virtual environment. Whether you're gaming, watching movies, or exploring new worlds, the Oculus Quest 2 delivers an immersive and unforgettable VR experience.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Burton Custom X Snowboard",
    imgUrl: productImg07,
    category: "sports",
    price: 99,
    shortDesc:
      "Conquer the slopes with the high-performance Burton Custom X Snowboard.",
    description:
      "The Burton Custom X Snowboard is built for riders who demand the ultimate in precision and performance. With its advanced construction and cutting-edge technologies, this snowboard delivers unrivaled control and responsiveness on the mountain. The camber profile provides powerful edge hold and explosive pop, while the carbon fiber additives enhance stability and strength. Whether you're carving through groomers or charging down steep powder lines, the Burton Custom X will take your riding to the next level. Strap in and experience the pinnacle of snowboarding performance.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "Modern Arm Sofa",
    imgUrl: productImg007,
    category: "sofa",
    price: 173,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "Burton Custom Flying V Snowboard",
    imgUrl: productImg08,
    category: "sports",
    price: 89,
    shortDesc:
      "Unleash your creativity and conquer the mountain with the Burton Custom Flying V Snowboard.",
    description:
      "The Burton Custom Flying V Snowboard is a versatile all-mountain board that excels in any terrain. Its Flying V profile combines the best of both camber and rocker, providing a playful and forgiving ride without sacrificing control and stability. The medium flex offers a perfect balance between responsiveness and flexibility, allowing you to effortlessly navigate through powder, carve on groomers, and hit the park. With its durable construction and legendary performance, the Burton Custom Flying V Snowboard is the go-to choice for riders of all levels. Take your riding to new heights with this exceptional snowboard.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Ride Warpig Snowboard",
    imgUrl: productImg09,
    category: "sports",
    price: 112,
    shortDesc:
      "Dominate the mountain with the Ride Warpig Snowboard, a versatile and aggressive board designed for all conditions.",
    description:
      "The Ride Warpig Snowboard is a true beast on the slopes. With its unique shape and aggressive profile, it offers unmatched control and power. The Tapered Directional Rocker provides excellent float in powder and effortless turn initiation, while the Carbon Array™ 3 Laminates deliver lightning-fast response and stability at high speeds. The Hybrid Glass construction ensures durability and lively performance, making this board suitable for aggressive riders who want to push their limits. Whether you're charging down steep lines, hitting big jumps, or carving up groomers, the Ride Warpig Snowboard will take your riding to the next level.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: "Speedy Pro Roller Skates",
    imgUrl: phone01,
    category: "sports",
    price: 799,
    shortDesc:
      "Experience the thrill of speed with these high-performance roller skates.",
    description:
      "Get ready to take your skating skills to the next level with the Speedy Pro Roller Skates. Designed for speed and precision, these skates feature a lightweight and durable construction. The low-cut boot offers flexibility and freedom of movement, while the high-quality wheels and bearings ensure a smooth and fast ride. Whether you're racing on the track or skating through the city, these roller skates will provide the speed and control you need to dominate the streets. Lace up and get ready for an exhilarating skating experience",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "25",
    productName: "Retro Roller Skates",
    imgUrl: productImg10,
    category: "sports",
    price: 99,
    shortDesc:
      "Experience the nostalgia and joy of roller skating with these stylish retro roller skates.",
    description:
      "Get ready to roll back in time with these Retro Roller Skates. Inspired by the classic design of the 70s, these skates combine style and performance. The high-top boot provides ankle support and stability, while the durable wheels ensure a smooth ride. With a comfortable fit and adjustable straps, these skates are perfect for both beginners and experienced skaters. Whether you're cruising around the park or dancing at the roller rink, these retro roller skates will make you stand out and bring back the fun of roller skating.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "11",
    productName: "Voyager Pro Kayak",
    imgUrl: phone02,
    category: "sports",
    price: 799,
    shortDesc:
      "Embark on thrilling water adventures with the Voyager Pro Kayak.",
    description:
      "Experience the joy of paddling with the Voyager Pro Kayak. This versatile kayak is designed for both beginners and experienced paddlers alike. Its durable and lightweight construction ensures easy maneuverability and excellent stability on the water. With its spacious cockpit and comfortable seating, you can enjoy hours of paddling without any discomfort. Whether you're exploring calm lakes or tackling adventurous river rapids, the Voyager Pro Kayak is your perfect companion. Get ready to explore the waterways and create unforgettable memories with this reliable and high-performance kayak.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "12",
    productName: "Adventurer Kayak",
    imgUrl: phone03,
    category: "sports",
    price: 599,
    shortDesc:
      "Experience thrilling water adventures with the Adventurer Kayak.",
    description:
      "The Adventurer Kayak is designed for those who seek thrilling water adventures. Its sleek and durable construction ensures excellent performance and stability on the water. With its spacious cockpit and comfortable seating, you can paddle for hours without any discomfort. Whether you're exploring calm lakes, navigating through river rapids, or embarking on coastal adventures, the Adventurer Kayak is your reliable companion. It offers easy maneuverability, exceptional tracking, and ample storage space for your gear. Get ready to conquer the waterways with this high-quality kayak.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "13",
    productName: "Pro Volleyball Net",
    imgUrl: phone04,
    category: "sports",
    price: 799,
    shortDesc:
      "Enjoy competitive volleyball games with the Pro Volleyball Net.",
    description:
      "The Pro Volleyball Net is designed for professional-level gameplay. It is made from high-quality materials to withstand intense matches and outdoor conditions. The net features sturdy construction with reinforced edges and durable netting that ensures optimal tension and prevents sagging. With its regulation size and height, it provides an authentic playing experience. The Pro Volleyball Net is easy to set up and compatible with standard volleyball poles. Whether you're playing in your backyard, at the beach, or in a tournament, this net will elevate your volleyball game to new heights.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Samsung Galaxy S22",
    imgUrl: phone06,
    category: "technology",
    price: 699,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    productName: "ABC-2000",
    imgUrl: watch01,
    category: "tools",
    price: 299,
    shortDesc:
      "Air-conditioned cabin, joystick controls, quick-attach coupler for attachments, rear stabilizers for enhanced stability during digging operations",
    description:
      "Air-conditioned cabin, joystick controls, quick-attach coupler for attachments, rear stabilizers for enhanced stability during digging operations",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "17",
    productName: "Kubota BX25/BX23",
    imgUrl: watch02,
    category: "tools",
    price: 299,
    shortDesc:
      "Whether you're loading, digging, back-filling or trenching, count on the superior power, performance and durability of a Kubota tractor loader backhoe to get the job done",
    description:
      "Whether you're loading, digging, back-filling or trenching, count on the superior power, performance and durability of a Kubota tractor loader backhoe to get the job done. Built with legendary Kubota reliability, they're dependable, versatile and easy to operate. Attach and detach implements quickly and easily – often without leaving your seat",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "18",
    productName: "Kubota BX TLB",
    imgUrl: watch03,
    category: "tools",
    price: 299,
    shortDesc:
      "Whether you're loading, digging, back-filling or trenching, count on the superior power, performance and durability of a Kubota tractor loader backhoe to get the job done",
    description:
      "Whether you're loading, digging, back-filling or trenching, count on the superior power, performance and durability of a Kubota tractor loader backhoe to get the job done. Built with legendary Kubota reliability, they're dependable, versatile and easy to operate. Attach and detach implements quickly and easily – often without leaving your seat.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productName: "Nissan Sentra SV",
    imgUrl: watch04,
    category: "cars",
    price: 399,
    shortDesc:
      "Nissan Safety Shield 360, rearview camera, tire pressure monitoring system, advanced airbag system",
    description:
      "Nissan Safety Shield 360 (includes features like automatic emergency braking, blind-spot warning, rear cross-traffic alert), rearview camera, tire pressure monitoring system, advanced airbag system",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "20",
    productName: "Ford Explorer",
    imgUrl: wireless01,
    category: "cars",
    price: 199,
    shortDesc:
      "Alcantara and leather upholstery, sport bucket seats, carbon fiber trim, multifunction steering wheel",
    description:
      "Alcantara and leather upholstery, sport bucket seats, carbon fiber trim, multifunction steering wheel, digital instrument cluster, premium sound system, dual-zone automatic climate control",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "21",
    productName: "PlayStation 4",
    imgUrl: wireless03,
    category: "video games",
    price: 199,
    shortDesc: "Immerse yourself in extraordinary gaming experiences.",
    description:
      "The PlayStation 4 (PS4) is a powerful gaming console that delivers stunning graphics and immersive gameplay. It features a custom 1.6 GHz octa-core AMD processor and 8GB of GDDR5 RAM, providing smooth performance for both gaming and multimedia applications. The console comes with a DualShock 4 wireless controller that offers precise control and a built-in touchpad for enhanced interaction. With a 500GB hard drive, it offers ample storage for games, apps, and media content. The PS4 supports high-definition gaming and entertainment, including Blu-ray discs and streaming services like Netflix and Hulu. It also offers online multiplayer through the PlayStation Network and access to a wide range of exclusive games and content.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "22",
    productName: "Nintendo Switch",
    imgUrl: wireless02,
    category: "video games",
    price: 169,
    shortDesc: "A versatile gaming console for home and on-the-go play.",
    description:
      "The Nintendo Switch is a hybrid gaming console that offers both traditional home console gaming and portable handheld gaming in one device. It features a 6.2-inch LCD touchscreen display with a resolution of 1280 x 720, powered by the NVIDIA Custom Tegra processor. With 32GB of internal storage, it provides ample space for game installations, and you can expand the storage using microSDXC cards. The console comes with a pair of detachable Joy-Con controllers that can be used individually or attached to the console for handheld play. It supports Wi-Fi and Bluetooth connectivity, and features a USB Type-C port for charging and connecting to other devices. The Nintendo Switch is compatible with both physical game cartridges and digital downloads from the Nintendo eShop. It also offers online multiplayer and access to exclusive Nintendo Switch Online services.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "23",
    productName: "Xbox Series X",
    imgUrl: wireless04,
    category: "video games",
    price: 139,
    shortDesc: "Experience the future of gaming with the Xbox Series X",
    description:
      "The Xbox Series X is the next-generation gaming console from Microsoft. It features a powerful custom 3.8 GHz AMD Zen 2 processor and 16GB of GDDR6 RAM, delivering stunning visuals and fast loading times. With its 1TB solid-state drive (SSD), you can enjoy quick game startup and seamless gameplay. The console supports 4K gaming at 60 frames per second and is compatible with HDR content for vibrant colors and enhanced contrast. It comes with the new Xbox Wireless Controller, which offers improved ergonomics and low-latency wireless connectivity. The Xbox Series X also provides backward compatibility, allowing you to play a vast library of Xbox One, Xbox 360, and original Xbox games. Take your gaming to the next level with the Xbox Series X.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
];
