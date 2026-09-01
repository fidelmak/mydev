import { StyleSheet, Text, TextInput, View } from "react-native";

const AppTextInput = ({
  value,
  onChnageText,
  placeHolder,
  keyBoardType,
  cursorColor,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChnageText}
        placeholder={placeHolder}
        keyboardType={keyBoardType}
        cursorColor={cursorColor}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEEFEE",
    borderRadius: 25,
    width: "100%",
    height: 50,
    justifyContent: "center",

    paddingHorizontal: 12,
    marginBottom: 12,
  },
});
