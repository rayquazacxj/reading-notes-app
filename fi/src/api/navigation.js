import { useNavigation } from '@react-navigation/native';
export function GoToButton({ screenName }) {
    const navigation = useNavigation();
  
    return (
      <Button
        title={`Go to ${screenName}`}
        onPress={() => navigation.navigate(screenName)}
      />
    );
  }