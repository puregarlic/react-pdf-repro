import React from 'react'
import { PDFViewer, Document, Font, Page, Text } from '@react-pdf/renderer'

import PTSansCaption from './fonts/PT_Sans-Caption-Web-Regular.ttf'

Font.register(PTSansCaption, { family: 'PT Sans Caption' })

const App = () => (
  <PDFViewer width="100%" height="100%">
    <Document>
      <Page>
        <Text style={{ fontFamily: 'PT Sans Caption' }}>Hello, world</Text>
      </Page>
    </Document>
  </PDFViewer>
)

export default App
