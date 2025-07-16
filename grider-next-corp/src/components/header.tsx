import Link from 'next/link';

export default function Header(){
     return(
        <div className='text-white text-3xl w-full absolute z-10'>
         <nav className='container relative flex flex-wrap items-center justify-between mx-auto p-8'>              {/* WHY use it? */}
        <Link href="/" className='font-bold text-3xl'>Home</Link>
        <div className='space-x-4 text-xl'>
        <Link href="/performance">Performance</Link>
        <Link href="/reliability">Reliability</Link>
        <Link href="/scale">Scale </Link>
        </div>
        </nav>  

      </div>
     )
}