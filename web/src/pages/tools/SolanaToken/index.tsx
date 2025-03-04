import { SolanaProvider } from './SolanaProvider';
import { CreateTokenSection } from './CreateTokenSection';

export function SolanaToken() {
  return (
    <SolanaProvider>
      <CreateTokenSection />
    </SolanaProvider>
  );
}
