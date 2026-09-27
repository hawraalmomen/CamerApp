// useCameraSetup – everything a camera screen needs, in one hook.
// READ-ONLY for students: use it, but don't edit it.
import { useRef, useState } from 'react';
import { CameraView, useCameraPermissions, type CameraType } from 'expo-camera';

export function useCameraSetup() {
  // `permission` is null while loading, then tells us if access is granted.
  const [permission, requestPermission] = useCameraPermissions();

  // A ref lets us call methods on the camera, e.g. cameraRef.current?.takePictureAsync()
  const cameraRef = useRef<CameraView>(null);

  // 'back' = the normal camera, 'front' = the selfie camera.
  const [facing, setFacing] = useState<CameraType>('back');
  const toggleFacing = () => setFacing((f) => (f === 'back' ? 'front' : 'back'));

  return { permission, requestPermission, cameraRef, facing, toggleFacing };
}
