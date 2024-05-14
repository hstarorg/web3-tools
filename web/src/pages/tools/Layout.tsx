import { useState } from 'react';
import classnames from 'classnames';
import { useNavigate, Outlet } from 'react-router-dom';

const MenuList: { label: string; key: string; path: string }[] = [
  { label: '交易工具', key: 'tools-exchange', path: '/tools/exchange' },
  { label: 'EVM 开发者工具', key: 'tools-evmdev', path: '/tools/evmdev' },
];

export function ToolsLayout() {
  const navigate = useNavigate();
  const [activedMenu, setActivedMenu] = useState('tools-exchange');

  function handleMenuClick(menuKey: string) {
    const path = MenuList.find((x) => x.key === menuKey)?.path;
    if (path) {
      setActivedMenu(menuKey);
      navigate(path);
    }
  }

  return (
    <div className="flex">
      <div className="w-[200px] absolute top-16 bg-[#f8fafc] bottom-0 overflow-y-auto p-1 pt-2">
        <menu>
          {MenuList.map((x) => {
            console.log(x.key, activedMenu);
            return (
              <li
                key={x.key}
                className={classnames(
                  'cursor-pointer text-base  px-2 py-1 rounded-md',
                  { 'text-sky-500': x.key === activedMenu },
                  {
                    'text-slate-500 hover:text-slate-600':
                      x.key !== activedMenu,
                  },
                )}
                onClick={() => handleMenuClick(x.key)}
              >
                {x.label}
              </li>
            );
          })}
        </menu>
      </div>
      <div className="flex-1 ml-[200px] p-4">
        <Outlet />
      </div>
    </div>
  );
}
