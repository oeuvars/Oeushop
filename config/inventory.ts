import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  price: number
  colors: string[]
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "64da6006-a4bb-4555-af78-3467853eb75e",
    sku: "partynextdoor_1",
    name: "PARTYNEXTDOOR",
    description: `Persian Rugs, but she's from Nicuragua.`,
    price: 10000, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://cdn.sanity.io/images/whnn3tkb/production/6d4a00ffdd0e34a0ae43a08aaafaf5fc1475716a-1440x1796.webp",
    images: [
      "https://cdn.sanity.io/images/whnn3tkb/production/6d4a00ffdd0e34a0ae43a08aaafaf5fc1475716a-1440x1796.webp",
    ],
    sizes: ["A3", "A4", "B4", "B5"],
    categories: ["Artistic"],
    currency: "INR",
  },
  {
    id: "ca9d7d60-2928-4eb7-aa65-77794e88ab6f",
    sku: "snoop_doggy_dogg_1",
    name: "Snoop Doggy Dogg",
    description: `From the depths of the sea, back to the block Snoop Doggy Dogg, funky as the, the, The D.O.C.`,
    price: 14500,
    image:
      "https://cdn.sanity.io/images/whnn3tkb/production/839c70b24fe2249303a343c6a887fafd3997065f-1440x1792.jpg",
    images: [
      "https://cdn.sanity.io/images/whnn3tkb/production/839c70b24fe2249303a343c6a887fafd3997065f-1440x1792.jpg",
    ],
    sizes: ["A3", "A4", "B4", "B5"],
    categories: ["Modern"],
    currency: "INR",
  },
  {
    id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    sku: "purple_reign_1",
    name: "Purple Reign",
    description: `Purple Reign by FUTURE X Halloween.`,
    price: 4999,
    image:
      "https://cdn.sanity.io/images/whnn3tkb/production/4b933950f660cd6978f87abbd6abd0902f161944-1440x1796.webp",
    images: [
      "https://cdn.sanity.io/images/whnn3tkb/production/4b933950f660cd6978f87abbd6abd0902f161944-1440x1796.webp",
    ],
    sizes: ["A2", "A3", "A4"],
    categories: ["Creative"],
    currency: "USD",
  },
  {
    id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    sku: "turtle_1",
    name: "Turtle",
    description: `It really isn't how it seems from the outside.`,
    price: 5000,
    image:
      "https://cdn.sanity.io/images/whnn3tkb/production/099799a7c1bb427b2a8663efd61fa910daa3aa4b-1080x1350.jpg",
    images: [
      "https://cdn.sanity.io/images/whnn3tkb/production/099799a7c1bb427b2a8663efd61fa910daa3aa4b-1080x1350.jpg",
    ],
    sizes: ["A3", "A4", "A5", "B5"],
    categories: ["Creative"],
    currency: "INR",
  },
  {
    id: "dd27c79d-97c3-47bb-9172-4ea74b096f6f",
    sku: "renaissance_1",
    name: "Renaissance",
    description: `The art of renaissance with sober aesthetic colors, embarking modern designs.`,
    price: 7500,
    image:
      "https://cdn.sanity.io/images/whnn3tkb/production/0e769a50fec55211599d80de8cd25a8417c1340e-1440x1796.webp",
    images: [
      "https://cdn.sanity.io/images/whnn3tkb/production/0e769a50fec55211599d80de8cd25a8417c1340e-1440x1796.webp",
    ],
    sizes: ["A3", "A4", "B5"],
    categories: ["Aesthetic"],
    currency: "INR",
  },
  {
    id: "b5980fb9-142b-4e0b-9683-daac07827e0a",
    sku: "mesut_oezil_1",
    name: "Mesut Özil",
    description: `Celebrating the World Cup Victory of the German National Team and the maestro Mesut Özil.`,
    price: 9000,
    image:
      "https://cdn.sanity.io/images/whnn3tkb/production/946b379484e84076ba9c9eedbb048e79a4f672e9-1440x1796.webp",
    images: [
      "https://cdn.sanity.io/images/whnn3tkb/production/946b379484e84076ba9c9eedbb048e79a4f672e9-1440x1796.webp",
    ],
    sizes: ["A3", "A4", "B5"],
    categories: ["Modern"],
    currency: "INR",
  },
  {
    id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
    sku: "one_little_cat_1",
    name: "One Little Cat",
    description: `These guys have 90% DNA match with tigers, Somehow.`,
    price: 6500,
    image:
      "https://cdn.sanity.io/images/whnn3tkb/production/7455f945b9bd6ae4dcb9bad9c528c4b03cd848ea-1440x1796.webp",
    images: [
      "https://cdn.sanity.io/images/whnn3tkb/production/7455f945b9bd6ae4dcb9bad9c528c4b03cd848ea-1440x1796.webp",
    ],
    sizes: ["A4"],
    categories: ["Artistic"],
    currency: "INR",
  },
  {
    id: "c3284734-9c10-47a3-bb41-333721540a24",
    sku: "rose_1",
    name: "Roses",
    description: `A beautiful rose, Enchanté.`,
    price: 42000,
    image:
      "https://cdn.sanity.io/images/whnn3tkb/production/dfaeb5cf14d8d6149cca97526a8d9b5815e8a269-1440x1796.webp",
    images: [
      "https://cdn.sanity.io/images/whnn3tkb/production/dfaeb5cf14d8d6149cca97526a8d9b5815e8a269-1440x1796.webp",
    ],
    sizes: ["A4"],
    categories: ["Artistic"],
    currency: "INR",
  },
  {
    id: "c5ef468d-d49e-4aa5-be5b-41f34af40b19",
    sku: "stop_scrolling_1",
    name: "Stop Scrolling",
    description: `Just admire the cuteness.`,
    price: 2500,
    image:
      "https://cdn.sanity.io/images/whnn3tkb/production/e8a40730f49fef0519eaa1128533b86c317bab08-1440x1796.webp",
    images: [
      "https://cdn.sanity.io/images/whnn3tkb/production/e8a40730f49fef0519eaa1128533b86c317bab08-1440x1796.webp",
    ],
    sizes: ["A3", "A4", "A5", "B5"],
    categories: ["Artistic"],
    currency: "INR",
  },
  {
    id: "6853a582-fc95-44af-9dac-dffbc694b47d",
    sku: "pablo_picasso_1",
    name: "Pablo Picasso",
    description: `A design based on cubism of Pablo Picasso.`,
    price: 9500,
    image:
      "https://cdn.sanity.io/images/whnn3tkb/production/918aa8fd554fa34a0de38416866190e6a4771711-1440x1796.webp",
    images: [
      "https://cdn.sanity.io/images/whnn3tkb/production/918aa8fd554fa34a0de38416866190e6a4771711-1440x1796.webp",
    ],
    sizes: ["A2", "A3", "A4", "A5", "B5"],
    categories: ["Abstract"],
    currency: "INR",
  },
  {
    id: "212ee428-f30e-4347-939b-b3352fe3c4a6",
    sku: "joji_1",
    name: "Joji",
    description: `Filthy frank, Pink Guy, George Kusunoki Miller, Joji in this order.`,
    price: 7000,
    image:
      "https://cdn.sanity.io/images/whnn3tkb/production/bb16ae3fba533f90701906696b972c7658036b69-1440x1800.jpg",
    images: [
      "https://cdn.sanity.io/images/whnn3tkb/production/bb16ae3fba533f90701906696b972c7658036b69-1440x1800.jpg",
    ],
    sizes: ["A3", "A4"],
    categories: ["Modern"],
    currency: "INR",
  },
  {
    id: "1219f00e-03f4-4ffb-8740-26c4dab41695",
    sku: "fujifilm_1",
    name: "FUJIFILM",
    description: `Reminds of film photography.`,
    price: 8500,
    image:
      "https://cdn.sanity.io/images/whnn3tkb/production/8eb7bd238c90147493650d084a6c60a3f1ce0fe4-1440x1795.jpg",
    images: [
      "https://cdn.sanity.io/images/whnn3tkb/production/8eb7bd238c90147493650d084a6c60a3f1ce0fe4-1440x1795.jpg",
    ],
    sizes: ["A4"],
    categories: ["Abstract"],
    currency: "INR",
  },
  {
    id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
    sku: "a_wise_man_once_said_1",
    name: "A Wise Man Once Said",
    description: `A man without purpose distracts himself with cheap pleasure.`,
    price: 2500,
    image:
      "https://cdn.sanity.io/images/whnn3tkb/production/554f8f93e42b267bc7ba7638f67fffd4c47f9019-1440x1796.webp",
    images: [
      "https://cdn.sanity.io/images/whnn3tkb/production/554f8f93e42b267bc7ba7638f67fffd4c47f9019-1440x1796.webp",
    ],
    sizes: ["A3", "A4", "B5"],
    categories: ["Artistic"],
    currency: "INR",
  },
  {
    id: "e882fe48-253c-40fb-8155-51b47b063c1a",
    sku: "one_little_cat_1",
    name: "One Little Cat",
    description: `These guys have 90% DNA match with tigers, Somehow.`,
    price: 2500,
    image:
      "https://cdn.sanity.io/images/whnn3tkb/production/7455f945b9bd6ae4dcb9bad9c528c4b03cd848ea-1440x1796.webp",
    images: [
      "https://cdn.sanity.io/images/whnn3tkb/production/7455f945b9bd6ae4dcb9bad9c528c4b03cd848ea-1440x1796.webp",
    ],
    sizes: ["A4"],
    categories: ["Artistic"],
    currency: "INR",
  },
]
