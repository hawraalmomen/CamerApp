import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Fun Camera 📸', headerShown: false }} />
        {/* The group screen sets its own title from the registry. */}
        <Stack.Screen name="group/[id]" options={{ title: '' }} />
      </Stack>
    </>
  );
}
