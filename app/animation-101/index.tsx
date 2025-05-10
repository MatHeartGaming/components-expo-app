import { useAnimation } from '@/hooks/useAnimation';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Animated } from 'react-native';

const Animation101Screen = () => {

  const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();

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
        onPress={() => {
          fadeIn({})
          startMovingTopPosition({});
        }}
        //children={() => <Text>Fade In</Text>}
        text='Fade In'
      />
      <ThemedButton
        className='my-5'
        onPress={() => fadeOut({})}
        //children={() => <Text>Fade Out</Text>}
        text='Fade Out'
      />
    </ThemedView>
  );
};
export default Animation101Screen;
