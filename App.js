import { StyleSheet, SafeAreaView } from "react-native";
import Header from "./components/Header/Header";
import FoodList from "./components/FoodList/FoodList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <FoodList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 16,
  },
});
