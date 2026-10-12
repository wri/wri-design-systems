import { useState, type CSSProperties } from 'react'
import {
  Button,
  getThemedColor,
  getThemedFontSize,
  getThemedSpacing,
  Modal,
  Switch,
} from '../..'
import DemoWrapper from '../../UI/DemoWrapper'
import { ModalProps } from './types'

type DialogConfig = Pick<
  ModalProps,
  'lazyMount' | 'unmountOnExit' | 'restoreFocus' | 'modal' | 'trapFocus'
>

// Recommended configuration from DS-323 to avoid the focus-trap error
// ("Your focus-trap needs to have at least one focusable element") that
// happens when multiple modals trigger one another.
const DEFAULT_DIALOG_CONFIG: DialogConfig = {
  lazyMount: true,
  unmountOnExit: true,
  restoreFocus: false,
  modal: false,
  trapFocus: true,
}

const modalHeader = (
  <p
    style={{
      fontWeight: 'bold',
      color: getThemedColor('neutral', 800),
    }}
  >
    Title
  </p>
)

const modalBodyStyles: CSSProperties = { padding: getThemedSpacing(300) }

const sectionTitleStyles: CSSProperties = {
  fontSize: getThemedFontSize(500),
  fontWeight: 'bold',
  color: getThemedColor('neutral', 800),
  margin: `0 0 ${getThemedSpacing(200)}`,
}

const sectionDescriptionStyles: CSSProperties = {
  color: getThemedColor('neutral', 700),
  margin: `0 0 ${getThemedSpacing(300)}`,
}

const configSummaryStyles: CSSProperties = {
  fontSize: getThemedFontSize(200),
  color: getThemedColor('neutral', 700),
  margin: `0 0 ${getThemedSpacing(300)}`,
}

const configSummary = (config: DialogConfig) => (
  <p style={configSummaryStyles}>
    {`lazyMount: ${config.lazyMount} — unmountOnExit: ${config.unmountOnExit} — restoreFocus: ${config.restoreFocus} — modal: ${config.modal} — trapFocus: ${config.trapFocus}`}
  </p>
)

const ModalDemo = () => {
  const [modalData, setModalData] = useState<Partial<ModalProps>>({})
  const [dialogConfig, setDialogConfig] = useState<DialogConfig>(
    DEFAULT_DIALOG_CONFIG,
  )

  // Stacked scenario: the second modal opens on top of the first one.
  const [stackedFirstOpen, setStackedFirstOpen] = useState(false)
  const [stackedSecondOpen, setStackedSecondOpen] = useState(false)

  // Swap scenario: the first modal closes while the second one opens, so the
  // new modal renders before the previous one has fully unmounted. This is
  // the flow reported in DS-323.
  const [swapFirstOpen, setSwapFirstOpen] = useState(false)
  const [swapSecondOpen, setSwapSecondOpen] = useState(false)

  const handleDialogConfigChange = (name: string, checked: boolean) => {
    setDialogConfig((previous) => ({ ...previous, [name]: checked }))
  }

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
      header: modalHeader,
      content: (
        <div style={modalBodyStyles}>
          <p>Modal size: {size}</p>
        </div>
      ),
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: getThemedSpacing(700),
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: getThemedSpacing(500),
              maxWidth: '12.5rem',
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
                  '25rem',
                  '25rem',
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

        <div>
          <p style={sectionDescriptionStyles}>
            Scenarios where modals trigger one another, which originally caused
            the focus-trap error. The switches configure the Dialog.Root props
            exposed for this bug and apply to both scenarios below. Defaults
            match the recommended configuration from the ticket.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: getThemedSpacing(300),
              maxWidth: '15rem',
            }}
          >
            <Switch
              name='lazyMount'
              checked={dialogConfig.lazyMount}
              onChange={handleDialogConfigChange}
            >
              lazyMount
            </Switch>
            <Switch
              name='unmountOnExit'
              checked={dialogConfig.unmountOnExit}
              onChange={handleDialogConfigChange}
            >
              unmountOnExit
            </Switch>
            <Switch
              name='restoreFocus'
              checked={dialogConfig.restoreFocus}
              onChange={handleDialogConfigChange}
            >
              restoreFocus
            </Switch>
            <Switch
              name='modal'
              checked={dialogConfig.modal}
              onChange={handleDialogConfigChange}
            >
              modal
            </Switch>
            <Switch
              name='trapFocus'
              checked={dialogConfig.trapFocus}
              onChange={handleDialogConfigChange}
            >
              trapFocus
            </Switch>
          </div>
        </div>

        <div>
          <p style={sectionTitleStyles}>Stacked modals</p>
          <p style={sectionDescriptionStyles}>
            Open the first modal, then open a second one on top of it and close
            it again.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: getThemedSpacing(500),
              maxWidth: '12.5rem',
            }}
          >
            <Button
              label='Open First Modal'
              onClick={() => setStackedFirstOpen(true)}
            />
          </div>

          <Modal
            header={modalHeader}
            content={
              <div
                style={{
                  ...modalBodyStyles,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: getThemedSpacing(300),
                }}
              >
                <p>First modal</p>
                {configSummary(dialogConfig)}
                <Button
                  label='Open Second Modal'
                  onClick={() => setStackedSecondOpen(true)}
                />
              </div>
            }
            footer={
              <Button
                label='Close'
                variant='secondary'
                onClick={() => {
                  setStackedFirstOpen(false)
                  setStackedSecondOpen(false)
                }}
              />
            }
            size='medium'
            open={stackedFirstOpen}
            onClose={() => {
              setStackedFirstOpen(false)
              setStackedSecondOpen(false)
            }}
            {...dialogConfig}
          />

          <Modal
            header={modalHeader}
            content={
              <div style={modalBodyStyles}>
                <p>Second modal, opened on top of the first one.</p>
                {configSummary(dialogConfig)}
              </div>
            }
            footer={
              <Button
                label='Close Second Modal'
                onClick={() => setStackedSecondOpen(false)}
              />
            }
            size='small'
            open={stackedSecondOpen}
            onClose={() => setStackedSecondOpen(false)}
            {...dialogConfig}
          />
        </div>

        <div>
          <p style={sectionTitleStyles}>Swapped modals</p>
          <p style={sectionDescriptionStyles}>
            The first modal closes while the second one opens, so the new modal
            renders before the previous one has fully unmounted.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: getThemedSpacing(500),
              maxWidth: '12.5rem',
            }}
          >
            <Button
              label='Open Modal A'
              onClick={() => setSwapFirstOpen(true)}
            />
          </div>

          <Modal
            header={modalHeader}
            content={
              <div
                style={{
                  ...modalBodyStyles,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: getThemedSpacing(300),
                }}
              >
                <p>Modal A</p>
                {configSummary(dialogConfig)}
                <Button
                  label='Swap To Modal B'
                  onClick={() => {
                    setSwapFirstOpen(false)
                    setSwapSecondOpen(true)
                  }}
                />
              </div>
            }
            footer={
              <Button
                label='Close'
                variant='secondary'
                onClick={() => setSwapFirstOpen(false)}
              />
            }
            size='medium'
            open={swapFirstOpen}
            onClose={() => setSwapFirstOpen(false)}
            {...dialogConfig}
          />

          <Modal
            header={modalHeader}
            content={
              <div style={modalBodyStyles}>
                <p>Modal B, opened while Modal A was closing.</p>
                {configSummary(dialogConfig)}
              </div>
            }
            footer={
              <Button label='Close' onClick={() => setSwapSecondOpen(false)} />
            }
            size='medium'
            open={swapSecondOpen}
            onClose={() => setSwapSecondOpen(false)}
            {...dialogConfig}
          />
        </div>
      </div>
    </DemoWrapper>
  )
}

export default ModalDemo
