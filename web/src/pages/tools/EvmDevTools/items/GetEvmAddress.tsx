import { getAddress } from 'viem';
import { ChangeEvent, useState } from 'react';
import { toast } from 'sonner';
import { Wallet, Copy } from 'lucide-react';
import { copyText } from '@bizjs/biz-utils';

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

export function GetEvmAddress(props: ItemBase) {
  const [addressInput, setAddressInput] = useState('');
  const [checksumAddress, setChecksumAddress] = useState('');

  function handleAddressInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setAddressInput(e.target.value);
    setChecksumAddress('');
  }

  function getChecksumAddress() {
    try {
      const address = getAddress(addressInput);
      setChecksumAddress(address);
    } catch (error: Error | unknown) {
      toast('Get checksum address failed', {
        description: (error as Error).message,
        closeButton: true,
      });
      console.error(error);
    }
  }

  async function copyChecksumAddress() {
    await copyText(checksumAddress);
    toast('Copied');
  }

  return (
    <Card className={props.className}>
      <CardHeader>
        <CardTitle>Get checksum address</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Type wallet address"
          className="resize-none"
          value={addressInput}
          onChange={handleAddressInputChange}
        />

        {checksumAddress ? (
          <Alert className="mt-4">
            <Wallet />
            <AlertTitle>Checksum Address</AlertTitle>
            <AlertDescription>
              {checksumAddress}
              <Copy
                className="inline-block w-4 ml-2 cursor-pointer"
                onClick={copyChecksumAddress}
              />
            </AlertDescription>
          </Alert>
        ) : null}
      </CardContent>
      <CardFooter>
        <Button onClick={getChecksumAddress}>Get Checksum Address</Button>
      </CardFooter>
    </Card>
  );
}
