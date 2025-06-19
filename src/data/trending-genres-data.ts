import imageOne from '../../public/assets/img/trending/01.png';
import imageTwo from '../../public/assets/img/trending/02.png';
import imageThree from '../../public/assets/img/trending/03.png';
import imageFour from '../../public/assets/img/trending/04.png';
import imageFive from '../../public/assets/img/trending/05.png';
// import imageSix from '../../public/assets/img/trending/06.jpg';
// import imageSeven from '../../public/assets/img/trending/07.jpg';
// import imageEight from '../../public/assets/img/trending/08.jpg';
// import imageNine from '../../public/assets/img/trending/10.jpg';
// import imageTen from '../../public/assets/img/trending/11.jpg';
// import shapeImg from '../../public/assets/img/trending/trending-shape.png';

import { TFeaturedStream } from '@/types/types';


const featured_streams_data: TFeaturedStream[] = [
  {
    id: 1,
    image: imageOne,
    serialNumber: "01",
    title: "Rhythm of the City",
    subTitle: "DJ Zeno",
    description: "An upbeat mix of urban beats and melodic transitions, perfect for night drives or club sets."
  },
  {
    id: 2,
    image: imageTwo,
    serialNumber: "02",
    title: "Moonlight Memories",
    subTitle: "Lana Rivera",
    description: "A soulful ballad featuring acoustic guitar, smooth vocals, and nostalgic lyrics."
  },
  {
    id: 3,
    image: imageThree,
    serialNumber: "03",
    title: "Rise & Flow",
    subTitle: "EchoPulse",
    description: "Instrumental ambient-electronic fusion perfect for focus, study, or meditation."
  },
  {
    id: 4,
    image: imageFour,
    serialNumber: "04",
    title: "Electric Heartbeat (Live)",
    subTitle: "Neon Fever",
    description: "A live concert clip that captures the raw energy of Neon Fever's best show yet."
  },
  {
    id: 5,
    image: imageFive,
    serialNumber: "05",
    title: "Vibe Check",
    subTitle: "Lo-Fi Syndicate",
    description: "Chill lo-fi beats layered with vinyl static and jazzy undertones, ideal for background vibes."
  },
  {
    id: 6,
    image: imageThree,
    serialNumber: "06",
    title: "Stage Dive",
    subTitle: "The Breakers",
    description: "An energetic pop-punk performance clip with crowd interaction and behind-the-scenes vibes."
  },
];

export default featured_streams_data;