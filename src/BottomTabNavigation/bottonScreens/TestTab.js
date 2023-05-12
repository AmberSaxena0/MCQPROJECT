import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useState } from "react";
import DummyData from "../../utils/DummyData.json";
const TestTab = ({ navigation }) => {
  const [textSel, setTextSel] = useState(0);
  const renderItems = (data) => {
    const { subjectName } = data.item;

    return (
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Terms");
            setTextSel(data.index);
          }}
        >
          <View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                margin: "4%",
                borderRadius: 20,

                backgroundColor: textSel == data.index ? "#80d08a" : "#ffe7c6",
              }}
            >
              <View style={styles.subjectNameStyle}>
                <Text style={styles.subjectStyle}>{subjectName}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#172964" }}>
      <View
        style={{
          flexDirection: "row-reverse",
          alignContent: "flex-end",
          alignItems: "center",
        }}
      >
        <View style={{}}>
          <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
            <Image
              source={require("../../../assets/img/Chat-Support.png")}
              style={{
                tintColor: "white",
                alignSelf: "flex-end",
                height: 65,
                width: 65,
                marginVertical: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              color: "white",
              marginLeft: 10,
            }}
          >
            MCQ Test
          </Text>
        </View>
      </View>
      <View style={{ height: "88%" }}>
        <FlatList
          data={DummyData}
          renderItem={(item, index) => renderItems(item, index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default TestTab;

const styles = StyleSheet.create({
  subjectNameStyle: {
    flex: 1,
    flexDirection: "row",
    padding: 25,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  subjectStyle: {
    fontSize: 22,
    color: "black",
  },
  testIdStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  testDetailsStyles: {
    fontSize: 25,
    color: "black",
    fontWeight: 900,
    borderRadius: 20,
  },
});
