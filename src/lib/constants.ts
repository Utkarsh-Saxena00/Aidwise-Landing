// interface navMenuType {
//   label: string;
//   inMenu: {
//     name: string;
//     url: string;
//   }[];
// }
interface navMenuType {
  label: string;
}

interface offeredOptions {
  label: string,
  value: string
}

interface clientTestimonials {
  logo: string,
  name: string,
  review: string
}

interface services {
  title: string,
  href: string,
}

export const servicesOptions: services[] = [
  {
    title: 'AI Consulting',
    href: '/ai-consulting',
  },
  {
    title: 'Engineer Data',
    href: '/engineer-data',
  },
  {
    title: 'Differentiate AI',
    href: '/differentiate-ai',
  },
  {
    title: 'Operationalize',
    href: '/operationalize',
  },
]

export const clientTestimonials: clientTestimonials[] = [
  {
    logo: '/home-page/client-logo.svg',
    name: 'Client Name',
    review: 'Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit'
  },
  {
    logo: '/home-page/client-logo.svg',
    name: 'Client Name',
    review: 'Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit'
  },
  {
    logo: '/home-page/client-logo.svg',
    name: 'Client Name',
    review: 'Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit'
  },
  {
    logo: '/home-page/client-logo.svg',
    name: 'Client Name',
    review: 'Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit'
  },
]

export const offerings: offeredOptions[] = [
  {
    label: 'Clients',
    value: '25+'
  },
  {
    label: 'Annual Growth',
    value: '55%'
  },
  {
    label: 'No of projects',
    value: '100+'
  },
  {
    label: 'Positive ratings',
    value: '98%'
  },
]

export const navMenu: navMenuType[] = [
  {
    label: "Home"
  },
  {
    label: "Our Product Suites"
  },
  {
    label: "Services"
  },
  {
    label: "About Us"
  },
  {
    label: "Partners"
  },
]

// export const navMenu: navMenuType[] = [
//   {
//     label: "Copilot",
//     inMenu: [
//       {
//         name: "AI Research Assistant",
//         url: "/chat-bot-over-sharepoint",
//       },
//       {
//         name: ".DotZ Copilot",
//         url: "/chat-bot-over-data",
//       },
//       {
//         name: "AI Health Recorder",
//         url: "/translation-secured-sharing",
//       },
//     ],
//   },
//   {
//     label: "Document Analytics",
//     inMenu: [
//       {
//         name: "Invoice Extractor",
//         url: "/invoice-extractor",
//       },
//       {
//         name: "Coding.ai",
//         url: "/llm-standardization",
//       },
//     ],
//   },
//   {
//     label: "Data Generators",
//     inMenu: [
//       {
//         name: "AI Strategy Generator",
//         url: "/llm-trend-generators",
//       },
//       {
//         name: "AI Strategy Sense ",
//         url: "/ai-strategy-sense",
//       },
//       {
//         name: "AI StratPlanner",
//         url: "/charter-generators",
//       },
//     ],
//   },
//   {
//     label: "Computer Vision",
//     inMenu: [
//       {
//         name: "RetinaScan AI",
//         url: "/retina-scan",
//       },
//       {
//         name: "Risk.ai",
//         url: "/fraud-prediction",
//       },
//     ],
//   },
//   {
//     label: "Speech Analytics",
//     inMenu: [
//       {
//         name: "Speech Analyzer",
//         url: "/speech-analytics",
//       },
//     ],
//   },
//   {
//     label: "AI Insights",
//     inMenu: [
//       {
//         name: "Coverage Simulators",
//         url: "/coverage-simulators",
//       },
//     ],
//   },
// ];
