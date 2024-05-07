import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store';

const Header = () => {
  const auth=useSelector(states=>states.auth.isAutheriesed);
  const dispatch=useDispatch()
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth?(      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={()=>dispatch(authActions.logout())}>Logout</button>
          </li>
        </ul>
      </nav>):null}

    </header>
  );
};

export default Header;
