import { TouchableOpacity } from "react-native";


const TabButton = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{
            alignItems: 'center',
            width: 100,
            paddingTop: 10,
            height: 70
        }}>
            {children}
        </TouchableOpacity>
    );
};

export default TabButton;