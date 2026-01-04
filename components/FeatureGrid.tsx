
import React from 'react';
import { Users, FileText, Activity, UserPlus } from 'lucide-react';

const FeatureGrid: React.FC = () => {
  const features = [
    { label: 'Teams', icon: <Users size={24} className="text-orange-400" />, key: 'teams' },
    { label: 'Record', icon: <FileText size={24} className="text-emerald-400" />, key: 'record' },
    { label: 'Wallet management', icon: <Activity size={24} className="text-red-400" />, key: 'wallet' },
    { label: 'Invite friends', icon: <UserPlus size={24} className="text-blue-400" />, key: 'invite' },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {features.map((feature) => (
        <div key={feature.key} className="flex flex-col items-center text-center px-1">
          <div className="mb-1.5">{feature.icon}</div>
          <span className="text-[10px] leading-tight text-gray-700 font-medium">
            {feature.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
