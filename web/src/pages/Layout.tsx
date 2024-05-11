import { Outlet, useNavigate } from 'react-router-dom';

export function Layout() {
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate('/');
  }

  return (
    <>
      <header className="h-16 py-2 px-4 sticky shadow-md bg-slate-900/5 backdrop-blur top-0 z-50">
        <div className="flex cursor-pointer" onClick={handleLogoClick}>
          <img src="wt-logo-min.png" className="h-12 w-12" alt="" />
          <div className="ml-2 leading-[48px] text-2xl font-bold">
            Web3 Tools
          </div>
        </div>
        <div></div>
        <div></div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
