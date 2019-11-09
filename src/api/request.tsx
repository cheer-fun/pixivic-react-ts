import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

export const baseUrl = 'https://v1.api.pixivic.com';

axios.defaults.baseURL = baseUrl;
const handleError = (error: any) => {

};

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 20000,
  validateStatus (status: number) {
    return status >= 200 && status < 600
  }
});

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, '网络错误');
  }
);

export { axiosInstance };

const request = ({
  url,
  data,
  method = 'post',
  ...rest
}: AxiosRequestConfig) => {
  return axios({
    url,
    data,
    method,
    ...rest,
  })
    .then(function(response: AxiosResponse) {
      // handle success
      return response;
    })
    .then(function(response: AxiosResponse) {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch(function(error: any) {
      // handle error
      handleError(error.response);
    })
    .finally(function() {
      // always executed
    });
};

export default request;