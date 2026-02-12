import { useState } from 'react'
import { Button, getThemedColor, Modal } from '../..'
import DemoWrapper from '../../UI/DemoWrapper'
import { ModalProps } from './types'

const ModalDemo = () => {
  const [modalData, setModalData] = useState<Partial<ModalProps>>({})

  const handleModalOpen = (
    size: ModalProps['size'],
    showActions = false,
    draggable = false,
    blocking = false,
    width = '',
    height = '',
    maxHeight = '',
  ) => {
    setModalData({
      header: (
        <p
          style={{
            fontWeight: 'bold',
            color: getThemedColor('neutral', 800),
          }}
        >
          Title
        </p>
      ),
      content: <p>Modal size: {size}</p>,
      footer: showActions ? (
        <>
          <Button
            label='Cancel'
            variant='secondary'
            onClick={() => {
              setModalData({})
            }}
          />
          <Button
            label='Save'
            onClick={() => {
              setModalData({})
            }}
          />
        </>
      ) : null,
      size,
      draggable,
      blocking,
      width,
      height,
      maxHeight,
    })
  }

  return (
    <DemoWrapper title='Modal'>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '200px',
          }}
        >
          <Button
            label='Extra Small Modal'
            onClick={() => handleModalOpen('xsmall')}
          />
          <Button
            label='Small Modal'
            onClick={() => handleModalOpen('small')}
          />
          <Button
            label='Medium Modal'
            onClick={() => handleModalOpen('medium')}
          />
          <Button
            label='Large Modal'
            onClick={() => handleModalOpen('large')}
          />
          <Button
            label='Extra Large Modal'
            onClick={() => handleModalOpen('xlarge')}
          />

          <Button
            label='Full Width Modal'
            onClick={() => handleModalOpen('full-width')}
          />

          <Button
            label='Custom Size Modal'
            onClick={() =>
              handleModalOpen(
                undefined,
                false,
                false,
                false,
                '400px',
                '400px',
                '100%',
              )
            }
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
          header={modalData?.header}
          content={modalData?.content}
          footer={modalData?.footer}
          size={modalData?.size}
          open={!!modalData?.content}
          onClose={() => setModalData({})}
          draggable={modalData?.draggable}
          blocking={modalData?.blocking}
          width={modalData?.width}
          height={modalData?.height}
          maxHeight={modalData?.maxHeight}
        />
      </div>
    </DemoWrapper>
  )
}

export default ModalDemo
