import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    DateTimePicker_5: new Date(""),
    TextInput_15: "",
    TextInput_18: "",
    TextInput_22: "",
    TextInput_28: "",
    CheckBox_235: true,
    CheckBox_243: true,
    CheckBox_235: true,
    CheckBox_243: true,
    CheckBox_235: true,
    CheckBox_243: true
  }

  render = () => (
    <View>
      <Text>Game Date</Text>
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_5}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_5: selectedDate })
        }
      />
      <Text>Course Name</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_15}
        onChangeText={nextValue => this.setState({ TextInput_15: nextValue })}
      />
      <Text>Par Score</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_18}
        onChangeText={nextValue => this.setState({ TextInput_18: nextValue })}
      />
      <Text>Scratch Score</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_22}
        onChangeText={nextValue => this.setState({ TextInput_22: nextValue })}
      />
      <Text>Slope Rating</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_28}
        onChangeText={nextValue => this.setState({ TextInput_28: nextValue })}
      />
      <Text>Select Golfers</Text>
      <View style={styles.View_181}>
        <View style={styles.View_182}>
          <View style={styles.View_184}>
            <View style={styles.View_185}>
              <CheckBox
                title="Andy"
                containerStyle={styles.CheckBox_235}
                checked={this.state.CheckBox_235}
                onPress={nextChecked =>
                  this.setState({ CheckBox_235: nextChecked })
                }
              />
            </View>
            <View style={styles.View_186}>
              <CheckBox
                title="Animal"
                containerStyle={styles.CheckBox_243}
                checked={this.state.CheckBox_243}
                onPress={nextChecked =>
                  this.setState({ CheckBox_243: nextChecked })
                }
              />
            </View>
          </View>
          <View style={styles.View_267}>
            <View style={styles.View_185}>
              <CheckBox
                title="Gaj"
                containerStyle={styles.CheckBox_235}
                checked={this.state.CheckBox_235}
                onPress={nextChecked =>
                  this.setState({ CheckBox_235: nextChecked })
                }
              />
            </View>
            <View style={styles.View_186}>
              <CheckBox
                title="Guy"
                containerStyle={styles.CheckBox_243}
                checked={this.state.CheckBox_243}
                onPress={nextChecked =>
                  this.setState({ CheckBox_243: nextChecked })
                }
              />
            </View>
          </View>
          <View style={styles.View_268}>
            <View style={styles.View_185}>
              <CheckBox
                title="Hari"
                containerStyle={styles.CheckBox_235}
                checked={this.state.CheckBox_235}
                onPress={nextChecked =>
                  this.setState({ CheckBox_235: nextChecked })
                }
              />
            </View>
            <View style={styles.View_186}>
              <CheckBox
                title="John"
                containerStyle={styles.CheckBox_243}
                checked={this.state.CheckBox_243}
                onPress={nextChecked =>
                  this.setState({ CheckBox_243: nextChecked })
                }
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_3: {},
  DateTimePicker_5: {},
  Text_7: {},
  TextInput_15: {},
  Text_11: {},
  TextInput_18: {},
  Text_20: {},
  TextInput_22: {},
  Text_24: {},
  TextInput_28: {},
  Text_177: {},
  View_181: { width: "80%", paddingTop: 50, alignSelf: "center" },
  View_182: {
    width: 100,
    height: 40,
    alignSelf: "center",
    flexDirection: "row",
    alignContent: "center"
  },
  View_184: { flexDirection: "row" },
  View_185: { width: 70 },
  CheckBox_235: { alignSelf: "flex-start" },
  View_186: { width: 70 },
  CheckBox_243: { alignSelf: "flex-start" },
  View_267: { flexDirection: "row" },
  View_185: { width: 70 },
  CheckBox_235: { alignSelf: "flex-start" },
  View_186: { width: 70 },
  CheckBox_243: { alignSelf: "flex-start" },
  View_268: { flexDirection: "row" },
  View_185: { width: 70 },
  CheckBox_235: { alignSelf: "flex-start" },
  View_186: { width: 70 },
  CheckBox_243: { alignSelf: "flex-start" }
})
