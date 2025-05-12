import { useThemeChangerContext } from '@/presentation/context/ThemeChangerContext';
import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const ThemesScreen = () => {

  //const {colorScheme, setColorScheme} = useColorScheme();

  const { toggleTheme, currentTheme, isSystemTheme, setSystemTheme } = useThemeChangerContext();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === 'dark',
    systemMode: false,
  });

  const setDarkMode = (value: boolean) => {
    //setColorScheme(value ? 'dark' : 'light')
    toggleTheme();
    setDarkModeSettings({
      darkMode: value,
      systemMode: isSystemTheme,
    });
  }

  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemTheme();  
    }
    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value,
    });
  }

  return (
    <ThemedView margin>
      <ThemedCard className='mt-5'>
        <ThemedSwitch
          className='mb-5'
          text='Dark Mode'
          value={darkModeSettings.darkMode}
          onValueChange={(value: boolean) => setDarkMode(value)} />
        <ThemedSwitch
          className='mb-5'
          text='System Mode'
          value={darkModeSettings.systemMode}
          onValueChange={(value: boolean) => setSystemMode(value)} />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
