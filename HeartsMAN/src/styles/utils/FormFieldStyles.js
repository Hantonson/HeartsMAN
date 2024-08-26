import { StyleSheet } from "react-native";
import { activeTheme } from "../../Themes";

export default FormFieldStyles = StyleSheet.create({
    container: {
        width: "auto",
        height: "auto",
    },
    label: {
        fontSize: 18,
        lineHeight:30,
        margin: 2.5,
        color: activeTheme.primaryTextColor
    },
    input: {
        fontSize: 18,
        lineHeight:35,
        borderRadius: 18,
        paddingHorizontal: 10,
        borderWidth: 1.5,
        borderColor: activeTheme.secondaryTextColor,
        margin: 2.5,
        color: activeTheme.primaryTextColor
    }
});