import React from 'react'
import { getInitials } from '../../utils/helper';

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-9 h-9 lg:w-12 lg:h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-200 cursor-pointer">
        {getInitials("Sudhagar")}
      </div>
      <div>
        <p className="text-xs lg:text-sm font-medium text-primary">Sudhagar</p>
        <button onClick={onLogout} className="text-red-500 underline text-xs lg:text-sm font-medium">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo
