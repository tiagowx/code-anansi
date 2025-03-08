import { Box, ChakraProvider, defaultSystem } from '@chakra-ui/react'
import React from 'react'
import Header from './header'
import Match from '../match'
import { ColorModeProvider } from '../ui/color-mode'


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider value={defaultSystem}>
            <Header />
            <ColorModeProvider>{children}</ColorModeProvider>
        </ChakraProvider>
    )
}