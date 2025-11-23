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

  return (
    <div className="min-h-screen w-full">
      {stage === 'install' && <InstallScreen onComplete={handleInstallComplete} />}
      {stage === 'reboot' && (
        <div className="min-h-screen w-full bg-black flex items-center justify-center">
          <div className="text-white text-xl">Перезагрузка...</div>
        </div>
      )}
      {stage === 'boot' && <BootScreen onComplete={handleBootComplete} />}
      {stage === 'desktop' && <Desktop />}
    </div>
  );
};

export default Index;