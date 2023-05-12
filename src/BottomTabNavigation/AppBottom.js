import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileTab from "./bottonScreens/ProfileTab";
import ScoreTab from "./bottonScreens/ScoreTab";
import TestTab from "./bottonScreens/TestTab";

const Tab = createBottomTabNavigator();

export default AppBottom = () => {
  return (
    <Tab.Navigator
      initialRouteName="Test"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "relative",
          height: "13%",
          backgroundColor: "#172964",
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../../assets/img/profile.png")}
                resizeMode="center"
                style={{
                  width: focused ? 60 : 50,
                  height: focused ? 60 : 50,
                  tintColor: focused ? "#fd5f00" : "white",
                  alignSelf: "center",
                  borderWidth: 3,
                  borderColor: focused ? "#fd5f00" : "white",
                  borderRadius: focused ? 20 : 0,
                }}
              />
              <Text style={styles.profileStyle}>Profile</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Test"
        component={TestTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../../assets/img/test.png")}
                resizeMode="center"
                style={{
                  width: focused ? 60 : 50,
                  height: focused ? 60 : 50,
                  tintColor: focused ? "#fd5f00" : "white",
                  marginLeft: 12,
                  borderWidth: 3,
                  borderColor: focused ? "#fd5f00" : "white",
                  borderRadius: focused ? 20 : 0,
                }}
              />
              <Text style={styles.testStyle}>Test</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Score"
        white
        component={ScoreTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../../assets/img/score.png")}
                resizeMode="center"
                style={{
                  width: focused ? 60 : 50,
                  height: focused ? 60 : 50,
                  tintColor: focused ? "#fd5f00" : "white",
                  alignSelf: "center",
                  borderWidth: 3,
                  borderColor: focused ? "#fd5f00" : "white",
                  borderRadius: focused ? 20 : 0,
                }}
              />
              <Text style={styles.scoreStyle}>Score</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  profileStyle: {
    fontSize: 15,
    color: "white",
    alignSelf: "center",
    fontWeight: 500,
    marginTop: 7,
  },
  testStyle: {
    fontSize: 15,
    color: "white",
    alignSelf: "center",
    fontWeight: 500,
    marginTop: 7,
  },
  scoreStyle: {
    fontSize: 15,
    color: "white",
    alignSelf: "center",
    fontWeight: 500,
    marginTop: 7,
  },
});
