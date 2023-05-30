import whiteDeer from '../assets/whiteDeer.jpg'; 
import secretHaven from '../assets/secretHaven.jpeg'; 
import rainbowZoo from '../assets/rainbowZoo.jpg'; 


const OriginalSongs = () => {

  return (
    <>
  
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]' >
        
      <a className='relative p-4 flex-1' href='https://www.youtube.com/watch?v=nAm9XcI4WEw' target="_blank">
        
        <img
        className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src={whiteDeer}
          alt='/'
        />
        <h3 className=' text-black text-l font-bold text-center mt-4'>White Deer - BQC Original</h3>
      </a>
      <a className='relative p-4 flex-1' href='https://www.youtube.com/watch?v=oaASO3qhwcU' target="_blank">
       
        <img
        className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src={rainbowZoo}
          alt='/'
        />
         <h3 className=' text-black text-l font-bold text-center mt-4'>Rainbow Zoo - BQC Original</h3>
      </a>
      <a className='relative p-4 flex-1' href='https://www.youtube.com/watch?v=h4PkaN27Xc4&feature=youtu.be' target="_blank">
        <img
        className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src={secretHaven}
          alt='/'
        />
         <h3 className=' text-black text-l font-bold text-center  mt-4'>Safe Haven - BQC Original</h3>
      </a>
    </div>
    </>
  );
};

export default OriginalSongs;