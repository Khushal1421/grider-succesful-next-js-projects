import homeImg from '../../public/home.jpg'
// import homeImg from 'public/home.jpg';
// import homeImg from '' SEE HIS IMAGE FILES + IMPORT UPDATE (NONE IS WORKING)

import Hero from '@/components/hero';

export default function Home() {
  return (
    <Hero imgData={homeImg} imgAlt="car factory" title='Professional Cloud Hosting' />
  );
}
