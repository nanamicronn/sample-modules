import React from 'react'
import { Flex, FlexProps } from '@chakra-ui/react'

export type CheckProps = {
  children: React.ReactNode
  py?: string
}

export const Check = ({ children, py = '1rem', ...props }: CheckProps & FlexProps) => {
  return (
    <Flex
      flexDirection={'column'}
      bg={'neutral.0'}
      borderRadius={'0.5rem'}
      shadow={'normal'}
      px={'1rem'}
      py={py}
      {...props}
    >
      {children}
    </Flex>
  )
}
