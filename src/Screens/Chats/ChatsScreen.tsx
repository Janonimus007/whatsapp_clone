import { View, Text } from 'react-native'
import React from 'react'
import ChatListItem from '../../Components/ChatListItem'
import { styles } from './ChatScreen.styles'
import ChatRooms from '../../data/ChatRooms'

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <ChatListItem chatRoom={ChatRooms[0]}/>
    </View>
  )
}

