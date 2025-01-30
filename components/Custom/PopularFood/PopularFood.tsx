import {
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  Image,
  View,
} from "react-native";

const PopularFood = () => {
  const data = [
    {
      id: 1,
      title: "Melting Cheese",
      calories: 44,
      image: require("../../../assets/images/melting.png"),
      price: 9.74,
    },
    {
      id: 2,
      title: "Pizza Capricciosa",
      calories: 54,
      image: require("../../../assets/images/capricciosa.png"),
      price: 12.55,
    },
  ];

  return (
    <SafeAreaView>
      <Text style={styles.title}>Popular</Text>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.textAlign}>{item.title}</Text>
            <Text style={[styles.textAlign, styles.calories]}>
              {item.calories} calories
            </Text>
            <Image
              style={index === 1 ? styles.image : ""}
              source={item.image}
            />
            <Text style={[styles.textAlign, styles.price]}>$ {item.price}</Text>
            <View style={styles.plusIcon}>
              <Image source={require("../../../assets/images/Plus.png")} />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 24,
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#4F4F4F",
    marginTop: 80,
    marginBottom: 24,
  },
  card: {
    padding: 12,
    borderRadius: 8,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.20)",
  },
  textAlign: {
    textAlign: "center",
  },
  calories: {
    color: "#EB5757",
    marginVertical: 12,
  },
  price: {
    color: "#4F4F4F",
    marginVertical: 16,
  },
  plusIcon: {
    backgroundColor: "#FE5150",
    marginHorizontal: "auto",
    padding: 4,
    borderRadius: 2,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  image: {
    marginBottom: 9,
  },
});

export default PopularFood;
