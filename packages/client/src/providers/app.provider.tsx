import { Text, View } from 'react-native';

interface IAppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: IAppProviderProps) {
  return (
    <View>
      <Text>Hello Gentleman Community!!</Text>
      {children}
    </View>
  );
}
