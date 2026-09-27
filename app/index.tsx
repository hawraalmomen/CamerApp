import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { groups } from '../groups/registry';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <FlatList
        data={groups}
        keyExtractor={(g) => g.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Fun Camera 📸</Text>
            <Text style={styles.subtitle}>Class project – pick a camera</Text>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.card,
              { backgroundColor: item.color },
              pressed && styles.pressed,
            ]}
            onPress={() => router.push({ pathname: '/group/[id]', params: { id: item.id } })}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.cardTitle} numberOfLines={2}>
              {item.title}
            </Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fafaf9' },
  list: { padding: 16, gap: 12 },
  row: { gap: 12 },
  header: { marginBottom: 8 },
  title: { fontSize: 32, fontWeight: '800', color: '#111827' },
  subtitle: { fontSize: 16, color: '#6b7280', marginTop: 4 },
  card: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    gap: 8,
  },
  pressed: { opacity: 0.7, transform: [{ scale: 0.97 }] },
  emoji: { fontSize: 48 },
  cardTitle: { fontSize: 18, fontWeight: '700', color: '#111827', textAlign: 'center' },
});
