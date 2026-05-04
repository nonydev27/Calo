import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 16,
    color: "#fff",
    marginTop: 4,
    marginBottom: 30,
  },
});
