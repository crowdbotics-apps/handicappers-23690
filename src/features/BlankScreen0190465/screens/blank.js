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
    TextInput_28: ""
  }

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_5}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_5: selectedDate })
        }
      />
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_15}
        onChangeText={nextValue => this.setState({ TextInput_15: nextValue })}
      />
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_18}
        onChangeText={nextValue => this.setState({ TextInput_18: nextValue })}
      />
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_22}
        onChangeText={nextValue => this.setState({ TextInput_22: nextValue })}
      />
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_28}
        onChangeText={nextValue => this.setState({ TextInput_28: nextValue })}
      />
      <View>
        <View />
        <View />
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
  View_32: {},
  View_33: {},
  View_34: {}
})
