import { useState, useEffect } from 'react';
import InstallScreen from '@/components/InstallScreen';
import BootScreen from '@/components/BootScreen';
import Desktop from '@/components/Desktop';

type Stage = 'install' | 'reboot' | 'boot' | 'desktop';

const Index = () => {
  const [stage, setStage] = useState<Stage>(() => {
    const installed = localStorage.getItem('windows10x_installed');
    return installed === 'true' ? 'desktop' : 'install';
  });

  const handleInstallComplete = () => {
    localStorage.setItem('windows10x_installed', 'true');
    setStage('reboot');
    setTimeout(() => setStage('boot'), 2000);
  };

  const handleBootComplete = () => {
    setStage('desktop');
  };

  const handleRestart = () => {
    setStage('reboot');
    setTimeout(() => setStage('boot'), 2000);
  };

  const handleShutdown = () => {
    setStage('reboot');
    setTimeout(() => {
      window.location.reload();
    }, 2000);
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
      {stage === 'desktop' && <Desktop onRestart={handleRestart} onShutdown={handleShutdown} />}
    </div>
  );
};

export default Index;