import { useState } from 'react'
import { Button, Modal } from '../..'

const ModalDemo = () => {
  const [modalData, setModalData] = useState<{
    title?: string
    content?: React.ReactNode
    size?: 'small' | 'medium' | 'large' | 'xlarge'
    isDraggable?: boolean
    showCancelButton?: boolean
    cancelLabel?: string
    showActionButton?: boolean
    actionLabel?: string
    onActionClick?: VoidFunction
  }>({})

  const handleModalOpen = (
    size: 'small' | 'medium' | 'large' | 'xlarge',
    showActions = false,
    isDraggable = false,
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
      isDraggable,
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
          label='Medium Draggable'
          onClick={() => handleModalOpen('medium', false, true)}
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
        isDraggable={modalData?.isDraggable}
      />
    </div>
  )
}

export default ModalDemo
