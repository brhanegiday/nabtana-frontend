import { v4 as uuidv4 } from "uuid";

export const companies = [
  {
    id: uuidv4(),
    companyName: "Gezana",
    location: "Sans Francisco,CA",
    companyExcerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    companyDesc:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate",
    industry: ["Consumer", "Healthcare"],
    status: ["Active", "Public"],
    companyLogo: "/companies/airbnb_logo.png",
    alt: "Airbnb Logo",
    foundedYear: 2015,
    teamSize: "500+",
    companySlug: "gezana",
    website: "https://gezana.com",
    founders: [
      {
        name: "John Smith",
        position: "CTO",
        image: "/founders/founder-1.png",
        aboutFounder:
          "John Smith is the co-founder, Chief Strategy Officer, and Chairman of Airbnb China. Nathan plays a leading role in driving key strategic initiatives across the global business. Previously he oversaw the creation of Airbnb’s engineering, data science,",
        founderSocialLinks: {
          facebook: "https://facebook.com/John.smith03",
          instagram: "https://instagram.com/John.smith03",
          twitter: "https://twitter.com/John.smith03",
          linkedin: "https://linkedin.com/John.smith03",
        },
      },
      {
        name: "Brian Chesky",
        position: "CEO",
        image: "/founders/founder-2.png",
        aboutFounder:
          "John Smith is the co-founder, Chief Strategy Officer, and Chairman of Airbnb China. Nathan plays a leading role in driving key strategic initiatives across the global business. Previously he oversaw the creation of Airbnb’s engineering, data science,",
        founderSocialLinks: {
          instagram: "https://instagram.com/brian.smith03",
          twitter: "https://twitter.com/brian.smith03",
          linkedin: "https://linkedin.com/ckesky.smith03",
        },
      },
    ],
    companySocialLinks: {
      facebook: "https://facebook.com/gezena",
      instagram: "https://instagram.com/gezena",
      twitter: "https://twitter.com/gezena",
      linkedin: "https://linkedin.com/gezena",
    },
  },
  // second data
  {
    id: uuidv4(),
    companyName: "Hadgi",
    location: "London,England",
    companyExcerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    companyDesc:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate",
    industry: ["Tourism"],
    status: ["Public"],
    companyLogo: "/companies/dropbox_logo.png",
    alt: "Hadgi Logo",
    foundedYear: 2020,
    teamSize: "200+",
    companySlug: "hadgi",
    website: "https://hadgi.com",
    founders: [
      {
        name: "Brhane Giday",
        image: "/founders/founder-1.png",
        position: "CTO",
        aboutFounder:
          "Brhane Giday is the co-founder, Chief Strategy Officer, and Chairman of Airbnb China. Nathan plays a leading role in driving key strategic initiatives across the global business. Previously he oversaw the creation of Airbnb’s engineering, data science,",
        founderSocialLinks: {
          facebook: "https://facebook.com/John.smith03",
          instagram: "https://instagram.com/John.smith03",
          twitter: "https://twitter.com/John.smith03",
          linkedin: "https://linkedin.com/John.smith03",
        },
      },
      {
        name: "Mewael Gese",
        position: "CEO",
        image: "/founders/founder-2.png",
        aboutFounder:
          "John Smith is the co-founder, Chief Strategy Officer, and Chairman of Airbnb China. Nathan plays a leading role in driving key strategic initiatives across the global business. Previously he oversaw the creation of Airbnb’s engineering, data science,",
        founderSocialLinks: [
          {
            instagram: "https://instagram.com/brian.smith03",
            twitter: "https://twitter.com/brian.smith03",
            linkedin: "https://linkedin.com/ckesky.smith03",
          },
        ],
      },
    ],
    companySocialLinks: {
      facebook: "https://facebook.com/gezena",
      instagram: "https://instagram.com/gezena",
      twitter: "https://twitter.com/gezena",
      linkedin: "https://linkedin.com/gezena",
    },
  },
];
