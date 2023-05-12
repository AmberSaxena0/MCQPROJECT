import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const ProfileTab = () => {
  const [name, setname] = useState("");
  return (
    <SafeAreaView style={{ height: "100%", width: "100%" }}>
      <View style={styles.profileSection}>
        <View>
          <Image
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
            }}
            source={{
              uri: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg",
            }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 40, textAlign: "center", color: "white" }}>
            Name
          </Text>
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              color: "white",
              paddingHorizontal: 50,
              marginBottom: 20,
            }}
          >
            Designation
          </Text>
        </View>
      </View>
      <View style={styles.menuSection}>
        <View>
          <Text
            style={{
              fontSize: 30,
              color: "black",
              textAlign: "center",
              marginVertical: 20,
            }}
          >
            Account Info
          </Text>
        </View>
        <ScrollView>
          <View style={styles.menuComponent}>
            <View style={{ padding: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 24, color: "black", fontWeight: 700 }}>
                  Email Address
                </Text>
              </View>
              <View style={{ marginVertical: 15, marginLeft: "5%" }}>
                <Text style={{ fontSize: 20, fontWeight: 500, color: "black" }}>
                  abc@xyz.com
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.menuComponent}>
            <View style={{ padding: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 24, color: "black", fontWeight: 700 }}>
                  Phone Number
                </Text>
              </View>
              <View style={{ marginVertical: 15, marginLeft: "5%" }}>
                <Text style={{ fontSize: 20, fontWeight: 500, color: "black" }}>
                  +91-1234567890
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.menuComponent}>
            <View style={{ padding: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 24, color: "black", fontWeight: 700 }}>
                  Gender
                </Text>
              </View>
              <View style={{ marginVertical: 15, marginLeft: "5%" }}>
                <Text style={{ fontSize: 20, fontWeight: 500, color: "black" }}>
                  Male
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileTab;
const styles = StyleSheet.create({
  profileSection: {
    flex: 0.7,
    backgroundColor: "#fd5f00",
    justifyContent: "center",
    alignItems: "center",
  },
  menuSection: {
    flex: 1,
  },
  menuComponent: {
    flex: 1,
    marginLeft: 25,
  },

  nameComponent: {
    flex: 1,
    flexDirection: "row",
  },
  DataComponent: {
    position: "absolute",
    marginTop: "17%",
    marginLeft: "16%",
  },
  valComponent: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 5,
    paddingBottom: 20,
  },
});
