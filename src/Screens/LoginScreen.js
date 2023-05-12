import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import OTPTextView from "react-native-otp-textinput";
import React, { useState } from "react";
import { CountryPicker } from "react-native-country-codes-picker";
import Icon from "react-native-vector-icons/MaterialIcons";
import auth from "@react-native-firebase/auth";

export default LoginScreen = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpdata, setotpdata] = useState("");
  const [confirmData, setConfirmData] = useState("");

  const sendOTP = async () => {
    try {
      const mobile = countryCode + phoneNumber;
      const reponse = await auth().signInWithPhoneNumber(mobile);
      setConfirmData(reponse);
    } catch (error) {
      console.log(error);
    }
  };
  const verifyOTP = async () => {
    try {
      const respo = await confirmData.confirm(otpdata);
      console.log(respo);
      if (respo) {
        navigation.navigate("AppBottom");
      } else {
        alert("Invalid Credenials");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageComponent}>
          <Image
            source={{
              uri: "https://mir-s3-cdn-cf.behance.net/projects/404/87492e81218631.Y3JvcCw4MDgsNjMyLDAsMA.png",
            }}
            style={{
              height: 300,
              width: 300,
              alignSelf: "center",
            }}
          />
          <Text style={{ fontFamily: "OpenSans-SemiBoldItalic" }}>amber deep saxena</Text>
        </View>
      </View>
      <View style={styles.textComponent}>
        <Text style={styles.headingText}>SignUp on MCQ Project </Text>
      </View>
      <View style={styles.textComponent}>
        <Text style={styles.messageComponent}>
          Please enter your Country & Phone Number
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.countryCode}>
          <Text style={{ fontSize: 17, color: "black" }}>{countryCode}</Text>
          <TouchableOpacity onPress={() => setShow(true)} style={{}}>
            <Icon name="keyboard-arrow-down" size={35} color="#000" />
          </TouchableOpacity>
        </View>
        <Modal visible={show} transparent={true}>
          <CountryPicker
            onBackdropPress={() => setShow(false)}
            show={show}
            style={{
              modal: {
                flex: 1,
                margin: "20%",
                borderRadius: 20,
                backgroundColor: "white",
                alignSelf: "center",
              },
            }}
            pickerButtonOnPress={(item) => {
              setCountryCode(item.dial_code);
              setShow(false);
            }}
          />
        </Modal>

        <View style={styles.phoneComponent}>
          <TextInput
            style={styles.phoneInputFeild}
            placeholder="Enter Phone Number"
            keyboardType="numeric"
            onChangeText={(value) => setPhoneNumber(value)}
          />
        </View>
      </View>
      <View style={styles.phoneInputFeild}>
        <OTPTextView
          style={styles.otpInputFeild}
          handleTextChange={(otp) => setotpdata(otp)}
          inputCount={6}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.pressableContainer} onPress={sendOTP}>
          <Text style={styles.pressableButton}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pressableContainer} onPress={verifyOTP}>
          <Text style={styles.pressableButton}>Verify</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 35,
    textAlign: "center",
    marginBottom: "5%",
    color: "black",
  },
  messageComponent: {
    fontSize: 17,
    textAlign: "center",
    marginBottom: "10%",
    color: "black",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
  },

  countryCode: {
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: "#e8f6e9",
    marginLeft: "2%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 10,
  },

  phoneComponent: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: "2%",
    borderRadius: 10,
    backgroundColor: "#e8f6e9",
  },
  phoneInputFeild: {
    fontSize: 20,
  },
  pressableContainer: {
    marginTop: " 10%",
    // marginHorizontal: "17%",
  },
  pressableButton: {
    fontSize: 35,
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: "35%",
    paddingVertical: 5,
    backgroundColor: "#28cb72",
    color: "#000",
    borderRadius: 10,
  },
  otpInputFeild: {
    fontSize: 30,
    textAlign: "center",
    margin: 5,
    paddingHorizontal: 12,
    borderBottomWidth: 3,
  },
});
