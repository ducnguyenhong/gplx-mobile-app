import NavigationBar from 'components/navigation-bar';
import Text from 'components/text';
import { useState } from 'react';
import { Platform, SafeAreaView, SectionList, StatusBar, View } from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';
import TIPS_DATA from './memorization-tips.data';
import { styles } from './memorization-tips.style';

const MemorizationTips = () => {

    const [height, setHeight] = useState(0);

    return (
        <SafeAreaView
            onLayout={() => {
                if (Platform.OS === 'android') {
                    setHeight(StatusBar.currentHeight || 0);
                }
            }}
            style={styles.savMain}>
            <NavigationBar title="Mẹo ghi nhớ" />
            <SectionList
                style={[styles.tipContainer, { paddingBottom: height }]}
                sections={TIPS_DATA}
                keyExtractor={(item, index) => `${item + index}`}
                renderItem={({ item, section }) => (
                    <View>
                        <Text style={styles.tipText}> { section.data.length > 1 && <Octicon name='dot-fill' size={12} />}   {item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.tipSectionHeader}>{title}</Text>
                )}
                ListHeaderComponent={ <Text style={styles.tipHeader}>Mẹo 600 câu hỏi ôn thi GPLX</Text> }
                ListFooterComponent={ <View style={{ height: 50 }}></View> }
            />
        </SafeAreaView>
    );
};

export default MemorizationTips
