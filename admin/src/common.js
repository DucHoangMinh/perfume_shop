import { useMainStore } from "@/stores/main";
import axios from "axios";
import Cookies from 'js-cookie'
import { useNotification } from '@kyvg/vue3-notification'

const cookie = {
  setUser: (user) => {
    Cookies.set('user', JSON.stringify(user), {secure: true})
  },
  getUser: () => {
    return JSON.parse(Cookies.get('user') || null)
  },
  setToken: (token) => {
    Cookies.set('token', JSON.stringify(token), {secure: true})
  },
  getToken: () => {
    return JSON.parse(Cookies.get('token') || null)
  }
}
const api = {
  get: async (endpoint) => {
    const store = useMainStore()
    axios.defaults.headers.common['token'] = store.accountData.token
    return await axios.get(`http://127.0.0.1:5000${endpoint}`)
  },
  post: async (endpoint, data) => {
    const store = useMainStore()
    axios.defaults.headers.common['token'] = store.accountData.token
    return await axios.post(`http://127.0.0.1:5000${endpoint}`, data)
  },
  put: async (endpoint, data) => {
    const store = useMainStore()
    axios.defaults.headers.common['token'] = store.accountData.token
    return await axios.put(`http://127.0.0.1:5000${endpoint}`, data)
  },
  delete: async (endpoint) => {
    const store = useMainStore()
    axios.defaults.headers.common['token'] = store.accountData.token
    return await axios.delete(`http://127.0.0.1:5000${endpoint}`)
  }
}

const notification = useNotification()
const showNotification = {
  error: (message) => {
    notification.notify({
      title: message,
      type: 'error'
    })
  },
  warning: (message) => {
    notification.notify({
      title: message,
      type: 'warn'
    })
  },
  success: (message) => {
    notification.notify({
      title: message,
      type:'success'
    })
  }
}



const timeFunction = {
  convertCouponTime: (timeStr) => {
    const date = new Date(timeStr);
    return date.toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).replace('lúc', '');
  }
}
const yearList = [1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810,
  1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825,
  1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1840,
  1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1853, 1854, 1855,
  1856, 1857, 1858, 1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870,
  1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885,
  1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900,
  1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915,
  1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930,
  1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945,
  1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960,
  1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975,
  1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990,
  1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
  2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
  2021, 2022, 2023, 2024]

const percentageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
        61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
        81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

//Get date string, return true UTC string
const fixWrongDateByUtc = (dateStr) => {
  let res = new Date(dateStr)
  res.setHours(res.getHours() - res.getTimezoneOffset() / 60)
  return res.toUTCString()
}

const checkLoginStatus = async () => {
  try {
    const { data } = await api.post('/user/check_authenticated?admin=true')
    console.log(location.href)
  } catch (e){
    setTimeout(() => {
      showNotification.error("Lỗi xác thực, vui lòng đăng nhập lại!")
    }, 3000)
    location.href = "/login"
  }
}

export {
  api,
  showNotification,
  yearList,
  timeFunction,
  percentageList,
  fixWrongDateByUtc,
  checkLoginStatus
}
