import { useThemeColor } from '@/hooks/useThemeColor';
import FadeInImage from '@/presentation/images/FadeInImage';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

const InfiniteScrollScreen = () => {

  const primaryColor = useThemeColor({}, 'primary');

  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 500);
  }

  return (
    <ThemedView>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        ListFooterComponent={() => (
          <View>
            <ActivityIndicator
              color={primaryColor}
              style={{
                height: 150, justifyContent: 'center'
              }}
              size={40}
            />
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <FadeInImage
      style={{
        height: 400,
        width: '100%'
      }}
      uri={`https://picsum.photos/id/${number}/500/400`}
    />
    /*<Image
      source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
      style={{
        height: 400,
        width: '100%'
      }}
    />*/
  )
}