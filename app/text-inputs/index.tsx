import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const isIos = Platform.OS === 'ios'

const TextInputsScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })

  return (
    <KeyboardAvoidingView
      behavior={isIos ? 'height' : undefined}
    >
      <ScrollView>
        <ThemedView margin>
          <ThemedTextInput
            placeholder='Nombre Completo'
            autoCapitalize='words'
            autoComplete='name'
            autoCorrect={false}
            onChangeText={(text) => setForm({ ...form, name: text })}
          />

          <ThemedTextInput
            placeholder='Correo'
            autoCapitalize='none'
            keyboardType='email-address'
            autoCorrect={false}
            onChangeText={(text) => setForm({ ...form, email: text })}
          />

          <ThemedTextInput
            placeholder='Telefono'
            autoCapitalize='none'
            keyboardType='phone-pad'
            autoCorrect={false}
            onChangeText={(text) => setForm({ ...form, phone: text })}
          />

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard
            className='my-2'
            style={{
              marginBottom: isIos ? 100 : 0,
            }}>
            <ThemedTextInput
              placeholder='Telefono'
              autoCapitalize='none'
              keyboardType='phone-pad'
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>

        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
