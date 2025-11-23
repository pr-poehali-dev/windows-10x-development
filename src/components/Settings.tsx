import Icon from '@/components/ui/icon';

interface SettingsProps {
  onClose: () => void;
}

const Settings = ({ onClose }: SettingsProps) => {
  const settingsItems = [
    { name: 'Система', icon: 'Monitor', desc: 'Дисплей, уведомления, питание' },
    { name: 'Устройства', icon: 'Smartphone', desc: 'Bluetooth, принтеры, мышь' },
    { name: 'Сеть и интернет', icon: 'Wifi', desc: 'Wi-Fi, режим "в самолёте", VPN' },
    { name: 'Персонализация', icon: 'Palette', desc: 'Фон, цвета, темы' },
    { name: 'Приложения', icon: 'Grid3x3', desc: 'Удаление, стандартные приложения' },
    { name: 'Учётные записи', icon: 'User', desc: 'Ваши данные, синхронизация' },
    { name: 'Время и язык', icon: 'Clock', desc: 'Регион, язык, дата' },
    { name: 'Конфиденциальность', icon: 'Shield', desc: 'Местоположение, камера' },
    { name: 'Обновление и безопасность', icon: 'RefreshCw', desc: 'Windows Update, восстановление' },
  ];

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[650px] bg-white rounded-lg shadow-2xl flex flex-col animate-scale-in z-30"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-8 bg-[#1E1E1E] flex items-center justify-between px-3 rounded-t-lg">
        <div className="flex items-center gap-2 text-white text-sm">
          <Icon name="Settings" size={14} />
          <span>Параметры</span>
        </div>
        <button
          onClick={onClose}
          className="hover:bg-red-600 px-3 py-1 text-white transition-colors"
        >
          <Icon name="X" size={14} />
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-64 bg-gray-50 border-r p-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Найти параметр"
              className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:border-[#0078D4]"
            />
          </div>
          <div className="flex items-center gap-3 p-3 bg-white rounded shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#0078D4] flex items-center justify-center text-white font-semibold">
              П
            </div>
            <div>
              <div className="font-medium text-sm">Пользователь</div>
              <div className="text-xs text-gray-500">Локальная учётная запись</div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-3xl font-light mb-8">Параметры Windows</h1>
          
          <div className="grid grid-cols-3 gap-4">
            {settingsItems.map((item, i) => (
              <button
                key={i}
                className="flex flex-col items-start gap-3 p-4 border rounded-lg hover:border-[#0078D4] hover:bg-blue-50 transition-colors text-left"
              >
                <Icon name={item.icon} size={32} className="text-[#0078D4]" />
                <div>
                  <div className="font-medium mb-1">{item.name}</div>
                  <div className="text-xs text-gray-600">{item.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
