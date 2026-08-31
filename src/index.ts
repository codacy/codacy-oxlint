import { readCodacyRc } from "./codacyrc.ts";
import { engineImpl } from "./engineImpl.ts";

async function main(): Promise<void> {
  try {
    const rc = await readCodacyRc();
    await engineImpl(rc);
  } catch (err) {
    process.stderr.write(`[codacy-oxlint] Fatal error: ${String(err)}\n`);
    process.exit(1);
  }
}

main();
