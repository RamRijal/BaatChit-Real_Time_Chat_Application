/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
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
import { object, string, number, date, InferType } from "yup";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [picture, setPicture] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useNavigate();

  // let FormSchema = object({
  //   name: string().required("First Name is Required."),
  //   email: string().email().required("Email is Required."),
  //   password: string()
  //     .password()
  //     .required("Password is Required.")
  //     .min(5, "Password must be minimum of 5 characters.")
  //     .matches(/(?=.*[0-9])/, "Password must contain a number."),
  //   createdOn: date().default(() => new Date()),
  // });

  const handleClick = () => {
    setShow(!show);
  };

  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please select an image.",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "BaatChit");
      data.append("cloud_name", "djdobramq");
      fetch("https://api.cloudinary.com/v1_1/djdobramq/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPicture(data.url.toString());
          console.log(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please select an image.",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
  };
  const handleSubmit = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      toast({
        title: "Password does not match",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        { name, email, password, picture },
        config
      );
      toast({
        title: "Registration Successful",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Ocurred",
        description: error.response.data.message,
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
    // THE PASSWORD IS NOT BEING HASHED IN THE DATABASE AND IS BEING SAVED AS IT IS  (as we give)
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
                    id="Email_address"
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
                      id="Password"
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
                isLoading={loading}
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
