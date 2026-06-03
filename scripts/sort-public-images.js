import { promises as fs } from 'fs'
import path from 'path'

const publicDir = path.resolve(process.cwd(), 'public')
const imageExts = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']
const dryRun = process.argv.includes('--dry')

async function sortImages() {
  try {
    const entries = await fs.readdir(publicDir, { withFileTypes: true })
    for (const entry of entries) {
      if (!entry.isFile()) continue
      const ext = path.extname(entry.name).toLowerCase()
      if (!imageExts.includes(ext)) continue

      const destDir = path.join(publicDir, 'images', ext.replace('.', ''))
      const srcPath = path.join(publicDir, entry.name)
      const destPath = path.join(destDir, entry.name)

      if (dryRun) {
        console.log(`[dry] would move ${srcPath} -> ${destPath}`)
        continue
      }

      await fs.mkdir(destDir, { recursive: true })
      await fs.rename(srcPath, destPath)
      console.log(`Moved ${entry.name} -> ${path.relative(publicDir, destPath)}`)
    }
    console.log('Done.')
  } catch (err) {
    console.error('Error sorting images:', err)
    process.exitCode = 1
  }
}

sortImages()
