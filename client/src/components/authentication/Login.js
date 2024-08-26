import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  SimpleGrid,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => {
    setShow(!show);
  };

  const handleLogin=()=>{

  }


  return (
    <Box mt={[10, 0]} maxWidth="600px" mx="auto">
      <SimpleGrid
        display={{
          base: "initial",
          md: "grid",
        }}
        columns={{
          md: 2,
        }}
        spacing={{
          md: 6,
        }}>
        <GridItem
          mt={[5, null, 0]}
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
              px={4}
              py={5}
              p={[null, 6]}
              bg="white"
              _dark={{
                bg: "#141517",
              }}
              spacing={6}>
              <SimpleGrid columns={6} spacing={6}>
                <FormControl
                  isRequired
                  id="email_address"
                  as={GridItem}
                  colSpan={[6, 6]}>
                  <FormLabel
                    htmlFor="email_address"
                    fontSize="sm"
                    fontWeight="semibold"
                    color="gray.500"
                    _dark={{
                      color: "gray.50",
                    }}>
                    Email address
                  </FormLabel>
                  <Input
                    placeholder="Eg: abc@xyz.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    name="email_address"
                    id="email_address"
                    autoComplete="email_address"
                    mt={1}
                    focusBorderColor="purple.600"
                    shadow="sm"
                    size="md"
                    w="full"
                    rounded="md"
                  />
                </FormControl>

                <FormControl
                  id="password"
                  isRequired
                  as={GridItem}
                  colSpan={[6, 6]}>
                  <FormLabel
                    htmlFor="password"
                    fontSize="sm"
                    fontWeight="semibold"
                    color="gray.500"
                    _dark={{
                      color: "gray.50",
                    }}>
                    Password{" "}
                  </FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="Eg: password$123"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type={show ? "text" : "password"}
                      name="password"
                      id="password"
                      autoComplete="new-password"
                      mt={1}
                      focusBorderColor="purple.600"
                      shadow="sm"
                      size="md"
                      w="full"
                      rounded="md"
                    />
                    <InputRightElement pt={2} width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </SimpleGrid>
            </Stack>
            <Box
              px={{
                base: 4,
                sm: 6,
              }}
              py={3}
              bg="gray.1000"
              _dark={{
                bg: "#121212",
              }}
              textAlign="center">
              <Button
                onClick={handleLogin}
                w={"full"}
                type="submit"
                backgroundColor={"purple"}
                color={"white"}
                _hover={{
                  bgColor: "#660066",
                  fontWeight: "500",
                }}
                _focus={{
                  shadow: "",
                }}
                fontWeight="xl">
                Login
              </Button>

              <Button
                onClick={() => {
                  setEmail("guest@user.com");
                  setPassword("guest123");
                }}
                mt={4}
                w={"full"}
                type="button"
                backgroundColor={"green"}
                color={"white"}
                _hover={{
                  bgColor: "#036903",
                  fontWeight: "500",
                }}
                _focus={{
                  shadow: "",
                }}
                fontWeight="xl">
                Login As a Guest
              </Button>

              <Text mt={3} fontWeight={400}>
                Don&apos;t have an account?{" "}
                <Link color="red.600" href="/">
                  SignUp
                </Link>{" "}
              </Text>
            </Box>
          </chakra.form>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Login;
