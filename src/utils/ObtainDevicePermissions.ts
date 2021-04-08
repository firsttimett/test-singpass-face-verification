import {Alert} from 'react-native';
import {
  check,
  Permission,
  PermissionStatus,
  request,
  RESULTS,
} from 'react-native-permissions';

export const obtainPermission = async (permission: Permission) => {
  const currentPermissionDetails: PermissionStatus = await check(permission);
  if (currentPermissionDetails === RESULTS.GRANTED) {
    Alert.alert(`${permission} has been granted`);
    return;
  }

  await request(permission);
};
