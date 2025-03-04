import { PropsWithChildren, useMemo } from 'react';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets';

// 解决 Wallet UI 样式问题
import '@solana/wallet-adapter-react-ui/styles.css';

export function SolanaProvider(props: PropsWithChildren<unknown>) {
  // 使用主网 / 测试网 / Devnet
  const network = WalletAdapterNetwork.Mainnet; // 可选 "Testnet" 或 "Devnet"

  // 连接 Solana 网络
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // 配置钱包
  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter(), new TorusWalletAdapter()],
    [],
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{props.children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
