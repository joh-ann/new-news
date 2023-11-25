import logo from '../../images/new-heights-logo.jpeg';
import jKelce from '../../images/nh-62.png';
import tKelce from '../../images/nh-87.png';

function Header() {
  return (
    <div className='flex'>
        <img className='h-36 w-72' src={logo} alt="Logo"/>
      <div className='flex w-1/2 items-center justify-center gap-5'>
        <img className='h-32 w-32' src={jKelce} alt="Jason"/>
        <img className='h-32 w-28' src={tKelce} alt="Travis"/>
      </div>
      <div className='nav flex text-2xl self-end gap-10 mr-10'>
        <h1>Home</h1>
        <h1>YouTube</h1>
      </div>
    </div>
  )
}

export default Header;