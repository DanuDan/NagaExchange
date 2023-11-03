import { Box, HStack, Input, Text, VStack, Image, Stack, ScrollView, KeyboardAvoidingView } from "native-base";
import { ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Content() {

    const rupiah = (number) => {
        return "IDR " + new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number).slice(3, -3);
    }

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://www.jsonkeeper.com/b/DCQG')
            .then((response) => {
                setData(response.data.data);
            })
    }, []);


    
    return (

        <ImageBackground source={require("../../assets/wallpaper.png")} resizeMode="cover" className="flex-1 h-[103vh] w-screen absolute">
                <ScrollView className="bg-transparent w-full h-full px-2 mb-2 ">
                    <Box className="bg-[#DFDFDF] w-full rounded-full pr-5 pl-2 mt-20 mb-10">
                        <Input variant="unstyled" placeholder="Cari Aset" type="text" className=" text-base w-full text-black font-semibold"
                            placeholderTextColor="#707070"
                            style
                            InputRightElement={
                                <Box className="py-2">
                                    <Feather name="search" size={20} color="black" />
                                </Box>
                            }
                        />

                    </Box>

                    {/* <FlatList data={data} renderItem={({
                    item
                }) =>
                    <Box keyExtractor className="bg-[#F0F0F0] bg-opacity-30 mt-4 rounded-xl py-3 px-4">
                        <HStack direction="row" className="w-[370px] justify-between">
                            <HStack direction="row" space='3'>
                                <Image
                                    source={{ uri: `${item.icon}` }}
                                    alt="Alternate Text"
                                    size="xs"
                                />
                                <VStack>
                                    <Text className="text-[#6E7499] text-sm">{item.symbol} / {item.pair}</Text>
                                    <Text className="text-[#605757] text-lg">{rupiah(item.price)}</Text>
                                    <Text className="text-[#24A959] text-sm">Vol {item.vol}</Text>

                                </VStack>
                            </HStack>
                            <Box className="justify-center items-end">
                                <Text className={`text-white px-4 py-1 rounded-2xl ${item.change > 0 ? 'bg-[#24A959]' : 'bg-[#F35242]'}`}>
                                    {item.change > 0 ? `+${item.change}` : item.change}
                                </Text>
                            </Box>
                        </HStack>
                    </Box>} keyExtractor={item => item.id} /> */}{/* TIDAK DAPAT DIGUNAKAN JIKA DIBUNGKUS DENGAN SCROLLVIEW */}
                    {data?.map((item, i) =>
                        <Box key={i} bg="#F0F0F0:alpha.70" className=" mt-4 rounded-xl py-3 px-4" style>
                            <HStack direction="row" className="w-[370px] justify-between">
                                <HStack direction="row" space='3'>
                                    <Image
                                        source={{ uri: `${item.icon}` }}
                                        alt="Alternate Text"
                                        size="xs"
                                    />
                                    <VStack>
                                        <Text className="text-[#6E7499] text-sm">{item.symbol} / {item.pair}</Text>
                                        <Text className="text-[#605757] text-lg">{rupiah(item.price)}</Text>
                                        <Text className="text-[#24A959] text-sm">Vol {item.vol}</Text>

                                    </VStack>
                                </HStack>
                                <Box className="justify-center items-end">
                                    <Text className={`text-white px-4 py-1 rounded-2xl ${item.change > 0 ? 'bg-[#24A959]' : 'bg-[#F35242]'}`}>
                                        {item.change > 0 ? `+${item.change}` : item.change}
                                    </Text>
                                </Box>
                            </HStack>
                        </Box>
                    )}
                </ScrollView>
        </ImageBackground>
    )
}