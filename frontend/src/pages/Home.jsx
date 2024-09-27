import React from 'react'
import Hero from "../components/Home/Hero"
import RecentlyAdded from '../components/Home/RecentlyAdded';

const Home = () => {
  return (
    <div className='bg-[#2E280E] text-white px-10 py-8'>
      <Hero />
      <RecentlyAdded />
    </div>
  )
}
// bg-zinc-900
export default Home;