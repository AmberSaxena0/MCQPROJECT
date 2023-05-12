import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CheckBox from "@react-native-community/checkbox";

export default TermsNCondition = ({ navigation }) => {
  const [isSelected, setSelection] = useState(true);

  return (
    <SafeAreaView>
      <View style={styles.TermsContainer}>
        <Text style={styles.Terms}>Terms & Condition</Text>
      </View>
      <View style={styles.conditionContainer}>
        <Text style={styles.conditionText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          // justifyContent: "center",
          // alignItems: "center",
          marginTop: 20,
          marginLeft: "10%",
        }}
      >
        <CheckBox
          disabled={false}
          value={!isSelected}
          onValueChange={() => {
            setSelection(!isSelected);
          }}
        />
        <Text
          style={{
            fontSize: 15,
            marginTop: 5,
          }}
        >
          I agree the Terms and Conditions
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            if (isSelected == true) {
            } else {
              navigation.navigate("TestDetails");
            }
          }}
          disabled={isSelected}
        >
          <View
            style={{
              backgroundColor: isSelected ? "grey" : "#067E16",
              margin: "2%",
              marginTop: "10%",
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 35, textAlign: "center", color: "white" }}>
              Begin Exam!
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  TermsContainer: {
    margin: "5%",
    alignItems: "center",
  },
  Terms: {
    fontSize: 50,
    color: "black",
    fontWeight: 500,
  },
  conditionComponent: {
    margin: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  conditionText: {
    justifyContent: "center",
    textAlign: "justify",
    alignItems: "center",
    margin: "5%",
    fontSize: 16,
  },
});
