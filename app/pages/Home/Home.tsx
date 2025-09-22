import { SearchBar } from "../../components/SearchBar/SearchBar"
import { View, StyleSheet } from "react-native"

export function Home() {
    return (
        <>
            <View style={style.container}>
                <SearchBar></SearchBar>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: "5%"
    }
})