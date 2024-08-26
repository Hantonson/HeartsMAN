import { Text, TextInput, View } from "react-native";
import FormFieldStyles from "../../styles/utils/FormFieldStyles";
import { activeTheme } from "../../Themes";

const FormField = ({label, placeholder}) => {
    return(
        <View style={FormFieldStyles.container}>
            <Text style={FormFieldStyles.label}>{label}</Text>
            <TextInput style={FormFieldStyles.input} placeholder={placeholder} placeholderTextColor={activeTheme.secondaryTextColor}/>
        </View>
    );
};

export { FormField };
