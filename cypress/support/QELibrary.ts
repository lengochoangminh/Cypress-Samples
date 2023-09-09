import { IQELibrary } from "../types";
import { A11yUtil } from "./A11yUtil";
import { AnalyticsUtil } from "./AnalyticsUtil";
import { ApplitoolsUtil } from "./ApplitoolsUtil";
import { UIUtil } from "./UIUtil";

export class QELibrary implements IQELibrary {
    constructor() {
        return {
            a11y: new A11yUtil(),
            visual: new ApplitoolsUtil(),
            ui: new UIUtil(),
            analytics: new AnalyticsUtil(),
        };
    }
}