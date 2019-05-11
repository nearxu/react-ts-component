import * as React from 'react'
import * as ReactDOM from 'react-dom';
import ModalProvider from './modalProvider'
import useModal from './useModal';


const modalStyles = (visible: boolean): React.CSSProperties => ({
    position: 'fixed',
    top: '50%',
    left: '50%',
    padding: '30px',
    display: visible ? 'block' : 'none',
    background: '#3d7e9a',
    border: '1px solid #ddd',
    transform: 'translate(-50%, -50%)'
})

interface ModalProps {
    visible: boolean,
    title: string,
    onHide: () => void
}
function Modal(props: ModalProps) {
    const { visible, title, onHide } = props;
    if (!visible) return null;
    return ReactDOM.createPortal(
        <div style={modalStyles(visible)}>
            <div>{title}</div>
            <button onClick={onHide}>close</button>
        </div>,
        document.body
    )
}

function App() {
    const { visible, show, hide } = useModal(Modal);
    console.log(show);
    const onShow = React.useCallback(() => {
        show({ title: 'modal title' })
    }, [])

    const onHide = React.useCallback(() => {
        hide()
    }, [])

    return (
        <div>
            <span>visible: {visible.toString()}</span>
            <button onClick={onShow}>open</button>
            <button onClick={onHide}>hide</button>
        </div>
    )
}

function App1() {
    const { visible, show, hide } = useModal(Modal)
    const onShow = React.useCallback(() => {
        show({ title: 'hello im is app1' })
    }, [])

    const onHide = React.useCallback(() => {
        hide()
    }, [])

    return (
        <div>
            <span>visible: {visible.toString()}</span>
            <input type='text' />
            <button onClick={onShow}>open</button>
            <button onClick={onHide}>hide</button>
        </div>
    )
}

export default function AppModal() {
    return (
        <div>
            <ModalProvider>
                <App />
                <App1 />
            </ModalProvider>
        </div>
    )
}