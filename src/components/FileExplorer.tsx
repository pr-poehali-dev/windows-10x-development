import Icon from '@/components/ui/icon';

interface FileExplorerProps {
  onClose: () => void;
}

const FileExplorer = ({ onClose }: FileExplorerProps) => {
  const folders = [
    { name: 'Рабочий стол', icon: 'Monitor', size: '15 элементов' },
    { name: 'Документы', icon: 'FileText', size: '42 элемента' },
    { name: 'Загрузки', icon: 'Download', size: '8 элементов' },
    { name: 'Изображения', icon: 'Image', size: '156 элементов' },
    { name: 'Музыка', icon: 'Music', size: '23 элемента' },
    { name: 'Видео', icon: 'Video', size: '7 элементов' },
  ];

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white rounded-lg shadow-2xl flex flex-col animate-scale-in z-30"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-8 bg-[#1E1E1E] flex items-center justify-between px-3 rounded-t-lg">
        <div className="flex items-center gap-2 text-white text-sm">
          <Icon name="Folder" size={14} />
          <span>Проводник</span>
        </div>
        <button
          onClick={onClose}
          className="hover:bg-red-600 px-3 py-1 text-white transition-colors"
        >
          <Icon name="X" size={14} />
        </button>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border-b">
        <button className="p-1 hover:bg-gray-200 rounded">
          <Icon name="ChevronLeft" size={20} />
        </button>
        <button className="p-1 hover:bg-gray-200 rounded">
          <Icon name="ChevronRight" size={20} />
        </button>
        <button className="p-1 hover:bg-gray-200 rounded">
          <Icon name="ChevronUp" size={20} />
        </button>
        <div className="flex-1 px-3 py-1 bg-white border rounded text-sm">
          Этот компьютер
        </div>
        <button className="p-1 hover:bg-gray-200 rounded">
          <Icon name="Search" size={20} />
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-48 bg-gray-50 border-r p-4">
          <div className="space-y-1">
            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-200 rounded text-sm">
              <Icon name="Monitor" size={16} />
              <span>Этот компьютер</span>
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-200 rounded text-sm">
              <Icon name="HardDrive" size={16} />
              <span>Диск C:</span>
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-200 rounded text-sm">
              <Icon name="Cloud" size={16} />
              <span>OneDrive</span>
            </button>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-4 gap-4">
            {folders.map((folder, i) => (
              <button
                key={i}
                className="flex flex-col items-center gap-2 p-4 rounded hover:bg-blue-50 transition-colors group"
              >
                <Icon name={folder.icon} size={48} className="text-[#0078D4]" />
                <div className="text-center">
                  <div className="text-sm font-medium">{folder.name}</div>
                  <div className="text-xs text-gray-500">{folder.size}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;
