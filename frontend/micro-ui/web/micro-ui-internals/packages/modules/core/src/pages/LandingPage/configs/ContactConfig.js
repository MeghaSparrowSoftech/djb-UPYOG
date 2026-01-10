const helplineConfig = {
  hqAddress: {
    title: "Delhi Jal Board (HQ)",
    lines: [
      "Varunalaya Ph-II",
      "Jhandewalan, Karol Bagh",
      "New Delhi – 110005",
    ],
  },

  primarySupport: {
    title:
      "For water bills, water problems, water tanker, water logging, sewer problems and illegal boring related complaints",
    primary: {
      phone: ["1916", "1800117118"],
      email: "grievances-djb@delhi.gov.in",
      whatsapp: "9650291021",
    },
  },

  helplines: [
    { type: "phone", value: "23538495" },
    { type: "phone", value: "23634469" },
    { type: "phone", value: "23513073" },
    { type: "phone", value: "23527679" },
    { type: "whatsapp", value: "9650291021" },
    {
      type: "phone",
      value: "8383068300",
      label: "Control Command Centre Helpline",
      isNew: true,
    },
    {
      type: "whatsapp",
      value: "8383068300",
      label: "WhatsApp for water logging / tanker issues",
      isNew: true,
    },
  ],

  billingSupport: {
    title:
      "For billing, reading, wrong bill, access bill, new water connection, etc.",
    directoryPdf: {
      label: "Click for Concern ZRO / Jt./Dy. Director Numbers (PDF)",
      url: "/assets/zro-directory.pdf",
    },
    directoryLink: {
      label: "DIRECTORY",
      url: "/directory",
    },
  },
};

export default helplineConfig;
