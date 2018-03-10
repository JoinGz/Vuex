const state = {
	num : 10
}
const mutations =  {
	change(state){
		state.num++
	}
}
const getters = {
	num1(state){
		return state.num
	}
}
export default {
	state,
	mutations,
	getters
}
