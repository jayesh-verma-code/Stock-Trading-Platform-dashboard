import React, {useEffect,useState} from 'react'
import Watchlist from './Watchlist'
import {Route, Routes} from 'react-router-dom';
import Summary from './Summary';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Apps from './Apps';

const Dashboard = () => {
  const [mobileNumber, setMobileNumber] = useState(undefined);

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const mobile = params.get('mobile');
  console.log("Logged-in user:", mobile);
  setMobileNumber(mobile);
}, []);
  return (
    <div className='row allwhite'>
      
      <div className='col-lg-8 col-md-8 col-sm-12'>
        <Routes>
          <Route path='/' element={<Summary mobileNumber={mobileNumber} />}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/holdings' element={<Holdings/>}/>
          <Route path='/positions' element={<Positions/>}/>
          <Route path='/funds' element={<Funds/>}/>
          <Route path='/apps' element={<Apps/>}/>
        </Routes>
      </div>
      <Watchlist/>
    </div>
  )
}

export default Dashboard