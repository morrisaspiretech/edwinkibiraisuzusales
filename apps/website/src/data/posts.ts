export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  sourceUrl: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "locally-assembled-isuzu-mu-x-suv-kenya-launch",
    title: "Official Launch of the Locally Assembled Isuzu mu-X SUV in Kenya",
    excerpt: "On 2nd February 2026, Isuzu East Africa launched the locally assembled ISUZU mu-X SUV at its Mombasa Road plant — a landmark milestone in Kenya's industrialisation journey. Prices have dropped by up to 27%.",
    content: `
      <p class="lead">On Monday, 2nd February 2026, Isuzu East Africa launched the locally assembled ISUZU mu-X SUV at its Mombasa Road plant, marking a historic milestone in Kenya's industrialisation and the automotive sector.</p>

      <h2>100% Locally Assembled — A First for Africa</h2>
      <p>Rita Kavashe, Chair and Managing Director of Isuzu East Africa, announced that 100% of ISUZU vehicles sold in Kenya are now locally assembled. Even more significantly, the mu-X is the <strong>first ISUZU model assembled outside Thailand for export</strong> — putting Kenya on the global automotive manufacturing map.</p>
      <p>The launch was graced by Hon. Lee Kinyanjui, Cabinet Secretary, Ministry of Investments, Trade and Industry, who reaffirmed government support for the automotive sector through job creation, innovation, and local content policies, including the National Automotive Policy Bill.</p>

      <h2>What This Means for Buyers: Up to 27% Price Reduction</h2>
      <p>Thanks to enabling government policies, the shift to local assembly has directly reduced the mu-X price by up to 27% for Kenyan buyers. This is a significant saving that makes this premium 7-seater SUV more accessible to more Kenyans than ever before.</p>
      <p>Rita Kavashe also announced the launch of ISUZU's <strong>leasing programme</strong>, offering businesses and individuals an even more flexible way to own and operate a mu-X.</p>

      <h2>Jobs Created and Government Support</h2>
      <p>The new mu-X production line has created <strong>50 direct jobs</strong> and supports a broader socio-economic impact across the supply chain. Dr. Juma Mukhwana, Principal Secretary, noted that local assembly strengthens technical skills, value addition, and employment across the automotive value chain, aligning with the "Buy Kenya, Build Kenya" policy.</p>
      <p>H.E. Hiroshi Matsuura, Japanese Ambassador to Kenya, praised Isuzu East Africa for creating jobs and delivering reliable vehicles, highlighting the long-term partnership and Japanese investment in Kenya's manufacturing sector.</p>

      <h2>A World-Class SUV, Built to Global Standards</h2>
      <p>Keizo Yoshimura, VP of Isuzu Motors Thailand, affirmed that the mu-X meets global safety and quality standards, specifically adapted for African conditions. The vehicle comes in two variants — the mu-X LS-T and the premium mu-X LS-U — both offering a 3.0L diesel engine, 7-seat capacity, and the legendary Isuzu reliability.</p>
      <p>Eliud Kipchoge, Isuzu brand ambassador, highlighted the alignment of ISUZU's values with discipline, endurance, and excellence — values that resonate deeply with every Kenyan.</p>

      <h2>View the mu-X at Edwin Kibira Isuzu</h2>
      <p>As an authorized Isuzu dealer, Edwin Kibira Isuzu Sales has the locally assembled mu-X available for viewing and test drives at our Enterprise Road showroom in Nairobi. Contact us today to find out the latest pricing and financing options.</p>
    `,
    image: "/vehicles/mux-hero.png",
    date: "February 9, 2026",
    category: "News",
    sourceUrl: "https://www.isuzu.co.ke/2026/02/09/official-launch-of-the-locally-assembled-mu-x-suv/",
    author: {
      name: "Edwin Kibira",
      role: "Isuzu Sales Specialist",
      avatar: "/logo.jpg",
    }
  },
  {
    id: "2",
    slug: "lake-zone-construction-ksh-57-million-isuzu-fleet",
    title: "From Two Pickups to a KSh 57 Million Fleet: Lake Zone Construction's Isuzu Journey",
    excerpt: "Isuzu East Africa handed over three Isuzu FVZ tippers and one UD Truck to Lake Zone Construction Company in a transaction valued at KSh 57 million — a story of trust, performance, and long-term value.",
    content: `
      <p class="lead">Isuzu East Africa handed over three ISUZU FVZ tippers and one UD Truck to Lake Zone Construction Company in a transaction valued at <strong>KSh 57 million</strong>, marking another milestone in the company's growing partnership with one of Kenya's emerging construction firms.</p>

      <h2>A Journey That Started With Two Pickups</h2>
      <p>Lake Zone Construction, established in 2018, first partnered with Isuzu East Africa in 2023 following a meeting between its Founder and CEO, Alphan Iragwa, and Isuzu East Africa's Chair of the Board and Managing Director, Rita Kavashe.</p>
      <p>The company's initial purchase was just two ISUZU double-cab pickups. But the performance of those vehicles in demanding construction operations quickly demonstrated the reliability, durability, and low operating costs that have become synonymous with the Isuzu brand.</p>

      <h2>Why They Chose Isuzu Again</h2>
      <p>As Lake Zone's business expanded, Alphan chose to grow his fleet with ISUZU rather than pursue lower-cost alternatives. His reasoning was clear: <em>"dependable products, responsive aftersales support, and a strong long-term value proposition."</em></p>
      <p>This decision led to the KSh 57 million investment in three ISUZU FVZ tippers and one UD Truck — vehicles specifically chosen for heavy construction duties.</p>

      <h2>The Isuzu Drivers Academy: Training Beyond the Sale</h2>
      <p>Beyond the vehicle handover, Lake Zone Construction's drivers will undergo training through the <strong>Isuzu Drivers Academy</strong>, equipping them with the skills to operate the new fleet safely, efficiently, and professionally.</p>
      <p>This training program reflects Isuzu East Africa's commitment to supporting customers beyond vehicle delivery by enhancing driver competence, safety, and fleet productivity — a level of after-sales care that is rare in the industry.</p>

      <h2>What This Means for Your Business</h2>
      <p>Lake Zone Construction's journey is a powerful example of what Isuzu vehicles can do for a growing Kenyan business. Whether you're starting with a single pickup or ready for a multi-million shilling fleet upgrade, Isuzu East Africa — and dealers like Edwin Kibira Isuzu Sales — are here to support your journey every step of the way.</p>
      <p>Contact Edwin Kibira today to discuss fleet financing options for your construction or logistics business.</p>
    `,
    image: "/vehicles/f-series-truck.webp",
    date: "June 29, 2026",
    category: "Corporate Stories",
    sourceUrl: "https://www.isuzu.co.ke/2026/06/29/from-two-pickups-to-a-ksh-57-million-fleet-lake-zone-constructions-isuzu-journey/",
    author: {
      name: "Edwin Kibira",
      role: "Isuzu Sales Specialist",
      avatar: "/logo.jpg",
    }
  },
  {
    id: "3",
    slug: "2026-isuzu-dmax-new-5-year-warranty-unveiled-tanzania",
    title: "2026 Isuzu D-Max Unveiled: New 5-Year/120,000km Warranty & Upgraded Tech",
    excerpt: "The upgraded 2026 Isuzu D-Max was officially unveiled at the Twende Pamoja celebration in Dar es Salaam, showcasing a new five-year/120,000-kilometre warranty, advanced technology, and enhanced driver comfort.",
    content: `
      <p class="lead">The 2026 Isuzu D-Max received its East African debut at the Twende Pamoja fifth anniversary celebration of Al Mansour Auto Tanzania in Dar es Salaam on 10th July 2026 — and the upgrades are significant.</p>

      <h2>What's New on the 2026 D-Max?</h2>
      <p>Shiku Vamba, Marketing Communication Specialist at Isuzu Motors South Africa, presented the upgraded 2026 model, which showcases Isuzu's continued focus on:</p>
      <ul>
        <li><strong>Durability</strong> — Built tough for African road conditions, from tarmac highways to off-road terrain.</li>
        <li><strong>Advanced Technology</strong> — Updated infotainment, connectivity features, and driver assistance systems.</li>
        <li><strong>Enhanced Driver Comfort</strong> — Improved cabin ergonomics and ride quality for long-distance travel.</li>
        <li><strong>Long-Term Ownership Value</strong> — Including a new <strong>five-year/120,000-kilometre warranty</strong>, the most comprehensive warranty package in the D-Max's history.</li>
      </ul>

      <h2>The 5-Year Warranty — A Game Changer</h2>
      <p>The new 5-year/120,000km warranty is a landmark commitment by Isuzu to the quality and reliability of the D-Max. This gives Kenyan buyers unprecedented peace of mind — the longest warranty period offered on a pickup truck of this class in the East African market.</p>
      <p>For commercial buyers using the D-Max as a work tool, this dramatically reduces the risk and total cost of ownership over the vehicle's lifecycle.</p>

      <h2>The D-Max's Growing Footprint in East Africa</h2>
      <p>The anniversary celebration also highlighted the growing strength of the Isuzu network across East Africa. Rita Kavashe, Chair and Managing Director of Isuzu East Africa, noted the company's ongoing investments in regional after-sales capability, including the <strong>KSh 3.1 billion Parts Distribution Centre in Kenya</strong>, which will enhance parts availability and strengthen customer support across the region.</p>
      <p>Trusted partners including TANESCO, Coca-Cola Tanzania, and TotalEnergies were recognized as long-standing Isuzu customers, demonstrating the brand's trusted status among major East African corporates.</p>

      <h2>Ready to Drive the 2026 D-Max?</h2>
      <p>Edwin Kibira Isuzu Sales is your authorized Isuzu dealer in Nairobi. Visit our Enterprise Road showroom to enquire about the latest D-Max variants, availability, and the new 5-year warranty terms. We offer competitive pricing, flexible financing, and a complete after-sales support package.</p>
    `,
    image: "/vehicles/dmax-hero.png",
    date: "July 10, 2026",
    category: "News",
    sourceUrl: "https://www.isuzu.co.ke/2026/07/10/twende-pamoja-al-mansour-auto-tanzania-celebrates-five-years-of-growth-and-partnership/",
    author: {
      name: "Edwin Kibira",
      role: "Isuzu Sales Specialist",
      avatar: "/logo.jpg",
    }
  }
];
