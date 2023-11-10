import { Avatar } from '@rneui/themed'
import { Text, View } from 'react-native'

export default function avatarComponent(props) {
    return (
        <View>
            <Avatar
                size={props.size}
                rounded
                icon={{ name: 'person-outline', type: 'material', color:'#14274E'}}
                containerStyle={{ backgroundColor: "white" , marginRight:12, elevation:8 }}
            />
          </View>
    )
  

}
