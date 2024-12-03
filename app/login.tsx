import { Ionicons } from '@expo/vector-icons'
import { clsx } from 'clsx'
import { Link } from 'expo-router'
import { useState } from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'

enum SignInType {
  Email,
  Google,
  Github
}

const Page = () => {
  const [email, setEmail] = useState('')

  const onSignIn = (type: SignInType) => {
    if (type === SignInType.Email) {
      console.log('sign up with email')
    }
  }

  return (
    <KeyboardAvoidingView className="flex-1" behavior="padding" keyboardVerticalOffset={80}>
      <View className="px-3 h-full">
        <Text className=" text-4xl font-bold my-4">Welcome back</Text>
        <Text className="text-base text-zinc-700">Enter your email associated with your account</Text>
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
        <TouchableOpacity
          onPress={() => onSignIn(SignInType.Email)}
          className={clsx('rounded-full p-3 mb-6', !email ? 'bg-indigo-300' : 'bg-indigo-600 ')}
          disabled={!email}
        >
          <Text className="text-white text-center text-lg">Continue</Text>
        </TouchableOpacity>
        <View className='flex flex-row items-center'>
          <View className='h-[1px] bg-gray-200 flex-1'></View>
          <Text className='px-3 text-gray-500'>or</Text>
          <View className='h-[1px] bg-gray-200 flex-1'></View>
        </View>
        <TouchableOpacity className='p-3 mt-6 mb-4 w-full rounded-full flex flex-row items-center justify-center gap-2 bg-white ' onPress={() => onSignIn(SignInType.Google)}>
          <Ionicons name='logo-github' size={24} color={'#000'} />
          <Text>Continue with Github</Text>
        </TouchableOpacity>
        <TouchableOpacity className='p-3 w-full rounded-full flex flex-row items-center justify-center gap-2 bg-white ' onPress={() => onSignIn(SignInType.Google)}>
          <Ionicons name='logo-google' size={24} color={'#000'} />
          <Text>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Page
