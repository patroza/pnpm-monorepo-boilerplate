import * as FC from "fast-check"

export const someOtherFC = (fc: typeof FC) => fc.string()

someOtherFC(FC)