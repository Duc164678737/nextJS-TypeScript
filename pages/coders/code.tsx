

// tsdrpfc

import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface IAppProps {
}

export default function App (props: IAppProps) {
    const router = useRouter();
  return (
    <div>
      <Link href="/coders">
        <a >Go to coders</a>
      </Link>
    </div>
  );
}
