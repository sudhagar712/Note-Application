import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from '../Searchbar/SearchBar'


const Header = () => {

    const [searchQuery, setSearchQuery] = useState("");




const navigate  = useNavigate()

const handleSearch = ()=>{

}

const onClearSearch = ()=>{
setSearchQuery("")
}




const onLogout = ()=>{
navigate("/login")
}

  return (
    <header className="lg:px-6 px-3 py-2 flex items-center justify-between bg-white shadow fixed top-0 gap-3  w-full">
      <Link to="/">
        <h1 className="lg:text-3xl text-[17px] font-bold text-primary ">
          Notes
        </h1>
      </Link>

      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      <ProfileInfo onLogout={onLogout} />
    </header>
  );
}

export default Header
