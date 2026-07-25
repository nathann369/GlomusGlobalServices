// Central content + asset registry for the Glomus Global Services site.

export const IMAGES = {
  heroRoad: "/18d92177-3da8-4461-a2ad-e598aabbd7e5.jpg",

  infrastructure: "/9f5198f8-c1d9-4a34-8e92-c528cc7d92ad.jpg",

  community: "/ea63225d-eac0-4b12-89cf-52af59a5eb31.jpg",

  ictTraining: "/87eaf72d-13b1-4211-a8d7-806a6ce984bd.jpg",

  agriculture: "/8967f04c-4e51-43b8-ae06-04145e31b1f7.jpg",

  borehole: "/1178162d-2c09-4f6d-a787-a35ce4977cfa.jpg",

  womenEmpowerment: "/0fa9bea9-17ba-4fe3-b2c9-b04309043130.jpg",

  livestock: "/5e77cebc-b704-4524-a9bd-ee992790682b.jpg",

  tricycles: "/a5009dac-1918-4fdd-aad3-3783e6e280ea.jpg",

  sportsFacility: "/ffefa0de-b054-452f-be30-a814df1dbf71.jpg",

  youthTraining: "/ad075a08-16dc-471e-84c7-12254cbc68ec.jpg",

  govOfficials: "/22da4d0e-b355-4d50-82d0-84c9fe440ac3.jpg",

  machinery: "/fccff88b-8904-4a67-baa1-b2a21a7dcc2f.jpg",

  farmland: "/f4e40d14-6143-4305-82d1-cc21c0f76c89.jpg",

  construction: "/f3cceb19-484c-4c89-b30f-edd74bd49017.jpg"

} as const;

export const NAV_LINKS = [
{ label: 'About', href: '#about' },
{ label: 'Impact', href: '#impact' },
{ label: 'Capabilities', href: '#capabilities' },
{ label: 'Projects', href: '#projects' },
{ label: 'Gallery', href: '#gallery' },
{ label: 'Contact', href: '#contact' }];


export interface Timeline {
  year: string;
  title: string;
  copy: string;
}

export const TIMELINE: Timeline[] = [
{
  year: '2013',
  title: 'Founded on Procurement',
  copy: 'Glomus Global Services Limited begins as a procurement and supply company, building a reputation for reliability and integrity in delivery.'
},
{
  year: '2015',
  title: 'Into Infrastructure',
  copy: 'We expand into civil works and infrastructure — roads, boreholes and public facilities that serve communities directly.'
},
{
  year: '2018',
  title: 'Technology & Innovation',
  copy: 'A dedicated technology practice is established, delivering ICT platforms, software and digital transformation for institutions.'
},
{
  year: '2021',
  title: 'Community Empowerment',
  copy: 'Programs in youth, women and skills empowerment scale nationwide, deepening our development mandate.'
},
{
  year: 'Today',
  title: 'Multidisciplinary Delivery',
  copy: 'Glomus operates as an integrated development company delivering complex projects across Nigeria for every sector.'
}];


export interface ImpactBlock {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  stat: string;
  statLabel: string;
}

export const IMPACT: ImpactBlock[] = [
{
  eyebrow: 'Infrastructure Development',
  title: 'Roads that connect people to opportunity',
  copy: 'From rural access roads to major civil works, we design and deliver durable infrastructure that unlocks trade, mobility and growth for the communities we serve.',
  image: IMAGES.infrastructure,
  stat: '120km+',
  statLabel: 'of roads delivered'
},
{
  eyebrow: 'Community Empowerment',
  title: 'Investing directly in people and livelihoods',
  copy: 'We partner with governments and NGOs to run empowerment programs that put tools, skills and confidence into the hands of women, youth and local entrepreneurs.',
  image: IMAGES.community,
  stat: '15,000+',
  statLabel: 'lives impacted'
},
{
  eyebrow: 'Technology & Digital Innovation',
  title: 'Building the digital backbone for institutions',
  copy: 'Our ICT practice equips public and private organizations with software, platforms and hands-on training that modernize service delivery.',
  image: IMAGES.ictTraining,
  stat: '40+',
  statLabel: 'institutions served'
},
{
  eyebrow: 'Agriculture & Food Security',
  title: 'Mechanized farming that feeds the nation',
  copy: 'Through commercial farming, livestock and agribusiness support, we strengthen food security and create sustainable rural economies.',
  image: IMAGES.agriculture,
  stat: '2,500ha',
  statLabel: 'under cultivation'
}];


export interface Capability {
  title: string;
  items: string[];
  icon: string;
}

export const CAPABILITIES: Capability[] = [
{
  title: 'Infrastructure Development',
  icon: 'HardHat',
  items: [
  'Roads',
  'Boreholes',
  'Civil Works',
  'Sports Facilities',
  'Public Infrastructure']

},
{
  title: 'Technology Solutions',
  icon: 'Cpu',
  items: [
  'Software',
  'ICT Platforms',
  'Digital Transformation',
  'IT Consulting',
  'Training']

},
{
  title: 'Agriculture',
  icon: 'Sprout',
  items: [
  'Commercial Farming',
  'Livestock',
  'Mechanized Farming',
  'Food Security',
  'Agribusiness']

},
{
  title: 'Community Development',
  icon: 'Users',
  items: [
  'Youth Empowerment',
  'Women Empowerment',
  'Capacity Building',
  'Skills Acquisition']

},
{
  title: 'Procurement & Project Delivery',
  icon: 'ClipboardCheck',
  items: [
  'Strategic Procurement',
  'Equipment Supply',
  'Project Management',
  'Government Contracts']

}];


export interface Project {
  title: string;
  category: string;
  location: string;
  description: string;
  impact: string;
  image: string;
}

export const PROJECTS: Project[] = [
{
  title: 'Rural Access Road Rehabilitation',
  category: 'Road Construction',
  location: 'Benue State',
  description:
  'Full reconstruction of a 32km rural corridor including drainage, culverts and asphalt surfacing to all-weather standard.',
  impact: '18 communities connected year-round',
  image: IMAGES.heroRoad
},
{
  title: 'Solar-Powered Community Boreholes',
  category: 'Solar Boreholes',
  location: 'Niger State',
  description:
  'Design and installation of solar-powered borehole systems delivering clean, reliable water to underserved villages.',
  impact: '9,000+ people with clean water access',
  image: IMAGES.borehole
},
{
  title: 'Digital Skills & ICT Training Program',
  category: 'ICT Training',
  location: 'Abuja FCT',
  description:
  'Turnkey ICT centres and a structured curriculum equipping young people with market-ready digital skills.',
  impact: '1,200 youth trained and certified',
  image: IMAGES.ictTraining
},
{
  title: 'Women Empowerment & Skills Acquisition',
  category: 'Community Empowerment',
  location: 'Nasarawa State',
  description:
  'A skills-and-startup program providing training, equipment and mentorship to women entrepreneurs.',
  impact: '650 women-led businesses launched',
  image: IMAGES.womenEmpowerment
},
{
  title: 'Mechanized Commercial Farm Development',
  category: 'Agriculture',
  location: 'Kaduna State',
  description:
  'Land clearing, mechanization and input supply to establish a productive commercial farming estate.',
  impact: '2,500 hectares brought into production',
  image: IMAGES.farmland
},
{
  title: 'Livestock Distribution Scheme',
  category: 'Livestock',
  location: 'Plateau State',
  description:
  'Procurement and distribution of healthy livestock alongside veterinary support for smallholder farmers.',
  impact: '400 households given a livelihood',
  image: IMAGES.livestock
},
{
  title: 'Community Sports Complex',
  category: 'Sports Infrastructure',
  location: 'Kogi State',
  description:
  'Construction of a modern sports facility with a full-size pitch, stands and floodlighting for community use.',
  impact: 'A hub for youth in 12 communities',
  image: IMAGES.sportsFacility
},
{
  title: 'Public Facility & Civil Works',
  category: 'Public Facilities',
  location: 'Federal Project',
  description:
  'End-to-end delivery of public buildings and civil infrastructure to government specification and standard.',
  impact: 'Delivered on time and to standard',
  image: IMAGES.construction
}];


export interface WhyCard {
  title: string;
  copy: string;
  icon: string;
}

export const WHY: WhyCard[] = [
{
  title: '10+ Years of Experience',
  copy: 'Over a decade of consistent, credible project delivery across Nigeria.',
  icon: 'CalendarClock'
},
{
  title: 'Integrated Expertise',
  copy: 'One partner spanning infrastructure, technology, agriculture and development.',
  icon: 'Layers'
},
{
  title: 'Nationwide Delivery',
  copy: 'Proven execution capacity across multiple states and terrains.',
  icon: 'MapPinned'
},
{
  title: 'Trusted Execution',
  copy: 'A track record of delivering complex projects on time and to standard.',
  icon: 'ShieldCheck'
},
{
  title: 'Sustainable Impact',
  copy: 'Projects engineered for measurable, lasting community outcomes.',
  icon: 'Leaf'
},
{
  title: 'Government Experience',
  copy: 'Deep familiarity with public, institutional and donor requirements.',
  icon: 'Landmark'
}];


export interface GalleryItem {
  image: string;
  category: string;
  caption: string;
  span: string;
}

export const GALLERY_CATEGORIES = [
'All',
'Infrastructure',
'Agriculture',
'Community',
'Training',
'Government',
'Equipment'];


export const GALLERY: GalleryItem[] = [
{
  image: IMAGES.heroRoad,
  category: 'Infrastructure',
  caption: 'Road corridor, Benue State',
  span: 'row-span-2'
},
{
  image: IMAGES.womenEmpowerment,
  category: 'Community',
  caption: 'Women empowerment program',
  span: ''
},
{
  image: IMAGES.borehole,
  category: 'Infrastructure',
  caption: 'Solar borehole commissioning',
  span: ''
},
{
  image: IMAGES.ictTraining,
  category: 'Training',
  caption: 'ICT training centre',
  span: 'row-span-2'
},
{
  image: IMAGES.livestock,
  category: 'Agriculture',
  caption: 'Livestock distribution',
  span: ''
},
{
  image: IMAGES.govOfficials,
  category: 'Government',
  caption: 'Project commissioning',
  span: ''
},
{
  image: IMAGES.farmland,
  category: 'Agriculture',
  caption: 'Mechanized farmland',
  span: 'row-span-2'
},
{
  image: IMAGES.tricycles,
  category: 'Equipment',
  caption: 'Tricycle empowerment scheme',
  span: ''
},
{
  image: IMAGES.youthTraining,
  category: 'Training',
  caption: 'Youth vocational training',
  span: ''
},
{
  image: IMAGES.machinery,
  category: 'Infrastructure',
  caption: 'Civil works machinery',
  span: ''
},
{
  image: IMAGES.community,
  category: 'Community',
  caption: 'Community engagement day',
  span: 'row-span-2'
},
{
  image: IMAGES.sportsFacility,
  category: 'Infrastructure',
  caption: 'Community sports complex',
  span: ''
},
{
  image: IMAGES.construction,
  category: 'Infrastructure',
  caption: 'Public facility construction',
  span: ''
},
{
  image: IMAGES.agriculture,
  category: 'Agriculture',
  caption: 'Commercial farm estate',
  span: ''
}];


export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
{
  quote:
  'Glomus delivered our road project to specification and ahead of schedule. Their professionalism set a standard we now expect from every contractor.',
  name: 'Engr. A. Okonkwo',
  role: 'State Ministry of Works'
},
{
  quote:
  'The empowerment program reached women in communities others could not access. The impact on livelihoods here has been genuine and lasting.',
  name: 'Hajiya F. Bello',
  role: 'Development Partner, NGO'
},
{
  quote:
  'From procurement to commissioning, they managed every detail. A trusted, capable partner for institutional projects of scale.',
  name: 'Dr. E. Adeyemi',
  role: 'Institutional Client'
},
{
  quote:
  'Our community finally has clean water. Glomus did not just build a borehole — they built confidence in what is possible.',
  name: 'Chief M. Danladi',
  role: 'Community Leader'
}];


export const TRUST_STATS = [
{ value: 10, suffix: '+', label: 'Years Delivering Excellence' },
{ value: 200, suffix: '+', label: 'Projects Across Nigeria' },
{ value: 20, suffix: '+', label: 'States Reached' },
{ value: 15, suffix: 'K+', label: 'Lives Impacted' }];


export const SECTORS = [
'Infrastructure',
'Agriculture',
'ICT',
'Community Development',
'Capacity Building',
'Procurement'];