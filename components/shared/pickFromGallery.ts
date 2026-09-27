// pickFromGallery – lets the user choose a photo instead of taking one.
// Handy on a simulator or laptop without a camera.
// READ-ONLY for students: use it, but don't edit it.
import * as ImagePicker from 'expo-image-picker';

/** Returns the picked photo's URI, or null if the user cancelled. */
export async function pickFromGallery(): Promise<string | null> {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: 'images',
    quality: 0.5,
  });
  if (result.canceled) return null;
  return result.assets[0]?.uri ?? null;
}
