import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { findGroup } from '../../groups/registry';
import { GroupErrorBoundary } from '../../components/GroupErrorBoundary';

export default function GroupScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const group = findGroup(id);

  if (!group) {
    return (
      <View style={styles.center}>
        <Stack.Screen options={{ title: 'Not found' }} />
        <Text style={styles.title}>Group not found 🤷</Text>
        <Text style={styles.text}>There is no group called “{id}”.</Text>
        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
      </View>
    );
  }

  const GroupComponent = group.component;
  return (
    <View style={styles.full}>
      <Stack.Screen options={{ title: `${group.emoji} ${group.title}` }} />
      {/* key resets the boundary if we ever switch group without unmounting */}
      <GroupErrorBoundary key={group.id}>
        <GroupComponent />
      </GroupErrorBoundary>
    </View>
  );
}

const styles = StyleSheet.create({
  full: { flex: 1, backgroundColor: 'black' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 12 },
  title: { fontSize: 22, fontWeight: '700' },
  text: { fontSize: 16, color: '#555' },
  button: { backgroundColor: '#111827', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 10 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '600' },
});
