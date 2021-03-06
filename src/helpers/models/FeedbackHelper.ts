import IFeedback from "../../models/FeedbackModel";
import { getLocalStorage, setLocalStorage } from "../localStorageHelper";

export default class FeedbackHelper {
    private static feedbackStorageKey = 'feedback'

    static addFeedback(feedback: IFeedback | IFeedback[]) {
        let rv
        if (!Array.isArray(feedback)) {
            rv = [feedback, ...this.getFeedback()]
        } else {
            rv = [...feedback, ...this.getFeedback()]
        }


        setLocalStorage(FeedbackHelper.feedbackStorageKey, rv)
        return rv
    }

    static removeFeedback(id: string) {
        const rv = this.getFeedback().filter(feedback => feedback.id !== id)
        setLocalStorage(FeedbackHelper.feedbackStorageKey, rv)
        return rv
    }

    static editFeedback(id: string, feedbackData: Partial<IFeedback>) {
        const feedback = this.getFeedback().map(feedbackItem => {
            return feedbackItem.id === id ? { ...feedbackItem, ...feedbackData } : feedbackItem
        })
        setLocalStorage(FeedbackHelper.feedbackStorageKey, feedback)
    }


    static getFeedback() {
        return getLocalStorage(FeedbackHelper.feedbackStorageKey) as IFeedback[] || [];
    }
}
