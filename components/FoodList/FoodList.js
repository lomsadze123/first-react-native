import {
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  Image,
  View,
} from "react-native";

const FoodList = () => {
  const data = [
    {
      id: 1,
      title: "Fast Food",
      image: require("../../assets/Hamburger.png"),
    },
    {
      id: 2,
      title: "Italian",
      image: require("../../assets/Pizza.png"),
    },
    {
      id: 3,
      title: "Japanese",
      image: require("../../assets/Sushi.png"),
    },
    {
      id: 4,
      title: "Sea Food",
      image: require("../../assets/Scorpion.png"),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.welcomeText}>Hi Alex</Text>
        <Text style={styles.text}>Find your Delicious Food</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image
              source={item.image}
              style={item.title === "Sea Food" ? styles.image : ""}
            />
            <Text>{item.title}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 58,
  },
  welcomeText: {
    fontSize: 18,
    color: "#EB5757",
  },
  image: {
    width: 33,
    height: 33,
  },
  text: {
    fontSize: 21,
    color: "#4F4F4F",
    fontWeight: "semibold",
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    marginTop: 28,
  },
  listItem: {
    flex: 4,
    alignItems: "center",
    gap: 3,
    backgroundColor: "white",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.20)",
  },
});

export default FoodList;
