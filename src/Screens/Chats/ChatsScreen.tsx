import { View, Text } from 'react-native'
import React from 'react'
import ChatListItem from '../../Components/ChatListItem'
import { styles } from './ChatScreen.styles'


export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <ChatListItem chatRoom={{lastMessage:{content:"Hello There"}}}/>
    </View>
  )
}

