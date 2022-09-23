//Classes
// import React, {Component} from "react";
// import {View, Text, StatusBar} from 'react-native';


// class App extends Component{
//   render(){
//     return(
//       <View>
//         <StatusBar></StatusBar>
//         <Text>Olá ifal e mundo</Text>
//       </View>
//     );
//   }
// }
// function App(){
//   return(
//     <View>
//       <statusbar> </statusbar>
//       <Text>Olá mundo!</Text>
//       <Text>Meu primeiro APP!!!</Text>
//     </View>
//   );
// }

// export default App;

//-----------------------------------------------



//imagens e texto

import React from "react";

import {View, Text, Image} from 'react-native';

export default function App(){
  let nome = 'professor'

  return(
    <View>
      <Text>IFAL 2022</Text>
      <Text style={{color:'#ff0000', fontSize: 25, margin: 60}}>Danilo da Silva Alves</Text>
      <Image source={{uri:'https://www2.ifal.edu.br/o-ifal/comunicacao/arquivos/logos/copy_of_IFALvertical.png'}}
      style={{width:150, height:150}}
      />

    </View>
  )
}