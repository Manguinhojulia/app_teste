import * as React from 'react';
import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Maria Júlia Manguinho</Text>
      <Image source={require('./assets/xulia.jpeg')}
        style={{
          width: 200,
          height: 200,
        }} />
      <Pressable
        onPress={() => navigation.navigate('Cardapio')}
        style={{
          backgroundColor: 'grey',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text>Currículo</Text>
      </Pressable>
      
    </View>
  );
}

function Cardapio() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> <Text style={{fontWeight: "bold"}}>Nome:</Text> Maria Júlia Manguinho {'\n'}
      <Text style={{fontWeight: "bold"}}>Curso:</Text> Análise e desenvolvimento de sistemas{'\n'}
      <Text style={{fontWeight: "bold"}}>Perfil:</Text> <Text style= {styles.headline}>Sou formada na área da saúde em Ed. Física. Já trabalhei em vários âmbitos, seja na pequeina, gestão e trabalhos sociais. Hoje, desafio-me na área da tecnologia mas continuo prezando qualidade em tudo que faço. Sou produtiva, criativa e em constante movimento de aprendizdo.</Text>
      </Text>
    </View>
  );
}

function Sugestoes() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Deixe Sua Sugestão!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="Sugestoes" component={Sugestoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headline: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 14,
    width: 100,
  }
  },
  
  );
export default App;
