export type GuestEntry = {
  name: string;
};

export type WeddingConfig = {
  couple: {
    groom: string;
    bride: string;
  };
  date: {
    iso: string;
    display: string;
    time: string;
  };
  venue: {
    name: string;
    address: string;
    mapsUrl: string;
  };
  share: {
    title: string;
    text: string;
  };
  heroImage: string;
  guests: GuestEntry[];
};

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: "Ahmed",
    bride: "Soad"
  },
  date: {
    iso: "2026-06-20T20:00:00+03:00",
    display: "20 June 2026",
    time: "8:00 PM"
  },
  venue: {
    name: "Royal Hall 2",
    address:
      "\u0623\u0645\u0627\u0645 \u0627\u0644\u0645\u0628\u0646\u0649 \u0627\u0644\u0644\u0648\u062C\u064A\u0633\u062A\u064A \u0644\u0645\u064A\u0646\u0627\u0621 \u0627\u0644\u062F\u062E\u064A\u0644\u0629\n" +
      "\u0642\u0628\u0644 \u0634\u0631\u0643\u0629 \u062D\u062F\u064A\u062F \u0639\u0632 \u0627\u0644\u062F\u062E\u064A\u0644\u0629 \u0628\u062C\u0648\u0627\u0631 \u0627\u0644\u0623\u0645\u0646 \u0627\u0644\u0645\u0631\u0643\u0632\u064A \u0627\u0644\u062F\u062E\u064A\u0644\u0629\n" +
      "\u0627\u0644\u0625\u0633\u0643\u0646\u062F\u0631\u064A\u0629",
    mapsUrl: "https://maps.app.goo.gl/fPKTZryLB8U2ELtn8?g_st=ic"
  },
  share: {
    title: "Ahmed & Soad Wedding Invitation",
    text: "You are invited to celebrate the wedding of Ahmed & Soad on 20 June 2026."
  },
  heroImage: "/images/engagement-hero.jpg",
  guests: [
    { name: "Ahmed Owida" },
    { name: "Ahmed Shahwan" },
    { name: "Fares Nasr" },
    { name: "Hezo" },
    { name: "Heba Mohamed" },
    { name: "Mina Adel" },
    { name: "Michael Maher" },
    { name: "Christina Maher" },
    { name: "Mohamed Nasr" },
    { name: "Aya" },
    { name: "Alaa" },
    { name: "Owida" }
  ]
};
