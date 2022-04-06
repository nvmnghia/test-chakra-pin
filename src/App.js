import React from 'react';
import {
  ChakraProvider,
  VStack,
  Input,
  HStack,
  PinInput,
  PinInputField,
  extendTheme,
} from '@chakra-ui/react';

const components = {
  Input: {
    variants: {
      outline: {
        field: {
          h: 88,
          borderColor: 'red',
        },
      },
    },
  },

  PinInput: {
    variants: {
      outline: {
        field: {
          h: 88,
          borderColor: 'red',
        },
      },
    },
  },
};

const theme = extendTheme({ components });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Input />

        <HStack>
          <PinInput>
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
