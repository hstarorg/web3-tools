import { createConfig, http } from 'wagmi';
import { zkSync } from 'wagmi/chains';

export const wagmiConfig = createConfig({
  chains: [zkSync],
  transports: {
    [zkSync.id]: http(),
  },
});
