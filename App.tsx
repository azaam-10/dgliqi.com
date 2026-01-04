
import React, { useState } from 'react';
import Header from './components/Header.tsx';
import FeatureGrid from './components/FeatureGrid.tsx';
import MenuList from './components/MenuList.tsx';
import BottomNav from './components/BottomNav.tsx';
import ProcessModal from './components/ProcessModal.tsx';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Mine');
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Scrollable Content with reduced blur effect when modal is active */}
      <div className={`flex-1 transition-all duration-300 ${showModal ? 'blur-[2px] pointer-events-none' : ''}`}>
        <Header />
        
        {/* Features Row */}
        <div className="bg-white py-4 border-b border-gray-100">
          <FeatureGrid />
        </div>

        {/* Menu Section */}
        <div className="px-4 py-4 bg-[#F7F8FA]">
          <MenuList />
        </div>
      </div>

      {/* Persistent Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Process Modal */}
      {showModal && <ProcessModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default App;
