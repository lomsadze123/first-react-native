import { StyleSheet, SafeAreaView, View, Image, Text } from "react-native";

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.flex} accessibilityRole="header">
        <View>
          {[1, 2, 3].map((item) => (
            <Text key={item} style={styles.text}></Text>
          ))}
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/search-icon.png")}
            width={30}
            height={30}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    backgroundColor: "black",
    width: 25,
    height: 2,
    marginTop: 5,
  },
  imageContainer: {
    padding: 8,
    backgroundColor: "#FE5150",
    borderRadius: 50,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default Header;
