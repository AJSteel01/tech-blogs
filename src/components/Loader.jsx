
import loading from '../assets/loading.gif'


const Loader = () => (
  <div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
    <img
      src={loading}
      alt='loader'
      width={100}
      height={100}
      className='object-contain'
      loading="lazy"
    />
    <p className='text-sm font-bold text-primary-grey-300'>Loading...</p>
  </div>
);

export default Loader;