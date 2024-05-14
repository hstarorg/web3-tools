type ExchangeToolItem = {
  name: string;
  icon: React.ReactElement;
  url: string;
  desc?: string;
  usage: string;
};

export const EXCHANGE_TOOLS: ExchangeToolItem[] = [
  {
    name: 'Layerswap',
    icon: <div></div>,
    url: 'https://www.layerswap.io/',
    desc: 'Move crypto across exchanges, blockchains, and wallets.',
    usage: '用于跨链转账',
  },
  {
    name: 'bungee',
    icon: <div />,
    url: 'https://www.bungee.exchange/refuel',
    desc: 'Bungee aggregates all your favourite bridges and gets you the cheapest and fastest routes to jump across chains!',
    usage: '用于在不同的链上充 GAS',
  },
];
