// Slidev mengunci manualChunks di konfigurasi build-nya, dan itu bentrok dengan
// mode satu file (codeSplitting dimatikan). Skrip ini mengganti nama kuncinya
// supaya diabaikan, hanya untuk build satu file. Jalankan sebelum build:single.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const dir = 'node_modules/@slidev/cli/dist'
let patched = 0
for (const f of readdirSync(dir)) {
  const p = join(dir, f)
  if (!statSync(p).isFile() || !f.endsWith('.mjs')) continue
  const src = readFileSync(p, 'utf8')
  if (!src.includes('manualChunks(id)')) continue
  writeFileSync(p, src.replace(/manualChunks\(id\)/g, 'xManualChunks(id)'))
  patched++
  console.log('ditambal:', p)
}
console.log(patched ? `selesai, ${patched} file` : 'tidak ada yang perlu ditambal')
