import React, { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { Box, Button, Input, Stack, Pressable, Text } from 'native-base'
import { Ionicons, Octicons, MaterialIcons } from '@expo/vector-icons'

export default function Login({ navigation }) {

    const [show, setShow] = useState(false)
    return (
        <Box className="bg-white mx-auto w-full h-full justify-center items-center space-y-20 p-10">
            <Box className="space-y-5 w-full px-2">
                <Text className="text-black text-2xl text-center font-semibold flex justify-center px-2">Login</Text>
                <Stack space="5">
                    <Input variant="unstyled" placeholder="Email" type="email" className="border-b-2 text-xl w-full"
                        InputLeftElement={
                            <Box className="border-b-2 py-4">
                                <Ionicons name="md-person-outline" className="border-b-2 border" size={24} color="black" />
                            </Box>
                        }
                    />
                    <Input variant="unstyled" placeholder="Password" type={show ? "text" : "password"} className="border-b-2 text-xl w-full"
                        InputLeftElement={
                            <Box className="border-b-2 py-4">
                                <Octicons name="key" size={24} color="black" className="border-b p-2" />
                            </Box>
                        }
                        InputRightElement={
                            <Box className="border-b-2 py-4">
                                <Pressable onPress={() => setShow(!show)} >
                                    <MaterialIcons name={show ? "visibility" : "visibility-off"} size={24} color="black" />
                                </Pressable>
                            </Box>
                        }
                    />
                </Stack>
            </Box>
            <Button md="100%" className=" rounded-full text-base px-20 py-3 bg-[#A172FB]" onPress={() => navigation.navigate("Content")}>
                <Text className="text-white font-normal text-base">Masuk ke Akun</Text>
            </Button>
            <StatusBar style="auto" />
        </Box>
    )
}