import { forwardRef, useImperativeHandle, useState } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';

const ModalReport = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);

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
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
});

export default ModalReport;
