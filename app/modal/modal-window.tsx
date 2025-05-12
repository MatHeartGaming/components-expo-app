import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';

const ModalScreen = () => {
    return (
        <ThemedView className='justify-center items-center flex-1' bgColor='purple'>
            <ThemedText>Hola, soy un modal</ThemedText>
            
            <ThemedButton
                onPress={() => router.push('/modal/modal-window-2')}
            >Otro Modal</ThemedButton>

            <StatusBar
                style={Platform.OS === 'ios' ? 'light' : 'auto'}
            />
        </ThemedView>
    )
}

export default ModalScreen