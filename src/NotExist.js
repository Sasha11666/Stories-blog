import { Link } from 'react-router-dom';

const NotExist = () => {
  return (
    <div className="not-exist">
      <h2>Sorry</h2>
      <p>This page doesn't exist 👻</p>
      <Link className="go-home" to="/">Return to the homepage</Link>
    </div>
  )
}

export default NotExist