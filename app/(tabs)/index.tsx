import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>Login</Link>
      <Link href={"/animedetails/spyfamily12"}>Anime Details</Link>
    </View>
  );
};

export default Home;
