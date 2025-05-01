import { useState } from 'react'
import { Button, Modal } from '../..'

const ModalDemo = () => {
  const [modalData, setModalData] = useState<{
    title?: string
    content?: React.ReactNode
    size?: 'small' | 'medium' | 'large' | 'xlarge'
    draggable?: boolean
    blocking?: boolean
    showCancelButton?: boolean
    cancelLabel?: string
    showActionButton?: boolean
    actionLabel?: string
    onActionClick?: VoidFunction
  }>({})

  const handleModalOpen = (
    size: 'small' | 'medium' | 'large' | 'xlarge',
    showActions = false,
    draggable = false,
    blocking = false,
  ) => {
    setModalData({
      title: 'Title',
      content: <p>{size}</p>,
      size,
      showCancelButton: showActions,
      cancelLabel: 'Cancel',
      showActionButton: showActions,
      actionLabel: 'Save',
      onActionClick: () => {
        console.log('Save and Close')
        setModalData({})
      },
      draggable,
      blocking,
    })
  }

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Button label='Small Modal' onClick={() => handleModalOpen('small')} />
        <Button
          label='Medium Modal'
          onClick={() => handleModalOpen('medium')}
        />
        <Button label='Large Modal' onClick={() => handleModalOpen('large')} />
        <Button
          label='Extra Large Modal'
          onClick={() => handleModalOpen('xlarge')}
        />
        <Button
          label='Medium With Actions'
          onClick={() => handleModalOpen('medium', true)}
        />
        <Button
          label='Draggable'
          onClick={() => handleModalOpen('medium', false, true)}
        />
        <Button
          label='Blocking'
          onClick={() => handleModalOpen('medium', true, false, true)}
        />
      </div>

      <Modal
        title={modalData?.title || ''}
        content={modalData?.content}
        size={modalData?.size}
        open={!!modalData?.content}
        onClose={() => setModalData({})}
        showCancelButton={modalData?.showCancelButton}
        cancelLabel={modalData?.cancelLabel}
        showActionButton={modalData?.showActionButton}
        actionLabel={modalData?.actionLabel}
        onActionClick={modalData?.onActionClick}
        draggable={modalData?.draggable}
        blocking={modalData?.blocking}
      />
    </div>
  )
}

export default ModalDemo
