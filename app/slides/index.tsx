import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { FlatList, Image, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, useWindowDimensions } from 'react-native';


interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/images/slides/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/images/slides/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/images/slides/slide-3.png'),
  },
];

const SlidesScreen = () => {

  const flatListRef = useRef<FlatList>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width)
    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
  }

  const scrollToNext = (index: number) => {
    if (!flatListRef.current) return;
    flatListRef.current.scrollToIndex({
      index: index,
      animated: true,
    });
  }

  const [canSwipe, seteCanSwipe] = useState(false)

  useEffect(() => {
    if (currentSlideIndex < items.length - 1) return;
    seteCanSwipe(true);
  }, [currentSlideIndex])

  return (
    <ThemedView>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.title}
        scrollEnabled={canSwipe}
        renderItem={({ item }) => (
          <SlideItem item={item} />
        )}
        onScroll={(event) => onScroll(event)}
      />
      {
        (currentSlideIndex === items.length - 1) ? (
          <ThemedButton
            className='absolute bottom-10 right-5 w-[150px]'
            text='Finalizar'
            onPress={() => router.dismiss()} />
        ) : (
          <ThemedButton
            className='absolute bottom-10 right-5 w-[150px]'
            text='Siguiente'
            onPress={() => {
              scrollToNext(currentSlideIndex + 1);
            }} />
        )
      }


    </ThemedView>
  );
};
export default SlidesScreen;

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
  const { width } = useWindowDimensions();
  const { title, desc, img } = item;
  return (
    <ThemedView
      className='flex-1 rounded p-10 justify-center bg-red-500'
      style={{ width }}
    >
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />
      <ThemedText
        type='h1'
        className='text-light-primary dark:text-dark-primary'
      >{title}</ThemedText>

      <ThemedText
        type='h2'
        className='text-light-tertiary dark:text-dark-tertiary mt-10'
      >{desc}</ThemedText>

    </ThemedView>
  )
}