import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";



export default function Details({ navigation }) {
  const [color, setColor] = useState("blue");
  const [selected, setSelected] = useState(false);
  const imageMapping = {
  blue: require('./assets/images/vs_blue.png'),
  silver: require('./assets/images/vs_silver.png'),
  red: require('./assets/images/vs_red.png'),
  black: require('./assets/images/vs_black.png'),
};
  const currentValue = {
    color: color,
    image: imageMapping[color],
    supplier: "TikiTradding",
    price: 1790000,
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 30 }}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={currentValue.image}
          style={{ width: 80, height: 100, marginHorizontal: "auto" }}
        />
        <View>
          <Text style={{ fontSize: 15 }}>Điện Thoại Vsmart Joy 3</Text>
          <Text>Hàng chính hãng</Text>
          {selected && (
            <View>
              <Text>Màu: <Text style={{ fontWeight: '700' }}>{currentValue.color}</Text></Text>
              <Text>Cung cấp bởi <Text style={{ fontWeight: '700' }}>{currentValue.supplier}</Text></Text>
              <Text style={{ fontWeight: '700' }}>{currentValue.price.toLocaleString()} VND</Text>
            </View>
          )}
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ marginTop: 10 ,fontSize:16}}>Chọn một màu bên dưới:</Text>
        <View style={{ alignItems: "center", marginTop: 10, gap: 20 }}>
          <Pressable style={{ width: 100, height: 100, backgroundColor: "gray" }} onPress={() => { setColor("silver"); setSelected(true); }}></Pressable>
          <Pressable style={{ width: 100, height: 100, backgroundColor: "red" }} onPress={() => { setColor("red"); setSelected(true); }}></Pressable>
          <Pressable style={{ width: 100, height: 100, backgroundColor: "black" }} onPress={() => { setColor("black"); setSelected(true); }}></Pressable>
       <Pressable style={{ width: 100, height: 100, backgroundColor: "blue" }} onPress={() => { setColor("blue"); setSelected(true); }}></Pressable>
        </View>

      </View>
      <Pressable style={{padding:10, backgroundColor:"#1952E294",marginTop:30,borderRadius:10,borderWidth:1,borderColor:"red"}} onPress={()=>{
        navigation.navigate({
            name: 'Home',
            params: { currentValue: currentValue },
            merge: true,
          });
      }}>
        <Text style={{fontSize:18,textAlign:"center",color:"white",fontWeight:700}}>Xong</Text>
      </Pressable>
      
    </ScrollView>
  );
}
