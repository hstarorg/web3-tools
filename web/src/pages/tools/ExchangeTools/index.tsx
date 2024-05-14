import { EXCHANGE_TOOLS } from '@/data/exchange-tool-list';

export function ExchangeTools() {
  return (
    <div>
      <div className="grid grid-cols-6 gap-4">
        {EXCHANGE_TOOLS.map((item) => {
          return (
            <div
              key={item.name}
              className="border p-2 rounded-md cursor-pointer text-sm"
              onClick={() => {
                window.open(item.url);
              }}
            >
              <div className="h-8">{item.icon}</div>
              <div className="font-bold ">{item.name}</div>
              <div className="h-16 overflow-hidden text-ellipsis line-clamp-3">
                {item.desc}
              </div>
              <div className="border-t pt-2">{item.usage}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
