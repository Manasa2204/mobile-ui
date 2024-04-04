import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyledText, StyledView } from "../UI/Core";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <StyledView className="flex-1 justify-center items-center bg-white">
      <StatusBar style="auto" />
      <StyledText
        onPress={() => navigation.navigate("Onboarding")}
        className="text-center mt-3 text-2xl font-light text-orange-300"
      >
        Login
      </StyledText>
      {/* Additional components goes here */}
    </StyledView>
  );
};

export default Home;
