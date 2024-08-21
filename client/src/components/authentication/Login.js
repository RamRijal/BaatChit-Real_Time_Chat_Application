import {
  Box,
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid,
  Stack,
  chakra,
} from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
    <Box mt={[10, 0]}>
      <SimpleGrid
        display={{ base: "initial", md: "grid" }}
        columns={{ md: 2 }}
        spacing={{ md: 2 }}>
        <GridItem colSpan={{ md: 1 }}></GridItem>
        <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
          <chakra.form
            method="POST"
            rounded={[null, "md"]}
            overflow={{ sm: "hidden" }}
            >
            <Stack
              px={4}
              py={5}
              p={[null, 6]}
              bg="white"
              _dark={{ bg: "#141517" }}
              spacing={6}>
              <SimpleGrid columns={6} spacing={6}>
                <FormControl as={GridItem} colSpan={[6, 6]}>
                  <FormLabel
                    htmlFor="email_address"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{ color: "gray.50" }}>
                    Email address
                  </FormLabel>
                  <Input
                    type="text"
                    name="email_address"
                    id="email_address"
                    autoComplete="email"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={[6, 6]}>
                  <FormLabel
                    htmlFor="password"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{ color: "gray.50" }}>
                    Password
                  </FormLabel>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    mt={1}
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                  />
                </FormControl>

                
              </SimpleGrid>
            </Stack>
            <Box
              px={{ base: 4, sm: 6 }}
              py={3}
              _dark={{ bg: "#121212" }}
              textAlign="center">
              <Button
                w={"full"}
                type="submit"
                backgroundColor={"purple"}
                color={"white"}
                _focus={{ shadow: "" }}
                fontWeight="xl">
                Login
              </Button>
              <Button
                my="5px"
                w={"full"}
                type="button"
                backgroundColor={"green"}
                color={"white"}
                _focus={{ shadow: "" }}
                fontWeight="xl">
                Login As a Guest
              </Button>
            </Box>
          </chakra.form>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Login;
