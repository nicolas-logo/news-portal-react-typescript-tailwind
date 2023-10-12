import { ILink, INewArticle, IMostRead } from "./../types/types";
import imgGaming from "./../assets/images/image-gaming-growth.jpg";
import imgRetro from "./../assets/images/image-retro-pcs.jpg";
import imgTop from "./../assets/images/image-top-laptops.jpg";
export const NavbarLinks: ILink[] = [
  {
    name: "Home",
    src: "/",
  },
  {
    name: "New",
    src: "/",
  },
  {
    name: "Popular",
    src: "/",
  },
  {
    name: "Trending",
    src: "/",
  },
  {
    name: "Categories",
    src: "/",
  },
];

export const NewsArticlesData: INewArticle[] = [
  {
    title: "Hydrogen VS Electric Cars",
    body: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    body: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    body: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export const MostReadsData: IMostRead[] = [
  {
    title: "Reviving Retro PCs",
    desc: "What happens when old PCs are given modern upgrades?",
    imageSrc: imgRetro,
    totalVisits: 30,
  },
  {
    title: "Top 10 Laptops of 2022",
    desc: "Our best picks for various needs and budgets.",
    imageSrc: imgTop,
    totalVisits: 50,
  },
  {
    title: "The Growth of Gaming",
    desc: "How the pandemic has sparked fresh opportunities.",
    imageSrc: imgGaming,
    totalVisits: 10,
  },
];
