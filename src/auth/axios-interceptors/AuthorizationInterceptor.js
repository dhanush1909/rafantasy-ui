async function requireAuthorization(config) {
  const accessToken = localStorage.getItem("accessToken");
  config.headers["Authorization"] = `Bearer ${accessToken}`;
  return config;
}

function install(axiosInstance) {
  axiosInstance.interceptors.request.use(requireAuthorization);
}

export class AuthorizationInterceptor {
  static install = install;
}
