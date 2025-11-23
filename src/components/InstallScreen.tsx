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
    <div className="min-h-screen w-full bg-[#0078D4] flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-2xl px-8">
        <div className="mb-12 text-center">
          <img 
            src="https://cdn.poehali.dev/files/b6160107-ef9d-4f99-ac7f-b5d81ef63266.jpg" 
            alt="Windows Logo" 
            className="w-40 h-40 mx-auto mb-8"
          />
          <h1 className="text-5xl font-light mb-2">Установка Windows 10x</h1>
        </div>

        <div className="space-y-6">
          <Progress value={progress} className="h-3 bg-white/20" />
          <p className="text-center text-xl font-light">{status}</p>
          <p className="text-center text-base text-white/70">{progress}%</p>
        </div>

        <div className="mt-16 text-center text-base text-white/60">
          <p>Не выключайте компьютер</p>
        </div>
      </div>
    </div>
  );
};

export default InstallScreen;