import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const Switches = () => {

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  })

  return (
    <ThemedView margin className='mt-2'>
      <ThemedCard>
        {/*<Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={state.isActive ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setState({ ...state, isActive: value })}
          value={state.isActive}
        />*/}
        <ThemedSwitch
          className='mb-4'
          text='Active'
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
        />
        <ThemedSwitch
          className='mb-4'
          text='Hambriento'
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
        />
        <ThemedSwitch
          className='mb-4'
          text='Es Feliz?'
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
