import { StyleSheet } from "react-native";
import { CardViewWithIcon } from "react-native-simple-card-view";

const DashboardCard = ({ cardCaption, icon }) => {
    return (
    <CardViewWithIcon  
        // style={ styles.dashcard }
        withBackground={ true }
        androidIcon={ icon }
        title={ cardCaption }
        contentFontSize={ 20 }
        titleFontSize={ 12 }
        content={'0'}
    />)
}

const styles = StyleSheet.create({
    dashcard: {
        display:'flex',
        flexDirection: 'column',
        width: '60%'
    }
});

export default DashboardCard;