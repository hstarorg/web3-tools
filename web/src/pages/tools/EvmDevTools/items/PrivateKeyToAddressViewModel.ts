import { copyText } from '@bizjs/biz-utils';
import { ControllerBaseProxy } from 'bizify';
import { toast } from 'sonner';
import { Address as EvmAddress, privateKeyToAccount } from 'viem/accounts';

type ViewData = {
  privateKey: string;
  walletAddress: string;
};

export class PrivateKeyToAddressViewModel extends ControllerBaseProxy<ViewData> {
  protected $data(): ViewData {
    return { privateKey: '', walletAddress: '' };
  }

  setPrivateKey = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.data.privateKey = e.target.value;
  };

  getWalletAddress = () => {
    try {
      const account = privateKeyToAccount(this.data.privateKey as EvmAddress);
      this.data.walletAddress = account.address;
    } catch (error: Error | unknown) {
      toast('Get address failed', {
        description: (error as Error).message,
        closeButton: true,
      });
      console.error(error);
    }
  };

  copyWalletAddress = async () => {
    await copyText(this.data.walletAddress);
    toast('Copied');
  };
}
