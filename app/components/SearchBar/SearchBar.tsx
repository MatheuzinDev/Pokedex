import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons"

export function SearchBar() {
    return (
        <>
            <View style={styles.container}>
                <Ionicons style={styles.iconSearch} name="search" size={20} color="#aaa" />
            </View>
        </>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        padding: 8,
        width: "80%",
        height: "5%",
        borderRadius: 50,
        borderColor: "rgb(204, 204, 204)",
        borderWidth: 1,
        justifyContent: "center",
    },

    iconSearch: {
        paddingLeft: 5
    }
})