import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import BookStore from "./src/bookapp/screens/BookStore";
import MyNavs from "./src/learning_state/screens/navigation/BottomNav";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <MyNavs />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
