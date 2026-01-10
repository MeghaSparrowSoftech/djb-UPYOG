export const ABOUT = {
  /* ================= SIDE NAV ================= */
  sideNav: [
    { key: "about", label: "About Us", defaultTab: "overview" },
    { key: "org", label: "Organisation Structure" },
    { key: "citizen", label: "Citizen Charter" },
    { key: "who", label: "Who's Who" },
    { key: "web", label: "Web Information Managers Details" },
  ],

  /* ================= TABS ================= */
  tabs: [
    { key: "overview", label: "Overview" },
    { key: "water", label: "Water Sector" },
    { key: "waste", label: "Waste Water" },
    { key: "tariff", label: "Tariff & Revenue" },
    { key: "quality", label: "Quality & RTI" },
  ],

  /* ================= CONTENT ================= */
  content: {
    overview: [
  {
    type: "heading",
    text: "Varunalaya Building – Head Office of DJB",
  },

  {
    type: "paragraph",
    html:
      "The <strong>Delhi Jal Board (DJB)</strong> was constituted on <strong>6th April, 1998</strong> through an Act of the Delhi Legislative Assembly incorporating the previous Delhi Water Supply and Sewage Disposal Undertaking.",
  },

  {
    type: "paragraph",
    html:
      "The Delhi Jal Board is responsible for the <strong>production and distribution of potable water</strong> after treating raw water from various sources such as <strong>River Yamuna, Bhakhra Storage, Upper Ganga Canal and Groundwater</strong>. DJB also provides <strong>treatment and disposal of waste water</strong>.",
  },

  {
    type: "paragraph",
    html:
      "The Delhi Jal Board provides water in bulk to the <strong>New Delhi Municipal Council (NDMC)</strong> and <strong>Cantonment areas</strong>. Sewage from these areas is also collected for treatment and disposal by the Delhi Jal Board.",
  },

  {
    type: "heading",
    text: "Mission",
  },

  {
    type: "paragraph",
    html:
      "The <strong>Delhi Jal Board (DJB)</strong>, constituted under the <strong>Delhi Jal Board Act, 1998</strong>, is responsible for the production and distribution of drinking water as also for the collection, treatment and disposal of domestic sewage in the National Capital Territory of Delhi.",
  },

  {
    type: "heading",
    text: "Services Provided",
  },

  {
    type: "list",
    items: [
      "Supply of potable drinking water",
      "Supply of potable water through tankers whenever needed",
      "Supply of packaged water <strong>“JAL”</strong> in jars through <strong>Jal Suvidha Kendras</strong>",
      "Treatment and disposal of sewage",
      "Supply of biogas, sludge manure and treated waste water",
      "Testing of water samples",
      "Technical support for installation of Rain Water Harvesting Systems through Rain Centres and divisional offices",
    ],
  },
],

water: [
  {
    type: "heading",
    text: "Water Sector",
  },

  {
    type: "list",
    items: [
      "Delhi’s water production has been maintained at <strong>900 MGD</strong>.",
      "Underground Reservoirs (UGR) & Booster Pumping Stations (BPS) at Karala, Sonia Vihar, Mayapuri, Mahipalpur, Najafgarh and Mundka are under construction.",
      "UGRs at Bijwasan and Rajokari are proposed to be constructed.",
      "Second <strong>50 MGD New Dwarka Water Treatment Plant</strong> is proposed.",
      "Water supply has been augmented by redevelopment of Palla tubewells.",
      "About <strong>85%</strong> households of Delhi have access to piped water supply.",
      "Water is supplied to about <strong>19.5 million</strong> population through a network of <strong>14,355 km pipelines</strong> and <strong>107 primary UGRs</strong> ensuring equitable water supply.",
      "<strong>250</strong> new departmental water tankers with stainless steel containers, <strong>407</strong> GPS-fitted stainless steel tankers and <strong>376</strong> MS tankers have been deployed.",
      "A tanker management system developed by <strong>DIMTS</strong> monitors real-time movement of tankers.",
      "DJB has uploaded tanker schedules for delivery at predetermined fixed points.",
      "Water supply networks developed in planned and unplanned areas; networks laid in <strong>1,482 unauthorized colonies</strong>.",
      "Water supply facility through network provided to <strong>36 new unauthorized colonies</strong>.",
      "More than <strong>355 km</strong> of new pipelines laid.",
      "About <strong>108 km</strong> of old water lines replaced to avoid contamination.",
      "Separate connectivity from the <strong>Western Yamuna Canal</strong> made to prevent ammonia pollution.",
      "<strong>60 Water ATMs</strong> installed where pipeline laying was not feasible.",
      "Defective prestressed cement pipes replaced with MS-lined and coated pipes.",
      "Zone-wise water supply timings and official contacts uploaded for consumers.",
    ],
  },

  {
    type: "heading",
    text: "Water Improvement Projects",
  },

  {
    type: "paragraph",
    html:
      "Water improvement projects are in progress in the command areas of Malviya Nagar UGR, Nangloi WTP, Vasant Vihar and Mehrauli to reduce Non-Revenue Water (NRW), improve water pressure and increase collection efficiency.",
  },

  {
    type: "paragraph",
    html:
      "The scope includes replacement and augmentation of existing networks, house service connections, water meter replacement and repair of visible and invisible leakages.",
  },

  {
    type: "paragraph",
    html: "The key performance indicators include:",
  },

  {
    type: "list",
    items: [
      "Conversion of intermittent supply into <strong>24x7 water supply</strong>",
      "Reduction of Non-Revenue Water",
      "Reduction in power consumption",
      "Ensuring quality potable water",
      "Improving collection efficiency",
      "Quick disposal of consumer complaints",
    ],
  },

  {
    type: "heading",
    text: "Raw Water Sources and Water Production",
  },

  {
    type: "table",
    columns: [
      "S. No.",
      "Name of WTP",
      "Installed Capacity (MGD)",
      "Average Production (MGD)",
      "Source of Raw Water",
    ],
    rows: [
      [1, "Sonia Vihar", "140", "140", "Upper Ganga Canal"],
      [2, "Bhagirathi", "100", "100", "Upper Ganga Canal"],
      [3, "Chandrawal I & II", "90", "95", "River Yamuna"],
      [4, "Wazirabad I, II & III", "120", "123", "River Yamuna"],
      [5, "Haiderpur I & II", "200", "210", "Bhakra Storage & Yamuna"],
      [6, "Nangloi", "40", "40", "Bhakra Storage"],
      [7, "Okhla", "20", "20", "Munak Canal"],
      [8, "Bawana", "20*", "15", "—"],
      [9, "Dwarka", "50*", "40", "—"],
      [10, "Recycling Plants", "45", "40", "Process Waste Water"],
      [11, "Ranney Wells & Tube Wells", "80", "80", "Ground Water"],
      [
        { colSpan: 2, text: "Total" },
        { colSpan: 3, text: "900 MGD" },
      ],
    ],
  },

  {
    type: "heading",
    text: "Future Projects in Augmentation of Water Sector",
  },

  {
    type: "list",
    items: [
      "Setting up of a recycling wastewater plant to produce 3 MGD potable water at Nangloi.",
      "Construction of 8 WTPs with ammonia removal plants and rehabilitation of existing WTPs.",
      "Water supply improvement schemes under Chandrawal and Wazirabad WTPs with funding from <strong>JICA</strong> and <strong>ADB</strong>.",
      "Promotion of water conservation through efficient fixtures, Rain Water Harvesting, awareness campaigns and public participation.",
      "Implementation of <strong>Jan Jal Prabandhan Yojna (JJPY)</strong> empowering RWAs.",
      "Extension of recycled water conveyance mains for non-potable use.",
      "Solar power generation at WTPs, UGRs and sewerage installations.",
      "Installation of <strong>e-Piaos</strong> at 13 locations along Inner Ring Road.",
    ],
  },

  {
    type: "heading",
    text: "JAL Project – Packaged Drinking Water",
  },

  {
    type: "paragraph",
    html:
      "The Delhi Jal Board launched the <strong>“JAL”</strong> project to provide processed and purified packaged drinking water in <strong>20-liter jars</strong> and cartons of disposable glasses (<strong>24 × 250 ml</strong>).",
  },

  {
    type: "paragraph",
    html:
      "“JAL” is certified by the <strong>Bureau of Indian Standards</strong> (License No. <strong>CM/L 8500666</strong>) and produced using stringent purification techniques.",
  },

  {
    type: "paragraph",
    html:
      "Contact: <strong>29234924, 29234928, 9650591677</strong>",
  },

  {
    type: "heading",
    text: "List of Jal Suvidha Kendras",
  },

  {
    type: "table",
    columns: ["S. No.", "Location", "Contact No."],
    rows: [
      [1, "Opp. Sadiq Nagar, Near Meter Work Shop, GK-1 (Gate No. 2)", "7840825354"],
      [2, "Jal Sadan, Shiv Mandir Marg, Lajpat Nagar", "8860219700, 9871384507"],
      [3, "Vasant Kunj, B-1, Near Telephone Exchange", "—"],
      [4, "R.K. Puram, Sector-7", "9811194748"],
      [5, "Sarita Vihar, J-Block Water Gallery", "8800126821, 26976855"],
      [6, "New Friends Colony, D-Block Community Centre", "7042005748"],
      [7, "Varunalaya Phase-I, Near Mata Mandir, Karol Bagh", "9599825282, 7042005748"],
      [8, "C.R. Park, Near D-5 DJB Pumping Station", "9250337777"],
      [9, "Ramlila Ground, Near Delhi Gate", "9871864333"],
      [10, "Khanpur T-Point, Near Bus Terminal", "9582600604"],
      [11, "Mandawali, Opp. IP Extension, Ras Vihar Apartment", "9953940190"],
      [12, "All JSK – JAL Helpline", "011-60909999"],
    ],
  },

  {
    type: "heading",
    text: "Delhi Jal Board Bottling Plant – Key Contacts",
  },

  {
    type: "table",
    columns: ["Name", "Designation", "Office No.", "Mobile No.", "Email"],
    rows: [
      [
        "Sh. Sanjay Gupta",
        "Director, Bottling Plant",
        "29810956",
        "9650290707",
        "dirbplant12@gmail.com / sesouthdjb@gmail.com",
      ],
      [
        "Sh. Ram Kishore",
        "Executive Engineer",
        "29233037",
        "9650291313",
        "eegk1@yahoo.co.in",
      ],
      [
        "Sh. Arvind Pandey",
        "ACWA, Bottling Plant",
        "29234924",
        "9999995807",
        "pandey_arvind@ymail.com",
      ],
      [
        "Smt. Sushma Rani",
        "ZRO / AO, Bottling",
        "29234924",
        "9650110079",
        "sushma.djb@gmail.com",
      ],
    ],
  },
],

waste: [
  {
    type: "heading",
    text: "Waste Water Sector",
  },

  {
    type: "paragraph",
    html:
      "DJB has finalized the <strong>Sewerage Master Plan – 2031 (SMP-2031)</strong> to extend sewerage facilities to all unsewered areas in a phased manner, prioritizing command areas where outfall infrastructure exists.",
  },

  {
    type: "list",
    items: [
      "Sewerage network of <strong>8100 km</strong> including internal, peripheral and <strong>200 km trunk sewers</strong>",
      "<strong>58</strong> sewage pumping stations & WWTPs with total capacity of <strong>607 MGD</strong>",
      "Sewerage laid in <strong>130 urban villages, 54 villages</strong> and <strong>266 unauthorized colonies</strong>",
      "Sewerage works in progress in <strong>355 unauthorized colonies</strong>",
      "<strong>70 MGD Coronation Pillar WWTP</strong> – 40% construction completed",
      "Rehabilitation of WWTPs at <strong>Kondli & Rithala</strong> under YAP-III",
      "New <strong>124 MGD WWTP at Okhla</strong> proposed under YAP-III",
      "Waste-to-energy initiatives generating ~ <strong>72,600 KWH/day</strong>",
      "<strong>89 MGD treated effluent</strong> supplied for non-potable uses (horticulture, cooling, washing of DTC buses, etc.)",
      "Rehabilitation of <strong>167 km peripheral</strong> and <strong>21 km trunk sewers</strong> using trenchless technology",
      "<strong>14 km</strong> new sewage pumping mains under YAP-III",
      "Interceptor Sewer Project trapping <strong>242 MGD</strong> sewage from Najafgarh, Supplementary & Shahdara drains",
      "Project listed among <strong>KPMG’s 100 most innovative infrastructure projects</strong>",
      "Treated effluent available @ <strong>₹7/KL</strong> and sludge manure available free of cost at STPs",
    ],
  },

  {
    type: "heading",
    text: "Future Projects",
  },

  {
    type: "list",
    items: [
      "Automation of all sewage pumping stations",
      "Scientific sludge management systems",
      "Groundwater recharge using treated effluent in <strong>76 water bodies</strong>",
      "Expansion of sewerage facilities in remaining unsewered areas",
      "Proposed <strong>25 MLD WWTP</strong> at Timarpur using <strong>phytorid technology</strong>",
      "Decentralized WWTPs for localized treatment & reuse",
    ],
  },

  {
    type: "heading",
    text: "Waste Water Treatment Plants",
  },

  {
    type: "table",
    columns: ["S. No.", "Name of Plant", "Capacity (MGD)"],
    rows: [
      [1, "Okhla", "140"],
      [2, "Keshopur", "72"],
      [3, "Coronation Pillar", "30"],
      [4, "Rithala", "80"],
      [5, "Kondli", "70"],
      [6, "Vasant Kunj", "5"],
      [7, "Yamuna Vihar", "35"],
      [8, "Pappankalan", "40"],
      [9, "Narela", "10"],
      [10, "Najafgarh", "5"],
      [11, "Mehrauli", "5"],
      [12, "Delhi Gate Nallah", "17.2"],
      [13, "Dr. Sen Nursing Home", "2.2"],
      [14, "Rohini", "15"],
      [15, "Nilothi", "60"],
      [16, "Commonwealth Games Village", "1"],
      [17, "Molarband", "0.66"],
      [18, "Kapashera", "5"],
      [19, "Chilla", "9"],
      [20, "Ghitorni", "5"],
      [
        { colSpan: 2, text: "Total" },
        { colSpan: 1, text: "607 MGD" },
      ],
    ],
  },
],
tariff: [
  /* ================= REVENUE ================= */
  {
    type: "heading",
    text: "Revenue",
  },

  {
    type: "paragraph",
    html: "The major sources of revenue for Delhi Jal Board include:",
  },

  {
    type: "list",
    items: [
      "Water Charges",
      "Sale of packaged drinking water",
      "Development Charges",
      "Infrastructure Charges (Water & Sewerage)",
    ],
  },

  {
    type: "paragraph",
    html:
      "Through continuous efforts, DJB has significantly improved revenue collection over the years.",
  },

  {
    type: "subheading",
    text: "Revenue Collection (₹ in Lakh)",
  },

  {
    type: "revenueTable",
    columns: ["Year", "Revenue"],
    rows: [
      { year: "2009–10", value: "64,936.05", bar: "bar-36" },
      { year: "2010–11", value: "92,531.62", bar: "bar-52" },
      { year: "2011–12", value: "1,20,247.97", bar: "bar-68" },
      { year: "2012–13", value: "1,51,926.49", bar: "bar-86" },
      { year: "2013–14", value: "1,43,715.33", bar: "bar-81" },
      { year: "2014–15", value: "1,21,993.29", bar: "bar-69" },
      { year: "2015–16", value: "1,61,583.50", bar: "bar-91" },
      { year: "2016–17", value: "1,78,220.00", bar: "bar-100" },
      { year: "2017–18", value: "1,71,981.00", bar: "bar-96" },
    ],
  },

  /* ================= WATER CONNECTIONS ================= */
  {
    type: "heading",
    text: "Sanctioned Water Connections",
  },

  {
    type: "table",
    columns: ["As On", "Metered", "Unmetered", "Bulk", "Total"],
    rows: [
      ["01.04.2010", "14,45,610", "3,21,570", "3,529", "17,70,709"],
      ["01.04.2013", "16,47,363", "3,30,445", "3,808", "19,81,616"],
      ["01.04.2016", "19,49,150", "3,89,694", "5,424", "23,38,844"],
      ["01.04.2018", "24,16,478", "1,81,412", "5,131", "26,03,021"],
    ],
  },

  /* ================= CATEGORY WISE ================= */
  {
    type: "heading",
    text: "Category-wise Active Connections",
  },

  {
    type: "table",
    columns: ["As On", "Category I", "Category II", "Bulk", "Total"],
    rows: [
      ["01.04.2017", "21,01,074", "82,193", "3,554", "21,86,821"],
      ["01.04.2018", "21,72,204", "79,491", "3,500", "22,55,191"],
    ],
  },

  /* ================= WATER TARIFF ================= */
  {
    type: "heading",
    text: "Water Tariff (w.e.f. 14.08.2015)",
  },

  {
    type: "subheading",
    text: "Category I – Domestic",
  },

  {
    type: "table",
    columns: [
      "Monthly Consumption",
      "Service Charge (₹)",
      "Volumetric Charge (₹/KL)",
    ],
    rows: [
      ["Up to 20 KL", "146.41", "4.39"],
      ["20–30 KL", "219.62", "21.97"],
      ["Above 30 KL", "292.82", "36.61"],
    ],
  },

  {
    type: "subheading",
    text: "Category II – Commercial / Industrial",
  },

  {
    type: "table",
    columns: [
      "Monthly Consumption",
      "Service Charge (₹)",
      "Volumetric Charge (₹/KL)",
    ],
    rows: [
      ["0–6 KL", "146.41", "14.64"],
      ["6–15 KL", "292.82", "21.96"],
      ["15–25 KL", "585.64", "29.28"],
      ["25–50 KL", "1024.87", "73.21"],
      ["50–100 KL", "1171.28", "117.13"],
      ["Above 100 KL", "1317.69", "146.41"],
    ],
  },

  /* ================= FREE WATER ================= */
  {
    type: "heading",
    text: "Free Water Supply Policy",
  },

  {
    type: "paragraph",
    html:
      "Domestic consumers with functional meters are eligible for <strong>free water supply up to 20 KL per month</strong>. Consumption beyond this limit is billed as per applicable tariff.",
  },
],

quality: [
  {
    type: "heading",
    text: "Treatment & Quality Control",
  },

  {
    type: "paragraph",
    html:
      "DJB maintains strict drinking water quality standards as per <strong>BIS 10500</strong> through plant laboratories and zonal laboratories across Delhi.",
  },

  {
    type: "heading",
    text: "Right to Information (RTI)",
  },

  {
    type: "paragraph",
    html:
      "Information under the Right to Information Act, 2005 including details of Public Information Officers (PIOs), Appellate Authorities and disclosures is available on the official DJB website.",
  },
],

  who: [
      {
        type: "heading",
        text: "Who's Who"
      },
      {
        type: "table",
        columns: [
          "S.No.",
          "Name",
          "Designation",
          "Office Phone No.",
          "Mobile No.",
          "E-mail Id"
        ],
        rows: [
          ["1", "Sh. Kaushal Raj Sharma, IAS (UP: 2006)", "CHIEF EXECUTIVE OFFICER", "23511658", "-", "ceodelhi[dot]djb[at]nic[dot]in"],
          ["2", "Sh. Yatendra Kumar", "P.S to CEO", "23544795", "9650622833", "ceodelhi[dot]djb[at]nic[dot]in"],
          ["3", "Sh. Mayank Shekhar Mishra", "PA to CEO", "23511658", "9717709342", "ceodelhi[dot]djb[at]nic[dot]in"],
          ["4", "Dr. Kinny Singh, IAS (AGMUT: 2014)", "MEMBER (ADMIN.)", "23550955", "-", "mradmin[dot]djb[at]nic[dot]in"],
          ["5", "Ms. Krishna", "PA to Member (Admin)", "23558223", "-", "mradmin[dot]djb[at]nic[dot]in"],
          ["6", "Sh. Sanjeev Mittal, IAS (AGMUT: 2011)", "ADDL. CEO / CVO", "23614836", "-", "addlceo[dot]djb[at]nic[dot]in"],
          ["7", "Ms. Kiran Gupta", "PS to Addl. CEO", "23614836", "9650081620", "addlceo[dot]djb[at]nic[dot]in"],
          ["8", "Sh. Ankit Aggarwal", "PA to Addl. CEO", "23614836", "7017167896", "addlceo[dot]djb[at]nic[dot]in"],
          ["9", "Sh. Manoj Kumar", "DIRECTOR (A&P)", "23544794", "-", "djbdirector[at]gmail[dot]com"],
          ["10", "Ms.", "PS to Director (A&P)", "23544794", "-", "djbdirector[at]gmail[dot]com"],
          ["11", "Sh. Naman Agnihotri", "PA to Director (A&P)", "23544794", "-", "djbdirector[at]gmail[dot]com"],
          ["12", "Sh.", "Jt. Director (Admn.)", "-", "-", "-"],
          ["13", "Sh. Ankit Yadav", "PA to Joint Director (Admin)", "-", "9654810300", "ankitrao9654[at]gmail[dot]com"],
          ["14", "Sh. Hemant Bhardwaj", "DD (T) / DD (GAB)", "23519825, *413", "-", "djbact1[at]gmail[dot]com"],
          ["15", "Sh. Bhupender Kumar", "PA to DD (T)", "-", "8307013231", "-"],
          ["16", "Smt. Suvarna Ogale Shinde", "DD (D) / DD (RTI) & Parliament", "23551279", "-", "-"],
          ["17", "Sh. Lokesh Singh", "PA to DD (D)", "-", "9354285704", "-"],
          ["18", "Sh. Pradeep Kumar", "Dy. Director (G)-I, (G)-II, WMC & PGMS", "23678380", "9999151835", "ac[dot]gdjb1[at]gmail[dot]com"],
          ["19", "Sh. Hemant Bhardwaj", "Dy. Director (Law), DD (Training)", "-", "9810186483", "ddlawdjb[at]gmail[dot]com"],
          ["20", "Sh. Vijay Thakran", "Dy. Director (Coordination & Water), Dy. Dir (RR, CR & Vigilance)", "-", "-", "-"],
          ["21", "Sh. Gopal Aggarwal", "DD (L&E) / DD (LW & PR)", "-", "-", "acrr[dot]djb[at]gmail[dot]com"],
          ["22", "Ms. Anjani", "PA to DD (L&E)", "-", "9205713443", "-"],
          ["23", "Sh. Hemant Bhardwaj", "Dy. Director (Bulk) / Law", "-", "9810186483", "-"],
          ["24", "Sh. Sanjay Jain", "DD (LWO), DD (Parliamentary Cell)", "23551279", "9891919198", "lwodjb[at]gmail[dot]com"]
        ]
      }
    ]

  },
};
