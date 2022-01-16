import { Flex } from 'native-base';
import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { request } from '../../Networks';

const ExampleScreen = () => {
  const [ list, setList ] = useState( [] );

  useEffect( () => {
    const getData = async () => {
      const requestData = await request();
      setList( requestData );
      console.log( requestData );
    };
    getData();
  }, [] );
  return (
    <View>
      <FlatList
        data={ list }
        renderItem={ ( { item, index } ) => {
          return (

            <View key={ index } style={ { backgroundColor: "white", flexDirection: 'row', margin: 10 } }>
              <Image source={ { uri: item.image } } style={ {
                width: 150,
                height: 150
              } } />
              <View style={ { display: 'flex' } }>
                <Text style={ { color: 'black', marginVertical: 5 } } > Title:{ item.title }</Text>
                <Text style={ { color: 'black', marginVertical: 5 } } > Price:{ item.price }</Text>
                <Text style={ { color: 'black', marginVertical: 5 } } > Categori:{ item.categori }</Text>
              </View>
            </View>
          )
        } }


      />
    </View>
  )
}

export default ExampleScreen
