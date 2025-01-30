import { StyleSheet, TouchableOpacity, Text } from "react-native";

const MenuButton = () => {
  return (
    <TouchableOpacity
      style={styles.linkButton}
      // onPress={() => navigation.navigate("Profile")}
    >
      <Text style={styles.buttonText}>Menu</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    textAlign: "center",
    padding: 10,
    fontSize: 19,
  },
  linkButton: {
    marginTop: 46,
    marginBottom: 16,
    width: 78,
    height: 78,
    paddingVertical: 16,
    borderRadius: 50,
    marginHorizontal: "auto",
    backgroundColor: "#FE5150",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.3,
    shadowRadius: 18,
    elevation: 5,
  },
});

export default MenuButton;
