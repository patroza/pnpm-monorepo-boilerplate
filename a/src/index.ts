import * as FC from "fast-check"

export const someFC = (fc: typeof FC) => fc.string()

someFC(FC)