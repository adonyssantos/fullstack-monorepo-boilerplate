import { View } from 'react-native';
import { H1 } from '@universal-labs/primitives';

interface IAppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: IAppProviderProps) {
  return (
    <View>
      <H1>Hello Gentleman Community!!</H1>
      {children}
    </View>
  );
}
