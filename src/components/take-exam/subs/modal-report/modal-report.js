import Text from 'components/text';
import { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { FlatList, TouchableHighlight, View } from 'react-native';
import Modal from 'react-native-modal';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './modal-report.style';

const REPORT_DATA = [
  {
    type: 'EMAIL',
    title: 'Gửi qua email',
  },
  {
    type: 'SPELL',
    title: 'Lỗi chính tả',
  },
  {
    type: 'CONTENT',
    title: 'Sai nội dung',
  },
  {
    type: 'IMAGE',
    title: 'Sai hình ảnh',
  },
  {
    type: 'ANSWER',
    title: 'Sai đáp án',
  },
  {
    type: 'WRONG_SUGGEST',
    title: 'Gợi ý không chính xác',
  },
];

const ModalReport = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const [currentType, setCurrentType] = useState();

  const onConfirm = useCallback(() => {
    setShow(false);
  }, []);

  useImperativeHandle(ref, () => ({
    showModal() {
      setShow(true);
    },
    hideModal() {
      setShow(false);
    },
  }));

  return (
    <View>
      <Modal isVisible={show}>
        <View style={styles.vModal}>
          <Text style={styles.tTitle}>Gửi phản hồi về câu hỏi</Text>

          <FlatList
            data={REPORT_DATA}
            keyExtractor={item => item.type}
            renderItem={({ item }) => (
              <TouchableHighlight
                style={styles.thItem}
                underlayColor="#F0F0F5"
                onPress={() => setCurrentType(item.type)}>
                <>
                  <MCIcon
                    name={
                      currentType === item.type
                        ? 'circle-slice-8'
                        : 'checkbox-blank-circle-outline'
                    }
                    size={23}
                    color={currentType === item.type ? 'green' : 'gray'}
                  />
                  <Text style={styles.tItemTitle}>{item.title}</Text>
                </>
              </TouchableHighlight>
            )}
          />

          <View style={styles.vControl}>
            <TouchableHighlight
              style={styles.thCancel}
              underlayColor="#F0F0F5"
              onPress={() => setShow(false)}>
              <Text style={styles.tControl}>Bỏ qua</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.thConfirm}
              onPress={onConfirm}
              underlayColor="#F0F0F5">
              <Text style={styles.tControl}>Gửi đi</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
});

export default ModalReport;
