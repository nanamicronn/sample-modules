import React from 'react'
import { Flex, FlexProps } from '@chakra-ui/react'

export type CardProps = {
  children: React.ReactNode
  py?: string
}

export const Card = ({
  children,
  py = '1rem',
  ...props
}: CardProps & FlexProps) => {
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
