import { useState } from 'react'
import { Button, IconButton, Sheet } from '../..'
import { CloseIcon } from '../../icons'
import DemoWrapper from '../../UI/DemoWrapper'

const content = (
  <div>
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
    Content Content Content Content Content Content Content Content Content
  </div>
)

const SheetDemo = () => {
  const [showSheet, setShowSheet] = useState({
    closed: false,
    minimized: false,
    mid: false,
    full: false,
  })

  const handleCloseClosedSheet = () => {
    setShowSheet((prev) => ({
      ...prev,
      closed: false,
    }))
  }

  return (
    <DemoWrapper title='Sheet'>
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '1.5625rem' }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          <Sheet
            header={
              <div
                style={{
                  width: '100%',
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <p>Header - Closed</p>
                <IconButton
                  icon={<CloseIcon />}
                  aria-label='Close'
                  onClick={handleCloseClosedSheet}
                />
              </div>
            }
            content={<div style={{ padding: '1rem' }}>{content}</div>}
            footer={<div style={{ padding: '1rem' }}>Footer</div>}
            defaultSnap='closed'
            open={showSheet.closed}
            onClose={handleCloseClosedSheet}
          />

          <Button
            style={{ width: '12.5rem' }}
            label='Show Closed Sheet'
            onClick={() =>
              setShowSheet({
                ...showSheet,
                closed: true,
              })
            }
          />
        </div>

        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          <Sheet
            className='ds-custom-sheet-styles'
            header={
              <div
                style={{
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <p>Header - Minimized</p>
                <IconButton
                  icon={<CloseIcon />}
                  aria-label='Close'
                  onClick={() =>
                    setShowSheet({
                      ...showSheet,
                      minimized: false,
                    })
                  }
                />
              </div>
            }
            content={<div style={{ padding: '1rem' }}>{content}</div>}
            footer={<div style={{ padding: '1rem' }}>Footer</div>}
            open={showSheet.minimized}
            onClose={() => setShowSheet({ ...showSheet, minimized: false })}
          />

          <Button
            style={{ width: '12.5rem' }}
            label='Show Minimized Sheet'
            onClick={() =>
              setShowSheet({
                ...showSheet,
                minimized: true,
              })
            }
          />
        </div>

        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          <Sheet
            header={
              <div
                style={{
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <p>Header - Mid</p>
                <IconButton
                  icon={<CloseIcon />}
                  aria-label='Close'
                  onClick={() =>
                    setShowSheet({
                      ...showSheet,
                      mid: false,
                    })
                  }
                />
              </div>
            }
            content={<div style={{ padding: '1rem' }}>{content}</div>}
            footer={<div style={{ padding: '1rem' }}>Footer</div>}
            defaultSnap='mid'
            open={showSheet.mid}
            onClose={() => setShowSheet({ ...showSheet, mid: false })}
          />

          <Button
            style={{ width: '12.5rem' }}
            label='Show Mid Sheet'
            onClick={() =>
              setShowSheet({
                ...showSheet,
                mid: true,
              })
            }
          />
        </div>

        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          <Sheet
            header={
              <div
                style={{
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <p>Header - Extended</p>
                <IconButton
                  icon={<CloseIcon />}
                  aria-label='Close'
                  onClick={() =>
                    setShowSheet({
                      ...showSheet,
                      full: false,
                    })
                  }
                />
              </div>
            }
            content={<div style={{ padding: '1rem' }}>{content}</div>}
            footer={<div style={{ padding: '1rem' }}>Footer</div>}
            defaultSnap='full'
            open={showSheet.full}
            onClose={() => setShowSheet({ ...showSheet, full: false })}
          />

          <Button
            style={{ width: '12.5rem' }}
            label='Show Full Sheet'
            onClick={() =>
              setShowSheet({
                ...showSheet,
                full: true,
              })
            }
          />
        </div>
      </div>
    </DemoWrapper>
  )
}

export default SheetDemo
