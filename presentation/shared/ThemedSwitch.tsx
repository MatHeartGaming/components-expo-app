import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { Platform, Pressable, Switch, View } from 'react-native';
import ThemedText from './ThemedText';

interface Props {
    text?: string;
    value: boolean;
    className?: string;

    onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === 'android';

const ThemedSwitch = ({ text, className, value, onValueChange }: Props) => {
    const switchActiveColor = useThemeColor({}, 'primary');
    return (
        <Pressable
            onPress={() => onValueChange(!value)}
            className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
        >
            {
                text ? (<ThemedText type='h2'>{text}</ThemedText>) : <View />
            }
            <Switch
                value={value}
                onValueChange={onValueChange}
                thumbColor={ isAndroid ? switchActiveColor : '' }
                trackColor={{
                    false: 'red',
                    true: switchActiveColor
                }}
            />
        </Pressable>
    )
}

export default ThemedSwitch