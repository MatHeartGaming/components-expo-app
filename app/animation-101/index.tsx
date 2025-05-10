import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

const Animation101Screen = () => {

  const animatedOpacity = useRef( new Animated.Value(0) ).current;
  const animatedTop = useRef( new Animated.Value(-100) ).current;

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing( animatedTop, {
      toValue: 0,
      duration: 700,
      //easing: Easing.elastic(1.2),
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  }

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
      // }).start( () => animatedTop.setValue(-100) );
    }).start( () => animatedTop.resetAnimation() );
  }

  return (
    <ThemedView margin className='justify-center items-center flex-1'>

      <Animated.View 
        className='bg-light-secondary dark:bg-dark-secondary rounded-xl'
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop,
          }]
        }}
      />

      <ThemedButton
        className='my-5'
        onPress={() => fadeIn()}
        //children={() => <Text>Fade In</Text>}
        text='Fade In'
      />
      <ThemedButton
        className='my-5'
        onPress={() => fadeOut()}
        //children={() => <Text>Fade Out</Text>}
        text='Fade Out'
      />
    </ThemedView>
  );
};
export default Animation101Screen;
