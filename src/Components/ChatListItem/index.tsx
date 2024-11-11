import { View, Text } from 'react-native'
import React from 'react'
import { ChatRoom } from '../../../types'

export type ChatListItemProps = {
    chatRoom : ChatRoom;
}

export default function ChatListItem(props:ChatListItemProps) {
  const {chatRoom} = props;
  return (
    <View>
      <Text>{chatRoom.lastMessage.content}</Text>
    </View>
  )
}