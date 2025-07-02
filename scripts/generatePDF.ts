import http from 'http'
import handler from 'serve-handler'
import puppeteer from 'puppeteer'

const port = 4173
const host = 'localhost'

const url = `http://${host}:${port}/?isPDF`
const outputPdfPath = './dist/assets/vadim-cherepenichev.pdf'

export const generatePDF = async () =>
{
  console.log(`PDF Generator: Starting server at ${url}...`)

  const server = http.createServer((req, res) =>
    handler(req, res, { public: 'dist' })
  )

  server.on('error', (err) => console.error('PDF Generator: Server error!', err))

  await new Promise<void>(resolve => server.listen(port, host, 1, resolve))

  console.log(`PDF Generator: Server is running at ${url}`)

  try
  {
    const browser = await puppeteer.launch()

    const page = await browser.newPage()

    console.log('PDF Generator: Waiting for page to load...')

    await page.goto(url, { waitUntil: 'networkidle0' })

    console.log('PDF Generator: Page loaded, generating PDF...')

    await page.pdf({
      path: outputPdfPath,
      format: 'A4',
      printBackground: true
    })

    await browser.close()

    console.log(`PDF Generator: completed successfully. File saved at ${outputPdfPath}.`)
  }
  catch (error)
  {
    console.error('PDF Generator: Error generating PDF:', error)
  }
  finally
  {
    console.log('PDF Generator: Closing server...')
    server.close()
  }
}