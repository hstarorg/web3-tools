import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

import { GetEvmAddress } from './items/GetEvmAddress';

export function EvmDevTools() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-2">
        <GetEvmAddress className="col-span-6" />

        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Get checksum address</CardTitle>
          </CardHeader>
          <Textarea placeholder="Type wallet address" className="resize-none" />
          <Button>Get Checksum Address</Button>
        </Card>
      </div>
    </div>
  );
}
