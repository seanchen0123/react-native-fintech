import { useFonts } from 'expo-font'
import { Link, Stack, useRouter } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'
import '@/assets/css/global.css'

import { useColorScheme } from '@/hooks/useColorScheme'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

const InitialLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  const router = useRouter()

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="signup"
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: 'transparent' },
          headerLeft: () => (
            <TouchableOpacity className="ml-4" onPress={router.back}>
              <Ionicons name="arrow-back" size={26} color={'#575757'} />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: 'transparent' },
          headerLeft: () => (
            <TouchableOpacity className="ml-3" onPress={router.back}>
              <Ionicons name="arrow-back" size={26} color={'#575757'} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Link href={'/help'} asChild>
              <TouchableOpacity className="mr-3" onPress={router.back}>
                <Ionicons name="help-circle-outline" size={26} color={'#575757'} />
              </TouchableOpacity>
            </Link>
          )
        }}
      />
      <Stack.Screen name="help" options={{ title: 'Help', presentation: 'modal' }} />
    </Stack>
  )
}

const RootLayoutNav = () => {
  return (
    <GestureHandlerRootView>
      <StatusBar style="dark" />
      <InitialLayout />
    </GestureHandlerRootView>
  )
}

export default RootLayoutNav
