
import React from 'react';
import { Layout, ClipboardList, Wallet, Settings, ChevronRight } from 'lucide-react';

const MenuList: React.FC = () => {
  const menuItems = [
    { label: 'Profile', icon: <Layout className="text-gray-400" size={20} /> },
    { label: 'Deposit records', icon: <ClipboardList className="text-gray-400" size={20} /> },
    { label: 'Withdrawal records', icon: <Wallet className="text-gray-400" size={20} /> },
    { label: 'Setting', icon: <Settings className="text-gray-400" size={20} /> },
  ];

  return (
    <div className="bg-white rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] overflow-hidden">
      {menuItems.map((item, index) => (
        <div
          key={item.label}
          className={`flex items-center justify-between p-4 active:bg-gray-50 transition-colors ${
            index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
          }`}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center">
              {item.icon}
            </div>
            <span className="text-[14px] text-gray-700 font-normal">{item.label}</span>
          </div>
          <ChevronRight size={18} className="text-gray-300" />
        </div>
      ))}
    </div>
  );
};

export default MenuList;
