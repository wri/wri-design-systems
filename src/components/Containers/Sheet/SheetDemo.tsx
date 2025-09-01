import { useState } from 'react'
import { Button, IconButton, Sheet } from '../..'
import { CloseIcon } from '../../icons'

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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ height: '500px', width: '420px', position: 'relative' }}>
          <Sheet
            header={
              <div
                style={{
                  width: '100%',
                  padding: '0 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <p>Header - Closed</p>
                <IconButton
                  icon={<CloseIcon />}
                  aria-label='Close'
                  onClick={() =>
                    setShowSheet({
                      ...showSheet,
                      closed: false,
                    })
                  }
                />
              </div>
            }
            content={<div style={{ padding: '0 16px' }}>{content}</div>}
            footer={<div>Footer</div>}
            defaultSnap='closed'
            open={showSheet.closed}
            onClose={() => setShowSheet({ ...showSheet, closed: false })}
          />
        </div>
        <Button
          style={{ width: '200px' }}
          label='Show Closed Sheet'
          onClick={() =>
            setShowSheet({
              ...showSheet,
              closed: true,
            })
          }
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ height: '500px', width: '420px', position: 'relative' }}>
          <Sheet
            header={
              <div
                style={{
                  padding: '0 16px',
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
            content={<div style={{ padding: '0 16px' }}>{content}</div>}
            footer={<div>Footer</div>}
            open={showSheet.minimized}
            onClose={() => setShowSheet({ ...showSheet, minimized: false })}
          />
        </div>
        <Button
          style={{ width: '200px' }}
          label='Show Minimized Sheet'
          onClick={() =>
            setShowSheet({
              ...showSheet,
              minimized: true,
            })
          }
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ height: '500px', width: '420px', position: 'relative' }}>
          <Sheet
            header={
              <div
                style={{
                  padding: '0 16px',
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
            content={<div style={{ padding: '0 16px' }}>{content}</div>}
            footer={<div>Footer</div>}
            defaultSnap='mid'
            open={showSheet.mid}
            onClose={() => setShowSheet({ ...showSheet, mid: false })}
          />
        </div>
        <Button
          style={{ width: '200px' }}
          label='Show Mid Sheet'
          onClick={() =>
            setShowSheet({
              ...showSheet,
              mid: true,
            })
          }
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ height: '500px', width: '420px', position: 'relative' }}>
          <Sheet
            header={
              <div
                style={{
                  padding: '0 16px',
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
            content={<div style={{ padding: '0 16px' }}>{content}</div>}
            footer={<div>Footer</div>}
            defaultSnap='full'
            open={showSheet.full}
            onClose={() => setShowSheet({ ...showSheet, full: false })}
          />
        </div>
        <Button
          style={{ width: '200px' }}
          label='Show Extended Sheet'
          onClick={() =>
            setShowSheet({
              ...showSheet,
              full: true,
            })
          }
        />
      </div>
    </div>
  )
}

export default SheetDemo
