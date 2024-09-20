import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { useState, useEffect } from "react";

export default function Home({ navigation, route }) {
  const imageMapping = {
    blue: require('./assets/images/vs_blue.png'),
    silver: require('./assets/images/vs_silver.png'),
    red: require('./assets/images/vs_red.png'),
    black: require('./assets/images/vs_black.png'),
  };

  const [currentValue, setCurrentValue] = useState({
    color: "blue",
    image: imageMapping["blue"],
    supplier: "TikiTradding",
    price: 1790000,
  });

  useEffect(() => {
    if (route.params?.currentValue) {
      setCurrentValue(route.params?.currentValue);
    }
  }, [route.params?.currentValue]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 30}}>
      <Image 
        source={currentValue.image} 
        style={{ width: 200, height:250, marginHorizontal:"auto"}} 
      />
      <View style={{marginTop:40}}>
        <Text style={{fontSize:15}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:20}}>
          <View style={{ flexDirection: 'row' }}>
            {Array(5).fill().map((_, i) => (
              <Image 
                key={i}
                source={require("./assets/images/star.png")} 
                style={{ width: 20, height: 20 }} 
              />
            ))}
          </View>
          <Text style={{color:"gray"}}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{flexDirection:"row", gap:30, alignItems:"center", marginTop:10}}>
          <Text style={{fontWeight:"bold"}}>{currentValue.price.toLocaleString()} đ</Text>
          <Text style={{fontSize:10, textDecorationLine:"line-through"}}>
            {currentValue.price.toLocaleString()} đ
          </Text>
        </View>
        <View style={{marginTop:10}}>
          <Text style={{color:"#FA0000", fontSize:12}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        </View>
        <Pressable 
          style={{marginTop:10, padding:10, borderRadius:10, borderWidth:1}}  
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={{fontSize:15, textAlign:"center"}}>4 MÀU-CHỌN MÀU</Text>
        </Pressable>
        <Pressable 
          style={{marginTop:40, backgroundColor:"#FA0000", padding:10, borderRadius:10}}
        >
          <Text style={{fontSize:15, fontWeight:700, color:"white", textAlign:"center"}}>CHỌN MUA</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

