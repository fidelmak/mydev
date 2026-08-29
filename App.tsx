import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import BookStore from "./src/bookapp/screens/BookStore";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <BookStore />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
