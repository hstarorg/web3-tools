import { Button } from '@/components/ui/button';
import SafeAppsSDK from '@safe-global/safe-apps-sdk';

type Opts = {
  allowedDomains?: RegExp[];
  debug?: boolean;
};

const opts: Opts = {
  allowedDomains: [/^app\.safe\.global$/],
  debug: false,
};

const appsSdk = new SafeAppsSDK(opts);

export function SafeTx() {
  async function handleSafeTx() {
    const a = await appsSdk.txs.signMessage('xxx');
    console.log(a);

    // console.log('pr');
    // const safe = await appsSdk.safe.getChainInfo();
    // console.log(safe);
  }


  

  return (
    <div className="p-4">
      <h1>SafeTx</h1>

      <Button onClick={handleSafeTx}>点我试试</Button>
    </div>
  );
}
