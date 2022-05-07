import { StyleSheet, Dimensions, StatusBar } from "react-native";
import color from "./Color";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: width - 80,
      },
      leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      },
      rightContainer: {
        flexBasis: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      thumbnail: {
        height: 50,
        flexBasis: 50,
        backgroundColor: color.Ball_color,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
      },
      thumbnailText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: color.Font,
      },
      titleContainer: {
        width: width - 180,
        paddingLeft: 10,
      },
      title: {
        fontSize: 16,
        color: color.Font,
      },
      separator: {
        width: width - 80,
        backgroundColor: '#333',
        opacity: 0.3,
        height: 0.5,
        alignSelf: 'center',
        marginTop: 10,
      },
      timeText: {
        fontSize: 14,
        color: color.Ball_color,
      },
      modal: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: color.Background,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 1000,
      },
      optionContainer: {
        padding: 20,
      },
      titleMd: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20,
        paddingBottom: 0,
        color: color.Setting_color,
      },
      option: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.Font,
        paddingVertical: 10,
        letterSpacing: 1,
      },
      modalBg: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: color.MODAL_BG,
      },
      audioControllers: {
        width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
      },
      audioCountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
      },
      containerAudio: {
        flex: 1,
      },
      audioCount: {
        textAlign: 'right',
        color: color.Ball_color,
        fontSize: 14,
      },
      midBannerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      audioTitle: {
        fontSize: 16,
        color: color.Font,
        padding: 15,
      },
      containerStyle: {
        flex: 1,
        backgroundColor: color.Background,
        paddingTop: StatusBar.currentHeight,
      },
    })

export default styles;