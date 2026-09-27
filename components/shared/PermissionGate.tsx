// PermissionGate – only shows its children once camera access is granted.
// READ-ONLY for students: use it, but don't edit it.
import type { ReactNode } from 'react';
import { ActivityIndicator, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import type { PermissionResponse } from 'expo-camera';

type Props = {
  permission: PermissionResponse | null; // from useCameraSetup()
  requestPermission: () => Promise<PermissionResponse>; // from useCameraSetup()
  children: ReactNode; // what to show when we have access (the camera)
};

export function PermissionGate({ permission, requestPermission, children }: Props) {
  // 1. Still asking the phone what the current permission is.
  if (!permission) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // 2. Access granted – show the camera!
  if (permission.granted) return <>{children}</>;

  // 3. Denied permanently – the app can't ask again, the user must use Settings.
  if (!permission.canAskAgain) {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Camera access is turned off 🚫</Text>
        <Text style={styles.text}>
          Open Settings, find Expo Go, and allow the camera. Then come back here.
        </Text>
        <Pressable style={styles.button} onPress={() => Linking.openSettings()}>
          <Text style={styles.buttonText}>Open Settings</Text>
        </Pressable>
      </View>
    );
  }

  // 4. Not decided yet (or denied once) – ask nicely.
  return (
    <View style={styles.center}>
      <Text style={styles.title}>We need camera access 📷</Text>
      <Text style={styles.text}>This screen uses the camera to take fun photos.</Text>
      <Pressable style={styles.button} onPress={requestPermission}>
        <Text style={styles.buttonText}>Allow camera</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 12 },
  title: { fontSize: 20, fontWeight: '700', textAlign: 'center' },
  text: { fontSize: 16, textAlign: 'center', color: '#555' },
  button: { backgroundColor: '#2563eb', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 10 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
});
