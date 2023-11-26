import logo from '../../images/new-heights-logo.png';
import jKelce from '../../images/nh-62.png';
import tKelce from '../../images/nh-87.png';
import { Link } from 'react-router-dom';
import nhHeaderBg from '../../images/nh-header-bg.png';

function Header() {
  return (
    <div className='flex bg-green-900 bg-repeat' style={{ backgroundImage: `url(${nhHeaderBg})`}}>
      <Link to='/'>
        <img className='h-36 w-72 object-contain p-2 rounded-3xl' src={logo} alt="Logo"/>
      </Link>
      <div className='flex w-1/2 items-center justify-center'>
        <img className='h-24 w-24 sm:h-24 sm:w-24 md:h-32 md:w-32' src={jKelce} alt="Jason"/>
        <img className='h-24 w-20 sm:h-24 sm:w-20 md:h-32 md:w-28' src={tKelce} alt="Travis"/>
      </div>
      <div className='nav flex text-2xl self-end'>
        <Link to='/'>
          <h1 className='text-white mb-4 hover:underline pr-4'>Home</h1>
        </Link>
      </div>
    </div>
  )
}

export default Header;