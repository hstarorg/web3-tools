import { Wallet, Copy } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ItemBase } from '../types';
import { useController } from 'bizify';
import { PrivateKeyToAddressViewModel } from './PrivateKeyToAddressViewModel';

export function PrivateKeyToAddress(props: ItemBase) {
  const vm = useController(PrivateKeyToAddressViewModel);
  const vmData = vm.data;

  return (
    <Card className={props.className}>
      <CardHeader>
        <CardTitle>Private Key to Address</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Type private key"
          className="resize-none"
          value={vmData.privateKey}
          onChange={vm.setPrivateKey}
        />

        {vmData.walletAddress ? (
          <Alert className="mt-4">
            <Wallet />
            <AlertTitle>Checksum Address</AlertTitle>
            <AlertDescription>
              {vmData.walletAddress}
              <Copy
                className="inline-block w-4 ml-2 cursor-pointer"
                onClick={vm.copyWalletAddress}
              />
            </AlertDescription>
          </Alert>
        ) : null}
      </CardContent>
      <CardFooter>
        <Button onClick={vm.getWalletAddress}>Get Wallet Address</Button>
      </CardFooter>
    </Card>
  );
}
