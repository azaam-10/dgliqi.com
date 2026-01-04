
import React from 'react';
import { MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] px-5 pt-8 pb-6 text-white relative">
      {/* Top Icons */}
      <div className="absolute top-8 right-5">
        <MessageSquare size={24} className="text-white opacity-90" />
      </div>

      {/* User Info Row */}
      <div className="flex items-center space-x-3 mb-8">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full border-2 border-white/20 overflow-hidden bg-white/10 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 95,30 95,70 50,95 5,70 5,30" fill="#E74C3C" />
            <polygon points="50,5 95,30 50,55 5,30" fill="#F1C40F" />
            <polygon points="95,30 95,70 50,55" fill="#2ECC71" />
            <polygon points="95,70 50,95 50,55" fill="#3498DB" />
            <polygon points="50,95 5,70 50,55" fill="#9B59B6" />
            <polygon points="5,70 5,30 50,55" fill="#1ABC9C" />
          </svg>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">alaaa153</span>
            <span className="bg-[#F5B400] text-white text-[10px] italic font-bold px-2 py-0.5 rounded-[8px] flex items-center shadow-sm">
              VIP0
            </span>
          </div>
          <span className="text-xs text-white/80 mt-1">Invitation code: 804461</span>
        </div>
      </div>

      {/* Account Section */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-sm font-medium mb-1 opacity-90">My Account</span>
          <div className="flex items-baseline space-x-1">
            <span className="text-xs opacity-80">USDT</span>
            <span className="text-2xl font-bold">4719.2118</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-6 pr-2">
          {/* Deposit */}
          <button className="flex flex-col items-center space-y-1">
            <div className="w-[52px] h-[52px] bg-[#F5F5F5] rounded-[20px] flex items-center justify-center overflow-hidden">
               <svg viewBox="0 0 24 24" className="w-6 h-6">
                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1F6AE1" />
                    <stop offset="100%" stopColor="#0B4DB8" />
                  </linearGradient>
                </defs>
                <path 
                  fill="url(#blueGradient)" 
                  d="M21 18V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H19C20.1 3 21 3.89 21 5V6H12C10.89 6 10 6.89 10 8V16C10 17.11 10.89 18 12 18H21ZM12 16H22V8H12V16ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z" 
                />
              </svg>
            </div>
            <span className="text-[11px] font-medium opacity-90">Deposit</span>
          </button>

          {/* Withdrawal */}
          <button className="flex flex-col items-center space-y-1">
            <div className="w-[52px] h-[52px] bg-[#F5F5F5] rounded-[20px] flex items-center justify-center overflow-hidden">
               <svg viewBox="0 0 24 24" className="w-6 h-6">
                <path 
                  fill="url(#blueGradient)" 
                  d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" 
                />
              </svg>
            </div>
            <span className="text-[11px] font-medium opacity-90">Withdrawal</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
