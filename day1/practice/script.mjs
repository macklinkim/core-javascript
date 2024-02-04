import axios from 'axios';

async function getActivity() {
  let response = await axios.get('https://www.boredapi.com/activity');
  console.log(response.data.activity);
}
