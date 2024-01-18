import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
	constructor(namespace = 'auth') {
		this.namespace = namespace;
	}

	async getAccessToken() {
		// Get the access token for the storage
		return AsyncStorage.getItem(`${this.namespace}:accessToken`);
	}

	async setAccessToken(accessToken) {
		// Add the access token to the storage
		await AsyncStorage.setItem(`${this.namespace}:accessToken`, accessToken);

		console.log('Access token was set');
	}

	async removeAccessToken() {
		// Remove the access token from the storage
		await AsyncStorage.removeItem(`${this.namespace}:accessToken`);

		console.log('Access token was removed');
	}
}

export default AuthStorage;
