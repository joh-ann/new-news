import logo from '../../images/new-heights-logo.jpeg';

function Header() {
  return (
    <div className='flex justify-between'>
      <img className='w-1/5' src={logo} alt="Logo"/>
      <div className='nav flex text-2xl self-end gap-5 mr-10'>
        <h1>Home</h1>
        <h1>YouTube</h1>
      </div>
    </div>
  )
}

export default Header;