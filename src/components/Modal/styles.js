import styled from 'styled-components'

const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 9;
`

const ModalInner = styled.div`
  max-width: 30rem;
  background: ${({ theme }) => theme.veryLightGreen};
  border-radius: 0.3rem;
  box-shadow: 0 0 rgba(0, 0, 0, 0.5);
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
  padding: 1rem;

  & p {
    font-weight: 700;
  }
`

const ModalBody = styled.div`
  padding: 2rem 1rem;
`

const Button = styled.button`
  padding: 0.7rem 1.5rem;
  border-radius: 1.5rem;
  transition: 0.3s;
  border: 1px solid ${({ theme }) => theme.brightGreen};
  margin-top: 2rem;
`
export default {
  Modal,
  ModalInner,
  ModalHeader,
  ModalBody,
  Button,
}
