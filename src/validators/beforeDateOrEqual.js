import {withParams, req} from 'vuelidate/lib/validators/common'

export default (date) => withParams(
    {type: 'date', date},
    value => {
        if (!req(value)) return true
        let targetDate = new Date(date);
        let userDate   = new Date(value);
        return userDate <= targetDate
    }
)