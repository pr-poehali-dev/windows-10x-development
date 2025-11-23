import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

interface InstallScreenProps {
  onComplete: () => void;
}

const InstallScreen = ({ onComplete }: InstallScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Подготовка к установке...');

  useEffect(() => {
    const stages = [
      { progress: 20, status: 'Копирование файлов Windows...' },
      { progress: 40, status: 'Установка компонентов...' },
      { progress: 60, status: 'Настройка параметров...' },
      { progress: 80, status: 'Завершение установки...' },
      { progress: 100, status: 'Готово!' }
    ];

    let currentStage = 0;

    const interval = setInterval(() => {
      if (currentStage < stages.length) {
        setProgress(stages[currentStage].progress);
        setStatus(stages[currentStage].status);
        currentStage++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="w-full h-full bg-[#0078D4] flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-md px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex gap-1 mb-8">
            <div className="w-24 h-24 bg-[#00A4EF]" />
            <div className="w-24 h-24 bg-[#7FBA00]" />
            <div className="w-24 h-24 bg-[#FFB900]" />
            <div className="w-24 h-24 bg-[#F25022]" />
          </div>
          <h1 className="text-4xl font-light mb-2">Установка Windows 10x</h1>
        </div>

        <div className="space-y-4">
          <Progress value={progress} className="h-2 bg-white/20" />
          <p className="text-center text-lg font-light">{status}</p>
          <p className="text-center text-sm text-white/70">{progress}%</p>
        </div>

        <div className="mt-12 text-center text-sm text-white/60">
          <p>Не выключайте компьютер</p>
        </div>
      </div>
    </div>
  );
};

export default InstallScreen;
