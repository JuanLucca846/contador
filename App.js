import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


/*export default function App() {
  const [juan, setOutputText] = useState('Texto Inicial')
  return (
    <View style={styles.container}>
      <Text>{juan}</Text>
    <Button title="Alterar texto" onPress={() => {setOutputText("Texto 2")}}/>
      <StatusBar style="auto" />
    </View>
  );
}*/

export default class App extends React.Component{
  constructor(props){
    super(props);
  this.state = {
    contador: 0
  }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>{this.state.contador}</Text>
        <Button
        title="Alterar Numero"
        onPress={() => {this.setState({contador: this.state.contador + 1})}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


