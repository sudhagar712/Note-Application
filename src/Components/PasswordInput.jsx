import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={isShowPassword ? "text" : "password"}
        value={value}
        placeholder={placeholder || "password"}
        onChange={onChange}
        className="input-box"
      />

      {isShowPassword ? (
        <FaRegEye
          size={22}
          className="text-primary cursor-pointer absolute top-4 right-5  "
          onClick={() => setIsShowPassword(!isShowPassword)}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="text-primary cursor-pointer absolute top-4 right-5"
          onClick={() => setIsShowPassword(!isShowPassword)}
        />
      )}
    </div>
  );
};

export default PasswordInput;
