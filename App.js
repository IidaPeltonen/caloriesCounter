import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

//import { TextInput } from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button'

export default function App () {
  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ]

  const [result, setResult] = useState(0);
  const [weight, setWeight] = useState(0)
  const [intensity, setIntensity] = useState(1.3)
  const [isOpen, setIsOpen] = useState(false)
  const [gender, setGender] = useState(genders[0].value)

  const intensities = [
    { label: 'Light', value: 1.3 },
    { label: 'Usual', value: 1.5 },
    { label: 'Moderate', value: 1.7 },
    { label: 'Hard', value: 2 },
    { label: 'Very hard', value: 2.2 }
  ]

   
  function calculate(){
    const res = gender==='male'?(879+10.2*weight)*intensity:(795+7.18*weight)*intensity;
    setResult(res);
}

  return (
    <View style={styles.container}>
      <View style={styles.field}>
      <Text>Weight</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setWeight(text)}
        placeholder="in kilograms"
        keyboardType='number-pad'
      ></TextInput>
      </View>
      <View style={styles.field}>
        <Text>Intensity</Text>
        <DropDownPicker
          items={intensities}
          value={intensity}
          open={isOpen}
          setOpen={() => setIsOpen(prev => !prev)}
          setValue={i => setIntensity(i)}
        />
      </View>
      <View style={styles.field}>
        <Text>Gender</Text>
        <RadioForm
          style={styles.radio}
          buttonSize={10}
          radio_props={genders}
          initial={0}
          onPress={value => {
            setGender(value)
          }}
        />
        <Text>Calories</Text> 
        <Text>{result.toFixed(0)}</Text> 
      </View>
      <Button onPress={calculate} title='Calculate'></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  field: {
    margin: 10
  },
  input: {
    marginLeft: 10
  },
  radio: {
    marginTop: 10,
    marginBottom: 10
  }
})
