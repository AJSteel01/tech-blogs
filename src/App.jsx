import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './backend/auth'
import {login, logout} from './store/authSlice';
import {Header , Footer} from './components/index';
import { Outlet } from 'react-router-dom';
import Loader from './components/Loader';

function App() {
  const [loading,setLoading]=useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))//get ho ya error ho finally run hoga hi hoga better approach

  },[])

  return !loading ? (
    <div className='w-full'>
      <div>
        <Header />
        <main>
         {/* Todo: */} <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) :(<Loader/>)
}

export default App
