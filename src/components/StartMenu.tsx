import Icon from '@/components/ui/icon';

interface StartMenuProps {
  onClose: () => void;
}

const StartMenu = ({ onClose }: StartMenuProps) => {
  const apps = [
    { name: 'Настройки', icon: 'Settings', color: 'bg-[#0078D4]' },
    { name: 'Проводник', icon: 'Folder', color: 'bg-[#FFB900]' },
    { name: 'Microsoft Edge', icon: 'Globe', color: 'bg-[#00A4EF]' },
    { name: 'Магазин', icon: 'Store', color: 'bg-[#7FBA00]' },
    { name: 'Фото', icon: 'Image', color: 'bg-[#F25022]' },
    { name: 'Почта', icon: 'Mail', color: 'bg-[#0078D4]' },
  ];

  return (
    <div
      className="absolute bottom-12 left-0 w-[500px] h-[600px] bg-[#1E1E1E]/98 backdrop-blur-xl border-t border-white/10 animate-scale-in z-40"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Поиск приложений, файлов..."
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/50 focus:outline-none focus:border-[#0078D4]"
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          <h3 className="text-white/70 text-xs font-semibold mb-3 uppercase">Закрепленные</h3>
          <div className="grid grid-cols-3 gap-3">
            {apps.map((app, i) => (
              <button
                key={i}
                className="flex flex-col items-center gap-2 p-4 rounded hover:bg-white/5 transition-colors"
              >
                <div className={`${app.color} w-12 h-12 rounded flex items-center justify-center`}>
                  <Icon name={app.icon} size={24} className="text-white" />
                </div>
                <span className="text-white text-xs text-center">{app.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-white/70 text-xs font-semibold mb-3 uppercase">Рекомендуемые</h3>
            <div className="space-y-2">
              {['Документы', 'Загрузки', 'Изображения'].map((item, i) => (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 p-2 rounded hover:bg-white/5 transition-colors text-white"
                >
                  <Icon name="File" size={20} />
                  <div className="flex-1 text-left">
                    <div className="text-sm">{item}</div>
                    <div className="text-xs text-white/50">Недавно открыто</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <button className="flex items-center gap-3 px-4 py-2 rounded hover:bg-white/5 transition-colors text-white">
            <Icon name="User" size={20} />
            <span className="text-sm">Пользователь</span>
          </button>
          <button className="p-2 rounded hover:bg-white/5 transition-colors text-white">
            <Icon name="Power" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
