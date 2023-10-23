import axios from 'axios';


async function loginUser(state: boolean, data: any) {
	try {
		/* const  loginUser = await axios.post(`https://wtfjaub7.execute.com/dev/login`);
		return  loginUser*/;
		console.log(data)
		return state;		
	} catch (err) {
		console.log(err);
	}
}



export {
	loginUser
};

	

