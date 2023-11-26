import nhBg from '../../images/nh-bg.png';
import { Link } from 'react-router-dom';

function ErrorPage({ error }) {
  if (error) {
    return (
      <div className='bg-repeat flex justify-center pt-20 text-xl sm:text-2xl' style={{ backgroundImage: `url(${nhBg})`, height: `100vh` }}>
        {error}
      </div>
    )
  }

  return (
    <>
      <div className='bg-repeat flex justify-center pt-20 text-xl sm:text-2xl' style={{ backgroundImage: `url(${nhBg})`, height: `100vh` }}>
        Sorry, this page does not exist! Return&nbsp;<Link to='/' className='text-green-900 hover:underline'>home</Link>.</div>
    </>
  )
}

export default ErrorPage;