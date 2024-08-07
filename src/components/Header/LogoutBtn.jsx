import { useDispatch } from 'react-redux';
import {logout} from '../../store/authSlice';
import authService from '../../backend/auth';
function LogoutBtn() {

    const dispatch = useDispatch()
    const logoutHandler =() =>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600"
    onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn