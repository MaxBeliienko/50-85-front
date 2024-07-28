import ReactModal from 'react-modal';
import Iconsvg from './Icon';

ReactModal.setAppElement('#root');

const Modal = ({ showModal, closeModal, children }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      borderRadius: '15px',
      padding: '0',
      zIndex: 1001,
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
    },
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    padding: '0',
    margin: '0',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    top: 20,
    right: 20,
  };

  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <button type="button" onClick={closeModal} style={buttonStyle}>
        <Iconsvg width={28} height={28} iconName={'x'} styles={'closeModal'} />
      </button>
      {children}
    </ReactModal>
  );
};

export default Modal;

/*
треба додати в App.jsx state для модалки і функції для відкриття і закриття

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
     document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setShowModal(false);
     document.body.style.overflow = 'auto';
  };

  
<Modal
showModal={showModal}
closeModal={closeModal}
buttonTop={20}
buttonRight={20}
>
  <WaterModal operationType="add" />
</Modal>;

*/
