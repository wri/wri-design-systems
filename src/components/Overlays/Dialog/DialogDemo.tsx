import { useState, type CSSProperties } from 'react'
import {
  Button,
  Dialog,
  getThemedColor,
  getThemedFontSize,
  getThemedSpacing,
  InlineMessage,
} from '../..'
import DemoWrapper from '../../UI/DemoWrapper'

const dialogBody =
  'Lorem ipsum dolor sit amet consectetur. Sollicitudin aliquet in libero ' +
  'nunc scelerisque cras magna hendrerit. Vel neque convallis ac velit sed. ' +
  'Semper diam metus.'

const actionFooter = (onClose: () => void) => (
  <>
    <Button label='Cancel' variant='secondary' onClick={onClose} />
    <Button label='Save' onClick={onClose} />
  </>
)

const destructiveFooter = (onClose: () => void) => (
  <>
    <Button label='Cancel' variant='secondary' onClick={onClose} />
    <Button label='Delete' variant='negative' onClick={onClose} />
  </>
)

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

const DialogDemo = () => {
  const [defaultOpen, setDefaultOpen] = useState(false)
  const [richBodyOpen, setRichBodyOpen] = useState(false)
  const [blockingOpen, setBlockingOpen] = useState(false)
  const [customWidthOpen, setCustomWidthOpen] = useState(false)
  const [destructiveOpen, setDestructiveOpen] = useState(false)
  const [placementOpen, setPlacementOpen] = useState(false)
  const [placement, setPlacement] = useState<'top' | 'center' | 'bottom'>('top')
  const [nestedFirstOpen, setNestedFirstOpen] = useState(false)
  const [nestedSecondOpen, setNestedSecondOpen] = useState(false)

  return (
    <DemoWrapper title='Dialog'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: getThemedSpacing(700),
        }}
      >
        <div>
          <p style={sectionTitleStyles}>Dialogs</p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: getThemedSpacing(500),
              maxWidth: '15rem',
            }}
          >
            <Button
              label='Default Dialog'
              onClick={() => setDefaultOpen(true)}
            />
            <Button
              label='Rich Body Dialog'
              onClick={() => setRichBodyOpen(true)}
            />
            <Button
              label='Blocking Dialog'
              onClick={() => setBlockingOpen(true)}
            />
            <Button
              label='Custom Width Dialog'
              onClick={() => setCustomWidthOpen(true)}
            />
            <Button
              label='Destructive Dialog'
              onClick={() => setDestructiveOpen(true)}
            />
            <Button
              label='Open First Nested Dialog'
              onClick={() => setNestedFirstOpen(true)}
            />
            <div
              style={{
                display: 'flex',
                gap: getThemedSpacing(300),
              }}
            >
              <Button
                label='Top'
                onClick={() => {
                  setPlacement('top')
                  setPlacementOpen(true)
                }}
              />
              <Button
                label='Center'
                onClick={() => {
                  setPlacement('center')
                  setPlacementOpen(true)
                }}
              />
              <Button
                label='Bottom'
                onClick={() => {
                  setPlacement('bottom')
                  setPlacementOpen(true)
                }}
              />
            </div>
          </div>

          <Dialog
            title='Title'
            open={defaultOpen}
            onClose={() => setDefaultOpen(false)}
            footer={actionFooter(() => setDefaultOpen(false))}
          >
            {dialogBody}
          </Dialog>

          <Dialog
            title='Title'
            open={richBodyOpen}
            onClose={() => setRichBodyOpen(false)}
            footer={actionFooter(() => setRichBodyOpen(false))}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: getThemedSpacing(300),
              }}
            >
              <p style={{ margin: 0 }}>{dialogBody}</p>
              <InlineMessage
                label='This dataset is used by 3 dashboards.'
                variant='warning'
              />
            </div>
          </Dialog>

          <Dialog
            title='Title'
            hideCloseButton
            closeOnEscape={false}
            closeOnInteractOutside={false}
            open={blockingOpen}
            onClose={() => setBlockingOpen(false)}
            footer={actionFooter(() => setBlockingOpen(false))}
          >
            {dialogBody}
          </Dialog>

          <Dialog
            title='Title'
            width='31.25rem'
            open={customWidthOpen}
            onClose={() => setCustomWidthOpen(false)}
            footer={actionFooter(() => setCustomWidthOpen(false))}
          >
            This dialog uses a custom width.
          </Dialog>

          <Dialog
            title='Delete dataset?'
            open={destructiveOpen}
            onClose={() => setDestructiveOpen(false)}
            footer={destructiveFooter(() => setDestructiveOpen(false))}
          >
            {dialogBody}
          </Dialog>

          <Dialog
            title='Title'
            placement={placement}
            open={placementOpen}
            onClose={() => setPlacementOpen(false)}
            footer={actionFooter(() => setPlacementOpen(false))}
          >
            Dialog placement: {placement}
          </Dialog>
        </div>

        <div>
          <p style={sectionTitleStyles}>Nested dialogs</p>
          <p style={sectionDescriptionStyles}>
            Open the first dialog, then open a second one on top of it and close
            it again.
          </p>

          <Dialog
            title='First dialog'
            open={nestedFirstOpen}
            onClose={() => {
              setNestedFirstOpen(false)
              setNestedSecondOpen(false)
            }}
            footer={
              <Button
                label='Close All'
                variant='secondary'
                onClick={() => {
                  setNestedFirstOpen(false)
                  setNestedSecondOpen(false)
                }}
              />
            }
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: getThemedSpacing(300),
              }}
            >
              <p style={{ margin: 0 }}>First dialog</p>
              <Button
                label='Open Second Dialog'
                onClick={() => setNestedSecondOpen(true)}
              />
            </div>
          </Dialog>

          <Dialog
            title='Second dialog'
            width='20rem'
            open={nestedSecondOpen}
            onClose={() => setNestedSecondOpen(false)}
            footer={
              <Button
                label='Close Second Dialog'
                onClick={() => setNestedSecondOpen(false)}
              />
            }
          >
            Second dialog, opened on top of the first one.
          </Dialog>
        </div>
      </div>
    </DemoWrapper>
  )
}

export default DialogDemo
