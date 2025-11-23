import { useState } from 'react';
import Icon from '@/components/ui/icon';
import StartMenu from '@/components/StartMenu';
import FileExplorer from '@/components/FileExplorer';
import Settings from '@/components/Settings';

const Desktop = () => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [explorerOpen, setExplorerOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useState(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  });

  const desktopIcons = [
    { name: 'Этот компьютер', icon: 'Monitor', action: () => setExplorerOpen(true) },
    { name: 'Корзина', icon: 'Trash2', action: () => {} },
  ];

  return (
    <div 
      className="w-full h-full relative bg-gradient-to-br from-[#0078D4] to-[#00A4EF] overflow-hidden"
      onClick={() => setStartMenuOpen(false)}
    >
      <div className="p-6 space-y-4">
        {desktopIcons.map((icon, i) => (
          <button
            key={i}
            className="flex flex-col items-center gap-1 text-white p-3 rounded hover:bg-white/10 transition-colors"
            onDoubleClick={icon.action}
          >
            <Icon name={icon.icon} size={48} className="drop-shadow-lg" />
            <span className="text-sm drop-shadow-md">{icon.name}</span>
          </button>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#1E1E1E]/95 backdrop-blur-md border-t border-white/10 flex items-center px-2 z-50">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setStartMenuOpen(!startMenuOpen);
          }}
          className="h-10 w-12 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-2.5 h-2.5 bg-white" />
            <div className="w-2.5 h-2.5 bg-white" />
            <div className="w-2.5 h-2.5 bg-white" />
            <div className="w-2.5 h-2.5 bg-white" />
          </div>
        </button>

        <div className="flex-1 flex items-center gap-1 px-2">
          <button
            onClick={() => setExplorerOpen(true)}
            className="h-10 px-3 flex items-center gap-2 hover:bg-white/10 transition-colors text-white rounded"
          >
            <Icon name="Folder" size={20} />
            <span className="text-sm">Проводник</span>
          </button>
          <button
            onClick={() => setSettingsOpen(true)}
            className="h-10 px-3 flex items-center gap-2 hover:bg-white/10 transition-colors text-white rounded"
          >
            <Icon name="Settings" size={20} />
          </button>
        </div>

        <div className="flex items-center gap-4 px-4 text-white text-sm">
          <Icon name="Wifi" size={16} />
          <Icon name="Volume2" size={16} />
          <div className="text-right">
            <div>{time.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}</div>
            <div className="text-xs opacity-70">
              {time.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' })}
            </div>
          </div>
        </div>
      </div>

      {startMenuOpen && <StartMenu onClose={() => setStartMenuOpen(false)} />}
      {explorerOpen && <FileExplorer onClose={() => setExplorerOpen(false)} />}
      {settingsOpen && <Settings onClose={() => setSettingsOpen(false)} />}
    </div>
  );
};

export default Desktop;
