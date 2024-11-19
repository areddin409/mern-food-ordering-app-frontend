import { Button } from '@/components/ui/button.tsx';
import { Loader2 } from 'lucide-react';

export default function LoadingButton() {
  return (
    <Button disabled>
      <Loader2 className={'mr-2 size-4 animate-spin'} />
      Loading
    </Button>
  );
}
