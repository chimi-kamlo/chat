import React, { useState, useReducer } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';
import { sendMessage, receiveMessage } from './actions';
import reducer from './reducers';
import WiFi from 'react-native-wifi-reborn';

const App: React.FC = () => {

  const [message, setMessage] = useState<string>('');
  const [receivedMessage, setReceivedMessage] = useState<string>('');

  const handleSendMessage = () => {
    sendMessage('nom du réseau WiFi', message)
    .then(() => {
      console.log('Message envoyé avec succès !');
      dispatch({ type: 'ADD_MESSAGE', payload: message }); // <- Dispatch l'action
    })
    .catch((error) => console.log(error));
  };

  const handleReceiveMessage = async () => {
    try {
      const data = await receiveMessage('nom du réseau WiFi');
      setReceivedMessage(data);
      console.log('Message reçu : ', data);
      dispatch({ type: 'ADD_MESSAGE', payload: data }); // <- Dispatch l'action
    } catch (error) {
      console.log(error);
    }
  };

  const initialState = {
    messages: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const ssid = 'nom du réseau WiFi';
  const password = 'mot de passe';

  const connectToNetwork = async () => {
    try {
      await WiFi.loadWifiList();
      const wifiList = await WiFi.getScanResults();
      const network = wifiList.find(n => n.SSID === ssid);
      if (network) {
        await WiFi.connectToProtectedSSID(ssid, password);
        setConnected(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async () => {
    try {
      await WiFi.sendDataToSSID(ssid, message);
      console.log('Message envoyé avec succès !');
    } catch (error) {
      console.log(error);
    }
  };

  const receiveMessage = async () => {
    try {
      const data = await WiFi.receivedData();
      console.log('Message reçu : ', data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Chat App</Text>
      <View>
        <Text>Envoyer un message:</Text>
        <TextInput value={message} onChangeText={setMessage} />
        <Button title="Envoyer" onPress={handleSendMessage} />
      </View>
      <View>
        <Text>Recevoir un message:</Text>
        <Button title="Recevoir" onPress={handleReceiveMessage} />
        {receivedMessage && <Text>Message reçu: {receivedMessage}</Text>}
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>

        </Text>
        <Button title="Se connecter au réseau WiFi" onPress={connectToNetwork} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;