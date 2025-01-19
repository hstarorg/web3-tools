import { GetEvmAddress } from './items/GetEvmAddress';
import { PrivateKeyToAddress } from './items/PrivateKeyToAddress';

export function EvmDevTools() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <GetEvmAddress className="col-span-6" />
        <PrivateKeyToAddress className="col-span-6" />
      </div>
    </div>
  );
}
