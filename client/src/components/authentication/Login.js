import {
  Box, Button, FormControl,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid,
  Stack, chakra
} from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
  
      <SimpleGrid
        display={{
          base: "initial",
          md: "grid",
        }}
        columns={{
          md: 2,
        }}
        spacing={{
          md: 0,
        }}>
        <GridItem
          colSpan={{
            md: 1,
          }}></GridItem>
        <GridItem
          mt={[3, null, 0]}
          colSpan={{
            md: 2,
          }}>
          <chakra.form
            method="POST"
            rounded={[null, "md"]}
            overflow={{
              sm: "hidden",
            }}>
            <Stack
              p={[null, 3]}
              bg="white"
              _dark={{
                bg: "#141517",
              }}
              spacing={6}>
              <SimpleGrid columns={6} spacing={20}>
                
                <FormControl as={GridItem} colSpan={[6, 6]}>
                  <FormLabel
                    htmlFor="email_address"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}>
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
                    htmlFor="email_address"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}>
                    Password{" "}
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
             
              </SimpleGrid>
            </Stack>
           
              <Button
              w={'full'}
                type="submit"
                backgroundColor={"purple"}
                color={"white"}
                _focus={{
                  shadow: "",
                }}
                fontWeight="xl">
                Login
              </Button>
              <Button
              my="5px"
              w={'full'}
                type="submit"
                backgroundColor={"green"}
                color={"white"}
                _focus={{
                  shadow: "",
                }}
                fontWeight="xl">
                Login As a GUEST
              </Button>
          </chakra.form>
        </GridItem>
      </SimpleGrid>
  );
};

export default Login;
