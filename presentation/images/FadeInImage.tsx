import { useAnimation } from '@/hooks/useAnimation';
import React, { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp } from 'react-native';

interface Props {
    uri: string;
    style: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {
    const [isLoading, setIsLoading] = useState(true)

    const {animatedOpacity, fadeIn} = useAnimation();

    return (
        <Animated.View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {
                isLoading && (
                    <ActivityIndicator 
                        style={{position: 'absolute'}}
                        color={'grey'}
                        size={30}
                    />
                )
            }
            
            <Animated.Image
                source={{ uri }}
                style={[style, {opacity: animatedOpacity}]}
                onLoadEnd={() => {
                    fadeIn({});
                    setIsLoading(false);
                }}
            />
        </Animated.View>
    )
}

export default FadeInImage