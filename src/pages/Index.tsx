import { useState } from 'react';
import InstallScreen from '@/components/InstallScreen';
import BootScreen from '@/components/BootScreen';
import Desktop from '@/components/Desktop';

type Stage = 'install' | 'reboot' | 'boot' | 'desktop';

const Index = () => {
  const [stage, setStage] = useState<Stage>('install');

  const handleInstallComplete = () => {
    setStage('reboot');
    setTimeout(() => setStage('boot'), 2000);
  };

  const handleBootComplete = () => {
    setStage('desktop');
  };

  if (stage === 'install') {
    return <InstallScreen onComplete={handleInstallComplete} />;
  }

  if (stage === 'reboot') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Перезагрузка...</div>
      </div>
    );
  }

  if (stage === 'boot') {
    return <BootScreen onComplete={handleBootComplete} />;
  }

  return <Desktop />;
};

export default Index;