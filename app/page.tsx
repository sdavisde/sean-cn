import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Bubbles from '@/public/bubbles.svg'
import { LinkButton } from '@/registry/new-york/link-button'

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className='max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8'>
      <header className='flex flex-col gap-1'>
        <h1 className='flex gap-2 text-3xl font-bold tracking-tight'>
          <span className='centered'>
            <Image
              src={Bubbles}
              alt=''
              className='h-10 w-10'
            />
            Sean-CN Registry
          </span>
        </h1>
        <p className='text-muted-foreground'>
          My custom registry for components that I hope speed up development of future sites.
        </p>
      </header>
      <main className='flex flex-col flex-1 gap-8'>
        <Card className='min-h-[450px]'>
          <CardHeader>
            <CardTitle className='text-sm text-muted-foreground sm:pl-3'>
              A Conditional Link, wich does not render an anchor tag if href is not defined.
            </CardTitle>
          </CardHeader>
          <CardContent className='centered gap-4 min-h-[400px] relative'>
            <LinkButton
              variant='link'
              href={null}
            >
              Broken Link
            </LinkButton>
            <LinkButton href='/'>Cta Link</LinkButton>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
