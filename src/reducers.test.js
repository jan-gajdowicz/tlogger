import {modal} from './reducers'

const modalInitialState = {
  modalOpen: false,
  modalHeader: '',
  modalContent: '',
  showButtons: false
}

const modalActiveState = {
  modalOpen: true,
  modalHeader: 'My Modal',
  modalContent: 'Are you sure you want to delete My Computer?',
  showButtons: true
}

describe('modal reducer', () => {
  it('should return the initial state', () => {
    expect(modal(undefined, {})).toEqual(modalInitialState)
  })

  it('should handle UPDATE_MODAL', () => {
    expect(
      modal(null, {
        type: 'UPDATE_MODAL',
        payload: modalActiveState
      })
    ).toEqual(modalActiveState)
  })

})