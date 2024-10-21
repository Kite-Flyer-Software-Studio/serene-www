'use client'

import { NextIntlClientProvider } from 'next-intl'

import { config } from './config'

export default function Provider({
  children,
  ...props
}) {
  return (
    <NextIntlClientProvider {...{ ...config, ...props }}>
      {children}
    </NextIntlClientProvider>
  )
}
