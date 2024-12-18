import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import "../themeCss/light.css";
import "../themeCss/dark.css";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const Hotels = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // console.log(theme);

  const hotels = [
    {
      name: "The Grand Hotel",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/5526d7e1e4b062f717b70af5/1555037372100-07KK33ZKZZ7IY34UDED0/Level-9-Terrace-1000px.jpg?format=2500w",
      description: "Luxurious hotel located in the heart of the city.",
      price: "$200/night",
    },
    {
      name: "Cozy Inn",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/5526d7e1e4b062f717b70af5/1555037356940-0KVTL6F3TRC38CTS9ZM0/Level-9-Firepits-1000px.jpg?format=2500w",
      description: "A charming place for a relaxing stay.",
      price: "$100/night",
    },
    {
      name: "Seaside Resort",
      imageUrl:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg1NzF8MHwxfGFsbHwxfHx8fHx8fHwxNjMwNDIzNzA5&ixlib=rb-1.2.1&q=80&w=1080",
      description: "Relax by the beach with stunning ocean views.",
      price: "$250/night",
    },
    {
      name: "Mountain Lodge",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/5526d7e1e4b062f717b70af5/1428609579587-4IAK6HO2UZJ68IAUE0T6/Grand_Ballroom_Prefunction_Space_v2.jpg?format=2500w",
      description: "Cozy lodge with beautiful mountain scenery.",
      price: "$180/night",
    },
    {
      name: "City Center Suites",
      imageUrl:
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg1NzF8MHwxfGFsbHwxfHx8fHx8fHwxNjMwNDIzNzA5&ixlib=rb-1.2.1&q=80&w=1080",
      description: "Modern suites in the vibrant city center.",
      price: "$150/night",
    },
    {
      name: "Historic Palace Hotel",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/5526d7e1e4b062f717b70af5/1542827518471-0QV769FEIN2EWNPE9NMQ/King-Extra-2-v2-1000px.jpg?format=2500w",
      description: "Stay in a beautifully restored historic building.",
      price: "$220/night",
    },
    {
      name: "Charming Bed & Breakfast",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVVm2K2rXNNACYXvWFSDt1qOPmaJIiCc606A&s",
      description: "Warm hospitality and homemade breakfast.",
      price: "$90/night",
    },
    {
      name: "Hotel Taj",
      imageUrl:
        "https://akm-img-a-in.tosshub.com/lingo/images/story/media_bank/202312/657bdd60d1fdd-taj-mumbai-150015589-16x9.png",
      description:
        "Stylish accommodations with personalized service with 5⭐ functionalities.",
      price: "$300/night",
    },
    {
      name: "Family Fun Resort",
      imageUrl:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/73/0d/48/lobby-area.jpg",
      description: "Perfect for families with kids-friendly amenities.",
      price: "$150/night",
    },
    {
      name: "Desert Oasis Hotel",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHE-YyVg1Nk182oBdbETxA-7gfcdgTtPqbyw&s",
      description: "A serene escape in the desert with luxury amenities.",
      price: "$275/night",
    },
    {
      name: "Artistic Hostel",
      imageUrl:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/532921587.jpg?k=ba59c2bcf1b5d88bd170c507894e109dafbca50ba28817af880c0eec269d88ed&o=&hp=1",
      description: "A vibrant place for travelers and creatives.",
      price: "$40/night",
    },
  ];

  return (
    <>
      <Navbar />

      {hotels.map((hotel, index) => (
        <Card
          bg={theme === "dark" ? "dimgray" : "antiquewhite"}
          key={index}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          mb={4}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={hotel.imageUrl}
            alt={hotel.name}
          />

          <Stack>
            <CardBody>
              <Heading size="md">{hotel.name}</Heading>
              <Text py="2">{hotel.description}</Text>
              <Text fontWeight="bold">{hotel.price}</Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                Book Now
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}

      <Footer />
    </>
  );
};
