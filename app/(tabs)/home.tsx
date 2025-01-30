import { Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    padding: 16,
  },
  text: {
    color: "white",
  },
});
