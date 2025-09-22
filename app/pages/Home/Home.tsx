import { SearchBar } from "../../components/SearchBar/SearchBar"
import { FilterButtons } from "../../components/FilterButtons/FilterButtons"
import { View, StyleSheet } from "react-native"

export function Home() {
    return (
        <>
            <View style={style.container}>
                <SearchBar></SearchBar>
                <FilterButtons></FilterButtons>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: "20%",
        backgroundColor: "#ffffffff"
    }
})