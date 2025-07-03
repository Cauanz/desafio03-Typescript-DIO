import { Box, Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { AppContext } from "../components/AppContext";
import { api } from "../api";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

export default function UserPage() {
  const [userData, setUserData] = useState<null | UserData>();
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AppContext);

  !isLoggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  if (userData && id !== userData.id) {
    navigate("/");
  }

  return (
    <>
      <Center>
          {userData === undefined || userData === null ? (
            <Center>
              <Spinner size="xl" color="white" />
            </Center>
          ) : (
            <>
              <Box
                backgroundColor="white"
                marginTop="30px"
                minWidth="300px"
                minHeight="120px"
                padding={8}
                borderRadius="25px"
              >
                <Text fontSize="xl">Name: {userData?.name}</Text>
                <Text fontSize="xl">Email: {userData.email}</Text>
              </Box>
            </>
          )}
      </Center>
    </>
  );
}
