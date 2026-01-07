// src/menuData.ts
export type Category =
  | "All"
  | "BEEF BBQ"
  | "PORK BBQ"
  | "OTHER BBQ"
  | "HOTPOT"
  | "STEW"
  | "SIDEDISH"
  | "RICE"
  | "NOODLES"
  | "BEVERAGES";

export const categories: Category[] = [
  "All",
  "BEEF BBQ",
  "PORK BBQ",
  "OTHER BBQ",
  "HOTPOT",
  "STEW",
  "SIDEDISH",
  "RICE",
  "NOODLES",
  "BEVERAGES",
];

export type Price =
  | { kind: "fixed"; rm: number }
  | { kind: "market" };

export type Item = {
  id: string;
  name: string;
  desc?: string;
  // ✅ 아이템 자체는 All이 아닌 실제 카테고리만
  category: Exclude<Category, "All">;
  tags?: ("Best" | "Spicy")[];
  image: { src: string; alt: string };
  price: Price;
};

export const items: Item[] = [
  {
    id: "beef-bbq-1",
    category: "BEEF BBQ",
    name: "GALBI BONSAL",
    desc: "Boneless short ribs",
    tags: ["Best"],
    image: { src: "/menu/galbi-bonsal.webp", alt: "GALBI BONSAL" },
    price: { kind: "market" },
  },
  {
    id: "beef-bbq-2",
    category: "BEEF BBQ",
    name: "SAENG GALBI",
    desc: "Bone-in short ribs",
    image: { src: "/menu/saeng-galbi.webp", alt: "SAENG GALBI" },
    price: { kind: "market" },
  },
  {
    id: "beef-bbq-3",
    category: "BEEF BBQ",
    name: "HANWOO DEUNGSIM",
    desc: "Korean beef sirloin",
    image: { src: "/menu/hanwoo-deungsim.webp", alt: "HANWOO DEUNGSIM" },
    price: { kind: "market" },
  },
  {
    id: "beef-bbq-4",
    category: "BEEF BBQ",
    name: "WANG GALBI",
    desc: "Short ribs marinated in soy sauce",
    image: { src: "/menu/wang-galbi.webp", alt: "WANG GALBI" },
    price: { kind: "market" },
  },
  {
    id: "pork-bbq-1",
    category: "PORK BBQ",
    name: "SAMGYEOPSAL",
    desc: "Pork belly",
    tags: ["Best"],
    image: { src: "/menu/samgyeopsal.webp", alt: "SAMGYEOPSAL" },
    price: { kind: "market" },
  },
  {
    id: "side-1",
    category: "SIDEDISH",
    name: "KIMCHI JEON",
    desc: "Kimchi pancake",
    image: { src: "/menu/kimchi-jeon.webp", alt: "KIMCHI JEON" },
    price: { kind: "fixed", rm: 40 },
  },
];
