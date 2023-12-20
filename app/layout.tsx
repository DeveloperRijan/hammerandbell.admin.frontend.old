/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'

/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'
import React from 'react'
import DashboardLayout from './components/Layout/DashboardLayout'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <DashboardLayout>{props.children} </DashboardLayout>
    </Providers>
  )
}
