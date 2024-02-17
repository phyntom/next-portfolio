import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='mx-auto w-1/2 h-1/2 text-center border rounded'>
        <h2 className='text-orange-500 font-bold'>404 - Not Found</h2>
        <p className='text-slate-800 font-semibold mb-2'>
          Could not find request resources
        </p>
        <Link href='/' className='text-orange-900 hover:text-orange-950'>
          Return Home
        </Link>
      </div>
    </div>
  );
}
