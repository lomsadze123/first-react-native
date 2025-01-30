import FoodList from "@/components/Custom/FoodList/FoodList";
import Header from "@/components/Custom/Header/Header";
import MenuButton from "@/components/Custom/MenuButton/MenuButton";
import PopularFood from "@/components/Custom/PopularFood/PopularFood";
import { ScrollView, StyleSheet } from "react-native";

const App = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Header />

      <FoodList />

      <PopularFood />

      <MenuButton />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
  contentContainer: {
    paddingBottom: 20,
    padding: 16,
    backgroundColor: "white",
  },
});
