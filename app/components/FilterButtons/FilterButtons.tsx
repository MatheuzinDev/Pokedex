import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export function FilterButtons() {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Todos os tipos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Menor número</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        width: "80%",
        marginTop: "10%"
    },
    button: {
        backgroundColor: "#eee",
        width: "45%",
        borderRadius: 20,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Montserrat_700Bold"
    },

    buttonText: {
        fontFamily: "Montserrat_700Bold", 
        fontSize: 14,
        color: "#333"
    }
})