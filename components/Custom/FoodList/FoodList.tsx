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
      image: require("../../../assets/images/Hamburger.png"),
    },
    {
      id: 2,
      title: "Italian",
      image: require("../../../assets/images/Pizza.png"),
    },
    {
      id: 3,
      title: "Japanese",
      image: require("../../../assets/images/Sushi.png"),
    },
    {
      id: 4,
      title: "Sea Food",
      image: require("../../../assets/images/Scorpion.png"),
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
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
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
  imageContainer: {
    padding: 13,
    borderRadius: 3,
    boxShadow: "0px 0px 7px 0px rgba(0, 0, 0, 0.20)",
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
    gap: 12,
    marginTop: 28,
  },
  listItem: {
    flex: 4,
    alignItems: "center",
    gap: 8,
    width: 80,
    backgroundColor: "white",
  },
});

export default FoodList;
