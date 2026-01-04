
import React from 'react';
import { Home, Headphones, LayoutGrid, Clipboard, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { label: 'Home', icon: <Home size={22} />, key: 'Home' },
    { label: 'Service', icon: <Headphones size={22} />, key: 'Service' },
    { label: 'Menu', icon: <LayoutGrid size={22} />, key: 'Menu' },
    { label: 'Record', icon: <Clipboard size={22} />, key: 'Record' },
    { label: 'Mine', icon: <User size={22} />, key: 'Mine' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[70px] bg-white border-t border-gray-100 flex items-center justify-around px-2 pb-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className="flex flex-col items-center justify-center space-y-1 min-w-[60px]"
          >
            <div className={`${isActive ? 'text-gray-800' : 'text-gray-400'}`}>
              {tab.icon}
            </div>
            <span
              className={`text-[11px] ${
                isActive ? 'text-gray-800 font-medium' : 'text-gray-400 font-normal'
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
