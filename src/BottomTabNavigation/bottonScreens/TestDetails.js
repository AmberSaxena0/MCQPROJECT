import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  width,
  Dimensions,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import StepIndicator from "react-native-step-indicator";
import { SafeAreaView } from "react-native-safe-area-context";
import DummyQuestions from "../../utils/DummyQuestions.json";
import database from "@react-native-firebase/database";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default TestDetails = ({ navigation }) => {
  const refContainer = useRef(null);
  const [optionSel, setOptionSel] = useState("");
  const [marks, setMarks] = useState(0);
  const [answer, setanswer] = useState("");
  const [index, setIndex] = useState(0);
  const [MyIndex, setMyIndex] = useState();
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    getDataBase();
  }, []);
  var arr = [];
  const getDataBase = async () => {
    try {
      const data = await database()
        .ref("Data")
        .once("value")
        .then((snapshot) => {
          setQuestionList(snapshot.val());
        });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(questionList.length);
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: "#fe7013",
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: "#fe7013",
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: "#fe7013",
    separatorUnFinishedColor: "#aaaaaa",
    stepIndicatorFinishedColor: "#fe7013",
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorCurrentColor: "#ffffff",
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: "#fe7013",
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "#aaaaaa",
    labelColor: "#999999",
    labelSize: 13,
    currentStepLabelColor: "#fe7013",
  };
  const [currPostition, setCurrPostition] = useState(0);

  return (
    <SafeAreaView
      style={{ height: "100%", width: "100%", backgroundColor: "#DDDDDD" }}
    >
      <View style={{ marginTop: 30 }}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currPostition}
          stepCount={7}
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={questionList}
          ref={refContainer}
          scrollEnabled={false}
          style={{}}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  backgroundColor: "#DDDDDD",
                  flex: 1,
                  marginTop: 20,
                }}
              >
                <View style={{}}>
                  <Text style={styles.QuestionStyle}>{item.Question}</Text>
                </View>

                {item.Options.map((items, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => {
                        setOptionSel(items);
                        setanswer(answer);
                        setMyIndex(i);
                      }}
                      style={[
                        styles.OptionContainer,
                        {
                          backgroundColor: MyIndex == i ? "#067E16" : "white",
                          alignItems: "center",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.optionstyle,
                          { color: MyIndex == i ? "white" : "black" },
                        ]}
                      >
                        {items}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (currPostition === 0) {
              return;
            }
            setCurrPostition(currPostition - 1);
            setIndex(index - 1);

            refContainer.current.scrollToIndex({ index: index - 1 });
          }}
          style={{
            flex: 1,
            borderRadius: 20,
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 40,
                color: "black",
                marginVertical: 20,
                paddingVertical: 10,
              }}
            >
              Previous
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setMyIndex();
            if (currPostition === DummyQuestions.length - 1) {
              navigation.push("AppBottom");
              setCurrPostition(0);
              setIndex(0);
              setMyIndex();
              setanswer("");
              setOptionSel("");
              alert(
                `Congrats your Test has been Submitted Successfully!! Your marks are ${marks}`
              );
            } else {
              console.log(optionSel == answer);
              if (optionSel == answer) {
                setMarks(marks + 10);
                // console.log(marks);
              }
              setCurrPostition(currPostition + 1);
              setIndex(index + 1);
              refContainer.current.scrollToIndex({ index: index + 1 });
            }
          }}
          disabled={optionSel ? false : true}
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 20,
          }}
        >
          <View style={{}}>
            <Text
              style={{
                fontSize: 40,
                color: "black",
                marginVertical: 20,
                paddingVertical: 10,
              }}
            >
              {currPostition === DummyQuestions.length - 1 ? "Finish" : "Next"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  QuestionStyle: {
    fontSize: 20,
    color: "black",
    fontWeight: 500,
    width: windowWidth,
    alignItems: "center",
    marginVertical: 30,
    paddingHorizontal: 10,
  },
  OptionContainer: {
    marginTop: 20,
    borderWidth: 0.5,
    borderRadius: 20,
    backgroundColor: "blue",
    width: windowWidth,
  },
  optionstyle: {
    fontSize: 17,
    margin: 10,
  },
});
