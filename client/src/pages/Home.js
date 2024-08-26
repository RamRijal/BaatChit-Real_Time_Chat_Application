import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";

const Home = () => {
  return (
    <Container maxW="xl" centerContent>
     
      <Box my={"50px"} p={3} borderRadius={12} backgroundColor={"white"} shadow="md" w="100%" justifyContent={"center"}>
        <Box
          display="flex"
          justifyContent="center"
          bg={"purple"}
          p={4}
          w="100%"
          m="0 0 15px 0"
          borderRadius="lg"
          borderWidth="1px">
          <Text color="white" fontSize="3xl" fontWeight="500">
            BaatChit
          </Text>
        </Box>
        <Box>
          <Tabs variant="soft-rounded" colorScheme="purple" isFitted>
            <TabList px="10px">
              <Tab>Login</Tab>
              <Tab>Register</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Register />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
