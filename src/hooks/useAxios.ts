import axios, { Axios } from 'axios'

type TUseAxios = {
  getInstances: (url: string) => Axios
  get: (params: { url: string; option?: {} }) => Promise<any>
  promiseGet: (params: { url: string; option?: {} }) => Promise<any>
  post: (params: { url: string; data: {}; option?: {} }) => Promise<any>
  promisePost: (params: { url: string; data: {}; option?: {} }) => Promise<any>
  put: (params: { url: string; data: {}; option?: {} }) => Promise<any>
  promisePut: (params: { url: string; data: {}; option?: {} }) => Promise<any>
  patch: (params: { url: string; data: {}; option?: {} }) => Promise<any>
  promisePatch: (params: { url: string; data: {}; option?: {} }) => Promise<any>
  del: (params: { url: string; option?: {} }) => Promise<any>
  promiseDel: (params: { url: string; option?: {} }) => Promise<any>
  getFetch: (url: string) => Promise<any>
  postFetch: (url: string, data: {}) => Promise<any>
  putFetch: (url: string, data: {}) => Promise<any>
  patchFetch: (url: string, data: {}) => Promise<any>
  delFetch: (url: string) => Promise<any>
}

type TAxiosType = {
  INTERNAL: string
  EXTERNAL: string
}

const AxiosType: TAxiosType = {
  INTERNAL: 'Internal',
  EXTERNAL: 'External',
}

/**
 * axios 인스턴스 생성 후 반환
 * @returns http request instance - get, post, put, patch, delete (promise 접수사가 붙은 함수는 promise 반환)
 */
export function useAxios(lang = ''): TUseAxios {
  const getInstances = (url: string) => {
    /**
     * url이 http로 시작하면 외부 서버로 판단
     */
    let type = AxiosType.INTERNAL
    url.startsWith('http') ? (type = AxiosType.EXTERNAL) : ''

    /**
     * 내부 서버로 요청 시 lang 헤더 추가
     */
    let headerValue: { Accept: string; lang?: string } = {
      Accept: 'application/json',
    }
    url.startsWith('https') ? '' : (headerValue['lang'] = lang)

    return axios.create({
      baseURL: type === AxiosType.INTERNAL ? process.env.NEXT_PUBLIC_API_SERVER_PATH : '',
      headers: headerValue,
    })
  }

  // request 추가 로직
  axios.interceptors.request.use((config) => {
    return config
  })

  // response 추가 로직
  axios.interceptors.request.use(undefined, (error) => {})

  const get = async ({ url, option = {} }: { url: string; option?: {} }) => {
    return await getInstances(url)
      .get(url, option)
      .then((res) => res.data)
      .catch(console.error)
  }

  const promiseGet = async ({ url, option = {} }: { url: string; option?: {} }) => {
    return await getInstances(url).get(url, option)
  }

  const post = async ({ url, data, option = {} }: { url: string; data: {}; option?: {} }) => {
    return await getInstances(url)
      .post(url, data, option)
      .then((res) => res.data)
      .catch(console.error)
  }

  const promisePost = async ({ url, data, option = {} }: { url: string; data: {}; option?: {} }) => {
    return await getInstances(url).post(url, data, option)
  }

  const put = async ({ url, data, option = {} }: { url: string; data: {}; option?: {} }) => {
    return await getInstances(url)
      .put(url, data, option)
      .then((res) => res.data)
      .catch(console.error)
  }

  const promisePut = async ({ url, data, option = {} }: { url: string; data: {}; option?: {} }) => {
    return await getInstances(url).put(url, data, option)
  }

  const patch = async ({ url, data, option = {} }: { url: string; data: {}; option?: {} }) => {
    return await getInstances(url)
      .patch(url, data, option)
      .then((res) => res.data)
      .catch(console.error)
  }

  const promisePatch = async ({ url, data, option = {} }: { url: string; data: {}; option?: {} }) => {
    return await getInstances(url).patch(url, data, option)
  }

  const del = async ({ url, option = {} }: { url: string; option?: {} }) => {
    return await getInstances(url)
      .delete(url, option)
      .then((res) => res.data)
      .catch(console.error)
  }

  const promiseDel = async ({ url, option = {} }: { url: string; option?: {} }) => {
    return await getInstances(url).delete(url, option)
  }

  const getFetch: (url: string) => Promise<any> = (url: string) => axios.get(url).then((res) => res.data)
  const postFetch: (url: string, data: {}) => Promise<any> = (url: string, data: {}) =>
    axios.post(url, data).then((res) => res.data)
  const putFetch: (url: string, data: {}) => Promise<any> = (url: string, data: {}) =>
    axios.put(url, data).then((res) => res.data)
  const patchFetch: (url: string, data: {}) => Promise<any> = (url: string, data: {}) =>
    axios.patch(url, data).then((res) => res.data)
  const delFetch: (url: string) => Promise<any> = (url: string) => axios.delete(url).then((res) => res.data)

  return {
    getInstances,
    get,
    promiseGet,
    post,
    promisePost,
    put,
    promisePut,
    patch,
    promisePatch,
    del,
    promiseDel,
    getFetch,
    postFetch,
    putFetch,
    patchFetch,
    delFetch,
  }
}
