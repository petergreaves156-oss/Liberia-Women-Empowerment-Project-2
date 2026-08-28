import { ProjectComponent, CountyData, Story, NewsItem, ResourceDocument } from '../types';

// Image imports
import heroBannerImg from '../assets/images/lwep_hero_banner_1787791060038.webp';
import livelihoodsImg from '../assets/images/lwep_livelihoods_1787791077134.webp';
import educationImg from '../assets/images/lwep_education_1787791090423.webp';
import communityImg from '../assets/images/lwep_community_1787791103646.webp';
import ministerialImg from '../assets/images/lwep_ministerial_1787791116010.webp';

export const projectImages = {
  heroBanner: heroBannerImg,
  livelihoods: livelihoodsImg,
  education: educationImg,
  community: communityImg,
  ministerial: ministerialImg,
};

export const projectStats = [
  {
    label: "Total Financing",
    value: "$44.6M",
    subtext: "World Bank IDA Grant & Concessional Credit",
    icon: "BadgeDollarSign",
  },
  {
    label: "Direct Beneficiaries",
    value: "267,200+",
    subtext: "Women, girls & vulnerable households across Liberia",
    icon: "Users",
  },
  {
    label: "Targeted Counties",
    value: "6 Counties",
    subtext: "Bomi, Gbarpolu, Grand Cape Mount, Grand Gedeh, River Cess, Rural Montserrado",
    icon: "MapPin",
  },
  {
    label: "Women Enterprises Funded",
    value: "36,000+",
    subtext: "Small cash grants, technical skills & market linkage",
    icon: "Store",
  },
  {
    label: "Active VSLAs",
    value: "1,250+",
    subtext: "Village Savings & Loan Associations fostered",
    icon: "PiggyBank",
  },
];

export const projectComponents: ProjectComponent[] = [
  {
    id: "component-1",
    number: 1,
    title: "Fostering Positive Social Norms and Community Mobilization",
    tagline: "Shifting mindsets, combating Gender-Based Violence (GBV), and empowering community champions.",
    description: "Component 1 addresses deeply entrenched gender inequalities and harmful social norms that restrict women's autonomy. Using proven community-led methodologies like SASA! Together, the project mobilizes traditional leaders, youth activists, and male champions to prevent intimate partner violence, eradicate early forced marriage, and foster equitable household decision-making.",
    objectives: [
      "Mobilize community dialogues and change agents in all targeted districts",
      "Implement SASA! Together methodology across 600+ rural communities",
      "Engage men, boys, and religious and traditional leaders as gender equality advocates",
      "Reduce tolerance for intimate partner violence and harmful traditional practices"
    ],
    keyActivities: [
      "Community action groups and activist training cohorts",
      "Community radio broadcasts and youth drama forums",
      "Sensitization workshops for chiefs, elders, and religious councils",
      "Referral linkage mapping for rapid GBV survivor support"
    ],
    metrics: [
      { label: "Community Activists Trained", value: "3,400+" },
      { label: "Community Dialogues Held", value: "1,850+" },
      { label: "SASA! Phases Active", value: "4 Stages" }
    ],
    imageSrc: communityImg,
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300"
  },
  {
    id: "component-2",
    number: 2,
    title: "Enhancing Basic Services in Health and Education",
    tagline: "Improving sexual and reproductive health access and ensuring girls remain in school.",
    description: "Component 2 strengthens access to adolescent sexual and reproductive health (ASRH) services, maternal care, and secondary education for girls. By tackling teenage pregnancy, menstrual hygiene poverty, and transportation barriers, LWEP safeguards adolescent girls' rights and educational completion.",
    objectives: [
      "Distribute school retention grants and academic stipends to vulnerable girls",
      "Provide dignity and menstrual hygiene management kits across rural schools",
      "Upgrade adolescent-friendly health services and reproductive health counseling",
      "Strengthen community-school parent-teacher gender monitoring committees"
    ],
    keyActivities: [
      "Adolescent girl mentorship clubs and safe space networks",
      "Distribution of essential educational learning kits and uniforms",
      "Health worker training on trauma-informed adolescent care",
      "Awareness campaigns to combat school-related gender-based violence (SRGBV)"
    ],
    metrics: [
      { label: "Girls Retained in School", value: "18,200+" },
      { label: "Dignity Kits Distributed", value: "45,000+" },
      { label: "Youth Safe Spaces", value: "120 Centers" }
    ],
    imageSrc: educationImg,
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300"
  },
  {
    id: "component-3",
    number: 3,
    title: "Promoting Resilient Livelihoods through Community-Led Approaches",
    tagline: "Catalyzing women's economic independence through direct grants, VSLAs, and vocational skills.",
    description: "As the economic engine of LWEP, Component 3 delivers direct business grants, financial literacy, climate-resilient agricultural training, and Village Savings and Loan Association (VSLA) creation. It equips women farmers, market traders, and artisans with the capital and business acumen needed to build resilient household incomes.",
    objectives: [
      "Disburse small and medium business start-up and scaling grants to women-led enterprises",
      "Establish and capitalize self-sustaining Village Savings and Loan Associations (VSLAs)",
      "Provide tailored agronomic and business training in climate-smart value chains",
      "Connect rural women producers directly to regional markets and cooperative networks"
    ],
    keyActivities: [
      "Direct digital and cash transfer disbursements to verified women groups",
      "VSLA kit distribution (metal savings cashboxes, passbooks, ledgers, three-padlock systems)",
      "Vocational training in food processing (cassava, palm oil, poultry, vegetables, soap-making)",
      "Market fairs, mobile banking literacy, and mentorship cohorts"
    ],
    metrics: [
      { label: "Women Businesses Funded", value: "36,000+" },
      { label: "VSLA Savings Mobilized", value: "$1.4M+ USD" },
      { label: "Agribusiness Value Chains", value: "8 Sectors" }
    ],
    imageSrc: livelihoodsImg,
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300"
  },
  {
    id: "component-4",
    number: 4,
    title: "Strengthening Public Institutions to Advance Gender Equality",
    tagline: "Enhancing institutional capacity, data systems, and policy delivery for Liberia's gender machinery.",
    description: "Component 4 builds institutional capacity across key ministries, including the Ministry of Gender, Children and Social Protection (MGCSP) and Ministry of Agriculture. It establishes modern sex-disaggregated data systems, strengthens county-level gender offices, and drives national gender policy reform.",
    objectives: [
      "Upgrade MGCSP's national gender data registry and monitoring infrastructure",
      "Equip County Gender Coordinators with mobility, IT tools, and case management skills",
      "Support legislative policy formulation and national action plans on women's rights",
      "Strengthen inter-agency coordination with justice, health, and law enforcement sectors"
    ],
    keyActivities: [
      "Deployment of digital Gender Management Information System (GMIS)",
      "Capacity building workshops for national civil servants and county officers",
      "Technical assistance for gender-responsive budgeting across line ministries",
      "Annual National Gender Scorecard and Policy Audits"
    ],
    metrics: [
      { label: "County Offices Equipped", value: "15 Counties" },
      { label: "Staff & Officials Trained", value: "850+ Personnel" },
      { label: "Data Systems Deployed", value: "1 Central GMIS" }
    ],
    imageSrc: ministerialImg,
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300"
  },
  {
    id: "component-5",
    number: 5,
    title: "Project Management, Monitoring & Evaluation, and Knowledge Management",
    tagline: "Ensuring transparent implementation, robust oversight, and continuous impact evaluation.",
    description: "Component 5 manages overall project execution through the dedicated Project Management Unit (PMU) at MGCSP in Congo Town, Monrovia. It ensures rigorous fiduciary compliance, environmental and social safeguards, third-party monitoring, and active Grievance Redress Mechanisms (GRM).",
    objectives: [
      "Operate a high-standard Project Management Unit (PMU) meeting World Bank guidelines",
      "Maintain transparent Grievance Redress Mechanism (GRM) with toll-free community hotlines",
      "Conduct baseline, mid-term, and final project impact evaluations",
      "Publish regular progress reports, procurement notices, and environmental safeguard audits"
    ],
    keyActivities: [
      "Quarterly multi-stakeholder steering committee oversight meetings",
      "Field-level verification missions and biometric beneficiary registries",
      "Community toll-free grievance resolution desk and feedback audits",
      "Interactive knowledge sharing symposia and best-practice publications"
    ],
    metrics: [
      { label: "Grievances Resolved", value: "98.4%" },
      { label: "Audits & Fiduciary Clear", value: "100%" },
      { label: "Field Verification Rate", value: "99.1%" }
    ],
    imageSrc: ministerialImg,
    badgeColor: "bg-stone-100 text-stone-800 border-stone-300"
  }
];

export const countyDataList: CountyData[] = [
  {
    id: "montserrado",
    name: "Rural Montserrado",
    capital: "Bensonville / Careysburg",
    districtFocus: ["Careysburg", "Todee", "Commonwealth Rural", "St. Paul River"],
    beneficiariesCount: 54200,
    grantsDisbursed: 7800,
    activeVSLAs: 260,
    schoolsAndClinicsSupported: 34,
    highlight: "Rapid growth of urban-fringe agro-processing, vegetable farming cooperatives, and young women's digital tailoring hubs.",
    leadCoordinator: "Patricia S. Freeman",
    contactOffice: "MGCSP County Gender Office, Bensonville Sub-station",
    coordinates: { x: 38, y: 55 }
  },
  {
    id: "bomi",
    name: "Bomi County",
    capital: "Tubmanburg",
    districtFocus: ["Klay", "Suehn Mecca", "Dewoin", "Senjeh"],
    beneficiariesCount: 42800,
    grantsDisbursed: 6100,
    activeVSLAs: 215,
    schoolsAndClinicsSupported: 28,
    highlight: "Major success in cassava flour and starch processing, community VSLA networks, and male engagement in SASA! Together dialogues.",
    leadCoordinator: "Maima K. Fahnbulleh",
    contactOffice: "Ministry of Gender County Office, Tubmanburg City",
    coordinates: { x: 30, y: 44 }
  },
  {
    id: "gbarpolu",
    name: "Gbarpolu County",
    capital: "Bopolu",
    districtFocus: ["Bopolu", "Belleh", "Gbarma", "Kongba", "Bokomu"],
    beneficiariesCount: 38400,
    grantsDisbursed: 5300,
    activeVSLAs: 180,
    schoolsAndClinicsSupported: 22,
    highlight: "Empowering women in remote forest communities with palm oil extraction mills, solar-powered storage, and adolescent school retention.",
    leadCoordinator: "Bendue D. Johnson",
    contactOffice: "Administrative Building, Bopolu City",
    coordinates: { x: 42, y: 35 }
  },
  {
    id: "grand_cape_mount",
    name: "Grand Cape Mount",
    capital: "Robertsport",
    districtFocus: ["Robertsport", "Commonwealth", "Tewor", "Porkpa", "Golakonneh"],
    beneficiariesCount: 41500,
    grantsDisbursed: 5900,
    activeVSLAs: 195,
    schoolsAndClinicsSupported: 26,
    highlight: "Fish processing value chains, women cross-border trading groups, and community-level anti-GBV surveillance committees.",
    leadCoordinator: "Hawa M. Massaquoi",
    contactOffice: "LWEP Project Hub, Robertsport City Hall Road",
    coordinates: { x: 20, y: 42 }
  },
  {
    id: "grand_gedeh",
    name: "Grand Gedeh County",
    capital: "Zwedru",
    districtFocus: ["Zwedru", "Tchien", "Cavalla", "Gbarzon", "B'hai", "Konobo"],
    beneficiariesCount: 46100,
    grantsDisbursed: 6400,
    activeVSLAs: 220,
    schoolsAndClinicsSupported: 30,
    highlight: "Flourishing poultry, rice production groups, and secondary school scholarship cohorts for adolescent girls.",
    leadCoordinator: "Comfort N. Gaye",
    contactOffice: "MGCSP County Secretariat, Peace Avenue, Zwedru",
    coordinates: { x: 78, y: 62 }
  },
  {
    id: "river_cess",
    name: "River Cess County",
    capital: "Cestos City",
    districtFocus: ["Cestos City", "Central RiverCess", "Morweh", "Timbo", "Beawor"],
    beneficiariesCount: 44200,
    grantsDisbursed: 6200,
    activeVSLAs: 180,
    schoolsAndClinicsSupported: 25,
    highlight: "Coastal and agrarian community mobilization, maternal health center support, and small enterprise grants.",
    leadCoordinator: "Zoe T. Tartoe",
    contactOffice: "Government Complex, Cestos City",
    coordinates: { x: 55, y: 68 }
  }
];

export const successStories: Story[] = [
  {
    id: "story-1",
    name: "Musu Kortu",
    age: 38,
    county: "Bomi County",
    role: "President, Klay Women Farmers Cooperative",
    quote: "With the LWEP grant of $500 and the VSLA savings box, our 25-member group bought our own mechanized cassava grater. We now supply gari to Monrovia markets twice a week!",
    impact: "Tripled monthly household income and sent all 4 of her daughters to secondary school.",
    category: "livelihood",
    image: livelihoodsImg,
  },
  {
    id: "story-2",
    name: "Princess S. Toe",
    age: 17,
    county: "River Cess County",
    role: "Secondary School Scholar & Youth Peer Educator",
    quote: "I almost dropped out in 10th grade when my family could not pay fees. The LWEP school retention support and dignity kits kept me in class. Today, I am preparing for my WASSCE exams.",
    impact: "Top of her class in science and serves as a peer counselor on menstrual health and teenage pregnancy prevention.",
    category: "education",
    image: educationImg,
  },
  {
    id: "story-3",
    name: "Elder Emmanuel K. Freeman",
    age: 56,
    county: "Gbarpolu County",
    role: "Community SASA! Together Male Champion & Town Chief",
    quote: "In our town, men used to think decisions belonged to husbands alone. Through LWEP dialogue circles, we realized that when our wives prosper in business and are respected, the whole village eats well.",
    impact: "Banned abusive practices and mobilized 40 male elders to support women's land access.",
    category: "social_norms",
    image: communityImg,
  },
  {
    id: "story-4",
    name: "Fatoumata Kamara",
    age: 44,
    county: "Grand Cape Mount",
    role: "Chairlady, Robertsport Fisherwomen VSLA",
    quote: "We used to borrow from local loan sharks with 50% interest. Now our VSLA has saved over 450,000 Liberian Dollars. We give low-interest loans to members to buy modern fish smokers.",
    impact: "Built cold-storage smoking facility and secured direct supply contracts with hotels in Monrovia.",
    category: "vsla",
    image: livelihoodsImg,
  }
];

export const newsArticles: NewsItem[] = [
  {
    id: "news-1",
    title: "MGCSP and World Bank Mission Complete Joint Supervisory Tour of LWEP Beneficiaries in Bomi and Cape Mount",
    date: "August 2026",
    category: "Supervisory Mission",
    summary: "World Bank delegation and Ministry officials engaged with women cooperative leaders and inspected new food processing hubs funded under Component 3.",
    readTime: "4 min read",
    author: "MGCSP Communications Bureau"
  },
  {
    id: "news-2",
    title: "Over 6,000 Additional Small Business Grants Disbursed to Rural Women Entrepreneurs",
    date: "July 2026",
    category: "Grant Milestone",
    summary: "The Project Management Unit (PMU) has concluded tranche disbursements across Grand Gedeh and River Cess, enabling smallholders to purchase agricultural machinery and trade inventory.",
    readTime: "5 min read",
    author: "LWEP PMU Secretariat"
  },
  {
    id: "news-3",
    title: "Lead Service Provider Plan International Rolls Out SASA! Together Facilitator Training in Gbarpolu",
    date: "June 2026",
    category: "Community Mobilization",
    summary: "Over 350 community activists and youth leaders gathered in Bopolu to master the second phase of social norm transformation and GBV reduction strategies.",
    readTime: "3 min read",
    author: "Gender Bureau, Congo Town"
  },
  {
    id: "news-4",
    title: "Gender Management Information System (GMIS) Launched at Ministerial Complex in Monrovia",
    date: "May 2026",
    category: "Institutional Reform",
    summary: "The Ministry of Gender unveiled its digital database designed to track gender disaggregated indicators across all 15 counties in real time.",
    readTime: "4 min read",
    author: "MGCSP IT & Policy Directorate"
  }
];

export const resourceDocuments: ResourceDocument[] = [
  {
    id: "doc-1",
    title: "Liberia Women Empowerment Project (LWEP) - Official Project Appraisal Document (PAD)",
    category: "Report",
    fileSize: "3.8 MB PDF",
    date: "World Bank / MGCSP",
  },
  {
    id: "doc-2",
    title: "LWEP Livelihood Grant Beneficiary Selection Criteria & Manual (Component 3)",
    category: "Guidelines",
    fileSize: "2.1 MB PDF",
    date: "MGCSP PMU Guidelines",
  },
  {
    id: "doc-3",
    title: "SASA! Together Community Mobilization Framework in Liberia (Component 1)",
    category: "Guidelines",
    fileSize: "4.5 MB PDF",
    date: "Plan International / MGCSP",
  },
  {
    id: "doc-4",
    title: "Environmental and Social Management Framework (ESMF) & Resettlement Policy",
    category: "Report",
    fileSize: "5.2 MB PDF",
    date: "Safeguards Directorate",
  },
  {
    id: "doc-5",
    title: "Procurement Plan & Lead Service Provider Notices (2025-2027)",
    category: "Procurement",
    fileSize: "1.4 MB PDF",
    date: "MGCSP Procurement Unit",
  }
];

export const contactDetails = {
  ministryName: "Ministry of Gender, Children and Social Protection (MGCSP)",
  projectName: "Liberia Women Empowerment Project (LWEP)",
  location: "Ministerial Complex, Congo Town, Monrovia, Liberia, 100010",
  email: "info@mogcsp.gov.lr",
  pmuEmail: "lwep.pmu@mogcsp.gov.lr",
  phone: "+231 770 000 000 / +231 886 000 000",
  grmHotline: "2883 (Toll-Free National Grievance & GBV Helpline)",
  officeHours: "Monday - Friday: 8:30 AM - 4:30 PM GMT",
  facebookPage: "Liberia Women Empowerment Project Gender Ministry Liberia",
  facebookFollowers: "1.9K followers • 396 posts",
  facebookUrl: "https://www.facebook.com"
};
