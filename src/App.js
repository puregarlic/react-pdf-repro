import React, { Component } from 'react'
import { PDFViewer, Document, Font, Page, Text } from '@react-pdf/renderer'

import PTSansCaption from './fonts/PT_Sans-Caption-Web-Regular.ttf'

Font.register(PTSansCaption, { family: 'PT Sans Caption' })

class App extends Component {
  render() {
    return (
      <PDFViewer width="100vw" height="100vh">
        <Document>
          <Page>
            <Text style={{ fontFamily: 'PT Sans Caption' }}>Hello, world</Text>
          </Page>
        </Document>
      </PDFViewer>
    )
  }
}

export default App
