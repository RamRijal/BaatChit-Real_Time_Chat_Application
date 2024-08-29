/* eslint-disable no-unused-vars */
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

const Register = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [picture, setPicture] = useState();

  const handleClick = () => {
    setShow(!show);
  };

  const postDetails = () => {
  };
  const handleSubmit = () => {
  };
  return (
    <Box justifyContent="center" mt={[10, 0]}>
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
                  id="first_name"
                  isRequired
                  as={GridItem}
                  colSpan={[6, 6]}>
                  <FormLabel
                    htmlFor="first_name"
                    fontSize="sm"
                    fontWeight="semibold"
                    color="gray.500"
                    _dark={{
                      color: "gray.50",
                    }}>
                    First name
                  </FormLabel>
                  <Input
                    placeholder="Eg: John Doe"
                    onChange={(e) => setName(e.target.value)}
                    width="full"
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="first-name"
                    mt={1}
                    focusBorderColor="purple.600"
                    shadow="sm"
                    size="md"
                    w="full"
                    rounded="md"
                  />
                </FormControl>

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
                      placeholder={"Eg: password$123"}
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

                <FormControl
                  id="confirm_password"
                  isRequired
                  as={GridItem}
                  colSpan={[6, 6]}>
                  <FormLabel
                    htmlFor="confirm_password"
                    fontSize="sm"
                    fontWeight="semibold"
                    color="gray.500"
                    _dark={{
                      color: "gray.50",
                    }}>
                    Confirm Password{" "}
                  </FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="Eg: password$123"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                      type={show ? "text" : "password"}
                      name="confirm_password"
                      id="confirm_password"
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

                <FormControl as={GridItem} colSpan={[6, 6]}>
                  <FormLabel
                    htmlFor="picture"
                    fontSize="sm"
                    fontWeight="semibold"
                    color="gray.500"
                    _dark={{
                      color: "gray.50",
                    }}>
                    Upload your picture
                  </FormLabel>
                  <Input
                    pt={1}
                    type="file"
                    name="picture"
                    id="picture"
                    autoComplete="picture"
                    onChange={(e) => postDetails(e.target.files[0])}
                    accept="image/*"
                    mt={1}
                    focusBorderColor="purple.600"
                    shadow="sm"
                    size="md"
                    w="full"
                    rounded="md"
                  />
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
                onClick={handleSubmit}
                w={"full"}
                type="submit"
                backgroundColor={"purple"}
                color={"white"}
                _hover={{
                  color: "purple",
                  bgColor: "gray.100",
                  fontWeight: "500",
                }}
                _focus={{
                  shadow: "",
                }}
                fontWeight="xl">
                Register
              </Button>
              <Text mt={3} fontWeight={400}>
                Already have an account?{" "}
                <Link color="red.600" href="/">
                  Login
                </Link>{" "}
              </Text>{" "}
            </Box>
          </chakra.form>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};
export default Register;
