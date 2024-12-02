import { useAssets } from "expo-asset"
import { Text, View } from "react-native"

const Page = () => {

  const [asset] = useAssets([require('@/assets/videos/intro.mp4')])

  return (
    <View>
      <Text className="text-2xl font-bold underline text-rose-500">Index Page</Text>
    </View>
  )
}

export default Page
