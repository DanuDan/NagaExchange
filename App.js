import { NativeBaseProvider} from 'native-base'
import Container from './Container';

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});


export default function App() {
  return (

    <NativeBaseProvider>
      <Container/>
    </NativeBaseProvider>
  );
}
