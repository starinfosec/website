
'use client';
import Image from 'next/image';
import * as React from 'react';
import { cn } from '@/lib/utils';

export function Logo(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cn('relative', props.className)}>
      <Image
        src="/b.png"
        alt="StarInfoSec Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
