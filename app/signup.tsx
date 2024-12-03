import { clsx } from 'clsx'
import { Link } from 'expo-router'
import { useState } from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Page = () => {
  const [email, setEmail] = useState('')

  const onSignup = () => {
    console.log('sign up')
  }

  return (
    <KeyboardAvoidingView className="flex-1" behavior="padding" keyboardVerticalOffset={80}>
      <View className="px-3 h-full">
        <Text className=" text-4xl font-bold my-4">Let's get started!</Text>
        <Text className="text-base text-zinc-700">Enter your email. We will send you a confirmation code there</Text>
        <View className="my-6">
          <TextInput
            className="px-4 py-5  bg-gray-200 shadow-sm rounded-xl shadow-slate-300"
            placeholder="Email"
            placeholderTextColor={'#a8a8a8'}
            keyboardType="numeric"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Link href={'/login'} asChild>
          <TouchableOpacity>
            <Text className="text-blue-700">Already have an account? Log in</Text>
          </TouchableOpacity>
        </Link>
        <View className="flex-1" />
        <TouchableOpacity
          onPress={onSignup}
          className={clsx('rounded-full p-3 mb-8', !email ? 'bg-indigo-300' : 'bg-indigo-600 ')}
          disabled={!email}
        >
          <Text className="text-white text-center text-lg">Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Page
