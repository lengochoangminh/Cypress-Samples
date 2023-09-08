import { IA11yUtil, IApplitoolsUtil, IUIUtil } from "./index"

export interface IQELibrary {
    ui?: IUIUtil;
    a11y?: IA11yUtil;
    visual?: IApplitoolsUtil;
}