import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.sabz}>
        Lorem1
      </View>
      <View style={styles.teen}>
        <View style={styles.lasttwo}>
          <View style={styles.gulaabi}>
            <View style={styles.gulaabi2}>
              Lorem2
            </View>
          </View>
          <View style={styles.fav}>
            <View style={styles.fav2}>
              Lorem4
            </View>
          </View>
        </View>
        <View style={styles.gry}>
          Lorem3
        </View>
      </View>
      <View style={styles.maalta}>
        Lorem5
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white',
    padding: 3,
  },
  sabz: {
    flex: 40,
    flexDirection: "column",
    backgroundColor: 'green',
    padding: 3,
  },
  teen: {
    flex: 40,
    flexDirection: "row",
    backgroundColor: 'white',
    padding: 3,
    paddingLeft:0,
  },
  maalta: {
    flex: 20,
    flexDirection: "column",
    backgroundColor: 'orange',
    padding: 3,
  },
  gry: {
    flex: 50,
    flexDirection: "column",
    backgroundColor: 'gray',
    padding: 3,
  },
  lasttwo: {
    flex: 50,
    flexDirection: "column",
    backgroundColor: 'white',
  },
  gulaabi: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white',
    padding: 3,
    paddingLeft:0,
    paddingTop:0,
  },
  fav: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white',
    padding: 3,
    paddingTop:0,
    paddingLeft:0,
    paddingBottom:0,
  },
  gulaabi2: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'pink',
    padding: 3,
  },
  fav2: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'cyan',
    padding: 3,
  },
})