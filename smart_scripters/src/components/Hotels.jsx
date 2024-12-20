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
import "./hotels.css";
export const Hotels = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // console.log(theme);

  const hotels = [
    {
      name: "The Grand Hotel",
      city: "New York City",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/5526d7e1e4b062f717b70af5/1555037372100-07KK33ZKZZ7IY34UDED0/Level-9-Terrace-1000px.jpg?format=2500w",
      description: "Luxurious hotel located in the heart of the city.",
      price: "$200/night",
      facilities: ["Free Wi-Fi", "Swimming Pool", "Spa", "Gym"],
    },
    {
      name: "Cozy Inn",
      city: "Los Angeles",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/5526d7e1e4b062f717b70af5/1555037356940-0KVTL6F3TRC38CTS9ZM0/Level-9-Firepits-1000px.jpg?format=2500w",
      description: "A charming place for a relaxing stay.",
      price: "$100/night",
      facilities: ["Complimentary Breakfast", "Parking", "Pet Friendly"],
    },
    {
      name: "Seaside Resort",
      city: "Miami",
      imageUrl:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg1NzF8MHwxfGFsbHwxfHx8fHx8fHwxNjMwNDIzNzA5&ixlib=rb-1.2.1&q=80&w=1080",
      description: "Relax by the beach with stunning ocean views.",
      price: "$250/night",
      facilities: ["Beach Access", "Water Sports", "Restaurant"],
    },
    {
      name: "Mountain Lodge",
      city: "Aspen",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/5526d7e1e4b062f717b70af5/1428609579587-4IAK6HO2UZJ68IAUE0T6/Grand_Ballroom_Prefunction_Space_v2.jpg?format=2500w",
      description: "Cozy lodge with beautiful mountain scenery.",
      price: "$180/night",
      facilities: ["Ski Rental", "Spa", "Restaurant"],
    },
    {
      name: "City Center Suites",
      city: "Chicago",
      imageUrl:
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg1NzF8MHwxfGFsbHwxfHx8fHx8fHwxNjMwNDIzNzA5&ixlib=rb-1.2.1&q=80&w=1080",
      description: "Modern suites in the vibrant city center.",
      price: "$150/night",
      facilities: ["Conference Room", "Free Wi-Fi", "Fitness Center"],
    },
    {
      name: "Historic Palace Hotel",
      city: "London",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/5526d7e1e4b062f717b70af5/1542827518471-0QV769FEIN2EWNPE9NMQ/King-Extra-2-v2-1000px.jpg?format=2500w",
      description: "Stay in a beautifully restored historic building.",
      price: "$220/night",
      facilities: ["Art Gallery", "Bar", "Concierge Service"],
    },
    {
      name: "Charming Bed & Breakfast",
      city: "San Francisco",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVVm2K2rXNNACYXvWFSDt1qOPmaJIiCc606A&s",
      description: "Warm hospitality and homemade breakfast.",
      price: "$90/night",
      facilities: ["Free Parking", "Homemade Breakfast", "Garden"],
    },
    {
      name: "Hotel Taj",
      city: "Mumbai",
      imageUrl:
        "https://akm-img-a-in.tosshub.com/lingo/images/story/media_bank/202312/657bdd60d1fdd-taj-mumbai-150015589-16x9.png",
      description:
        "Stylish accommodations with personalized service with 5⭐ functionalities.",
      price: "$300/night",
      facilities: ["Luxury Spa", "Multiple Restaurants", "Infinity Pool"],
    },
    {
      name: "Family Fun Resort",
      city: "Orlando",
      imageUrl:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/73/0d/48/lobby-area.jpg",
      description: "Perfect for families with kids-friendly amenities.",
      price: "$150/night",
      facilities: ["Kids Club", "Water Park", "Family Dining"],
    },
    {
      name: "Desert Oasis Hotel",
      city: "Las Vegas",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHE-YyVg1Nk182oBdbETxA-7gfcdgTtPqbyw&s",
      description: "A serene escape in the desert with luxury amenities.",
      price: "$275/night",
      facilities: ["Casino", "Spa", "Fine Dining"],
    },
    {
      name: "Artistic Hostel",
      city: "Toronto",
      imageUrl:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/532921587.jpg?k=ba59c2bcf1b5d88bd170c507894e109dafbca50ba28817af880c0eec269d88ed&o=&hp=1",
      description: "A vibrant place for travelers and creatives.",
      price: "$40/night",
      facilities: ["Free Wi-Fi", "Common Room", "Art Exhibitions"],
    },
    {
      name: "Himalayan Retreat",
      city: "Manali",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/34/f6/28/snow-peak-retreat.jpg?w=1200&h=-1&s=1",
      description: "Nestled in the mountains, perfect for a nature getaway.",
      price: "$120/night",
      facilities: ["Spa Services", "Hiking Trails", "Bonfire Nights"],
    },
    {
      name: "Snow View Hotel",
      city: "Shimla",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/41/f2/3f/caption.jpg?w=1200&h=-1&s=1",
      description: "Experience the scenic view of the snow-clad mountains.",
      price: "$150/night",
      facilities: ["Free Breakfast", "Skiing Gear Rental", "Scenic Views"],
    },
    {
      name: "Lakeview Hotel",
      city: "Nainital",
      imageUrl:
        "https://media.easemytrip.com/media/hotel/shl-23012041491390/common/commonahlgdu.jpg",
      description: "Stunning views of the Naini Lake with cozy rooms.",
      price: "$110/night",
      facilities: ["Boat Rentals", "Garden", "Local Cuisine"],
    },
    {
      name: "Kullu Valley Resort",
      city: "Kullu",
      imageUrl:
        "https://daahy6akrtcj2.cloudfront.net/hotelsmanali.co.in/logos/snow_flakes_resort.jpg",
      description: "A serene retreat surrounded by lush greenery.",
      price: "$140/night",
      facilities: ["Hiking", "Nature Walks", "Local Tours"],
    },
    {
      name: "Himalayan Heights Hotel",
      city: "Kullu",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPQhSf_aPyXD_Ns5KpN2I8W18YxxKXTMoXg&s",
      description: "Luxurious stay with breathtaking views of the Himalayas.",
      price: "$180/night",
      facilities: ["Fine Dining", "Yoga Classes", "Adventure Sports"],
    },
    {
      name: "Royal Mountain Resort",
      city: "Kullu",
      imageUrl:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/541857366.jpg?k=939db25356dcf2162e7b71be907cd4489ab28f1f79deb6703c2d2030f31a4842&o=&hp=1",
      description: "Modern amenities in a picturesque mountain setting.",
      price: "$160/night",
      facilities: ["Restaurant", "Adventure Activities", "Free Wi-Fi"],
    },
    {
      name: "Peace Cottage",
      city: "Nainital",
      imageUrl:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/487321756.jpg?k=131e4de94ead8b00ada72c86adb006d9649399cca26ed3ce7b5d57c69cf0e9ab&o=&hp=1",
      description: "A tranquil spot for relaxation and rejuvenation.",
      price: "$90/night",
      facilities: ["Reading Room", "Hiking Trails", "Lake Access"],
    },
    {
      name: "Maple Leaf Hotel",
      city: "Shimla",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVUEl8xG0wBnDCSHD3Lejfgi9PeW9Uw0UuIK8Lz32NvkdmV7EZ0fYwYGaaDlzyfGAGN4Y&usqp=CAU",
      description:
        "Charming hotel with modern facilities and a historic touch.",
      price: "$130/night",
      facilities: ["Restaurant", "Parking", "Free Wi-Fi"],
    },
    {
      name: "Hillside Cottage",
      city: "Manali",
      imageUrl:
        "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/202305181936597731-2249-d60ae62440ca11eeabaa0a58a9feac02.jpg",
      description: "Cozy cottages surrounded by pine trees and tranquility.",
      price: "$140/night",
      facilities: ["Free Breakfast", "Nature Trails", "Adventure Sports"],
    },
  ];

  return (
    <>
      <Navbar />
    <div style={{marginTop:"90px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      {hotels.map((hotel, index) => (
        <Card
          bg={theme === "dark" ? "gray.800" : "#dafbf8"}
          key={index}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          mb={4}
          width={"95%"}
          borderRadius="md"
          boxShadow="lg"
          transition="all 0.3s ease"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "xl",
          }}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={hotel.imageUrl}
            alt={hotel.name}
            borderTopRadius={{ base: "md", sm: "0" }}
          />

          <Stack spacing={3} p={4}>
            <CardBody>
              <Heading
                size="md"
                color={theme === "dark" ? "white" : "gray.800"}
              >
                {hotel.name}
              </Heading>
              <Text py="2" color={theme === "dark" ? "gray.400" : "gray.600"}>
                {hotel.description}
              </Text>
              <Text fontWeight="bold" fontSize="lg" color="teal.500">
                {hotel.price}
              </Text>
              <Text color={theme === "dark" ? "gray.400" : "gray.600"}>
                City: {hotel.city}
              </Text>
              <Text color={theme === "dark" ? "gray.400" : "gray.600"}>
                Facilities: {hotel.facilities.join(", ")}
              </Text>
            </CardBody>

            <CardFooter>
              <Button
                variant="solid"
                colorScheme="teal"
                width="full"
                _hover={{ bg: "teal.600" }}
              >
                Book Now
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </div>

      <Footer />
    </>
  );
};
