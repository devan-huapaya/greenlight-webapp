import authReducer from './auth'
import counterReducer from './counter'
import myRequestsReducer from './myRequests'
import navigatorsReducer from './navigators'

export default {
	auth: authReducer,
	counter: counterReducer,
	myRequests: myRequestsReducer,
	navigators: navigatorsReducer
}
