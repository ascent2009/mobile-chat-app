import React, {useEffect} from 'react';
import { Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import firebaseSvc from '../FirebaseSvc';

export default class Home extends React.Component {
    constructor (props) {
        super(props)
    }

    state = {
         messages: [],
     };

   get user() {
        return {
        name: this.props.route.params.name,
        email: this.props.route.params.email,
        };
    }

    componentDidMount() {
        firebaseSvc.refOn(message => 
            this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, message),
            })
        ));
    }

    render() {
        return (
               <GiftedChat 
                    onSend={firebaseSvc.send}
                    messages={this.state.messages}
                    user={this.user}
                    isTyping={true}
                    renderTime={(props) => <Text>{message.createdAt}</Text>}
                />
        )
    }
}
