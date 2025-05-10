import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import ThemedText from './ThemedText';

interface Props extends PressableProps {
    className?: string;
    text?: string;
    onPress: () => void;
}

const ThemedButton = ({ className, text, onPress, ...rest }: Props) => {
    return (
        <Pressable
            onPress={onPress}
            className={[
                'bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80',
                className,
            ].join(' ')}
            {...rest}
        >
            <ThemedText className='text-white text-2xl'>{text ?? ''}</ThemedText>
        </Pressable>
    )
}

export default ThemedButton