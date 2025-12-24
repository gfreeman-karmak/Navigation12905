import { Pressable, StyleSheet, Text } from 'react-native';
import { PlatformPressable } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  function onParentPress() {
    console.log('parent press');
  }

  function onChildPress() {
    console.log('child press');
  }

  return (
    <NavigationContainer>
      <Pressable onPress={onParentPress} style={styles.container}>
        <PlatformPressable
          onPress={onChildPress}
          style={styles.button}
          disabled={true}>
          <Text style={{ fontSize: 24 }}>Platform Pressable</Text>
        </PlatformPressable>
        <Pressable onPress={onChildPress} style={styles.button} disabled={true}>
          <Text style={{ fontSize: 24 }}>Native Pressable</Text>
        </Pressable>
      </Pressable>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 20,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'green',
  },
});