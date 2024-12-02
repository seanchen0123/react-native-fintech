import { useAssets } from 'expo-asset'
import { ResizeMode, Video } from 'expo-av'
import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

const Page = () => {
  const [assets] = useAssets([require('@/assets/videos/intro.mp4')])

  return (
    <View className=" flex-1 justify-between relative">
      {assets && (
        <Video
          source={{ uri: assets[0].uri }}
          style={{ width: '100%', height: '100%', position: 'absolute' }}
          resizeMode={ResizeMode.COVER}
          isLooping
          isMuted
          shouldPlay
        />
      )}
      <View className="mt-4 p-5">
        <Text className="text-white text-3xl font-bold uppercase leading-normal">Ready to change the way you money?</Text>
      </View>
      <View className='mb-8 flex flex-row justify-center gap-5'>
        <Link href={'/login'} asChild>
          <TouchableOpacity className=' bg-white w-5/12 py-4 rounded-full'>
            <Text className='text-zinc-900 font-semibold uppercase text-center'>Log in</Text>
          </TouchableOpacity>
        </Link>
        <Link href={'/signup'} asChild>
          <TouchableOpacity className=' bg-emerald-400 w-5/12 py-4 rounded-full'>
            <Text className='text-white font-semibold uppercase text-center'>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}

export default Page
