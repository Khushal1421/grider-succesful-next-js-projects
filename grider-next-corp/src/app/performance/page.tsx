import performanceImg from '../../../public/performance.jpg' // Not a Permanent Sol'n
import Hero from '@/components/hero';

export default function Performance() {
  return (
    <Hero imgData={performanceImg} imgAlt="welding" title='We Serve high performance applications' />
  );
}
